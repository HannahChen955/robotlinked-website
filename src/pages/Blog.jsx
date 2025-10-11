import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { getAllPosts } from '../utils/blogUtils';
import { format } from 'date-fns';
import { zhCN, enUS } from 'date-fns/locale';

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState('all');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const allPosts = await getAllPosts();
      // 根据当前语言过滤文章
      const filteredByLang = allPosts.filter(post => {
        // 所有文章都根据语言显示对应版本
        return (i18n.language === 'zh' && post.language === 'zh') ||
               (i18n.language === 'en' && post.language === 'en');
      });
      setPosts(filteredByLang);
      setLoading(false);
    };

    fetchPosts();
  }, [i18n.language]);

  // 获取所有标签
  const allTags = ['all', ...new Set(posts.flatMap(post => post.tags || []))];

  // 根据选中的标签过滤文章
  const filteredPosts = selectedTag === 'all'
    ? posts
    : posts.filter(post => post.tags?.includes(selectedTag));

  const getDateLocale = () => i18n.language === 'zh' ? zhCN : enUS;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {i18n.language === 'zh' ? '博客与见解' : 'Blog & Insights'}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {i18n.language === 'zh'
                ? '分享我们在机器人行业的经验、见解和成功案例'
                : 'Sharing our experience, insights and success stories in robotics'}
            </p>
          </div>
        </div>
      </section>

      {/* Tags Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag === 'all'
                  ? (i18n.language === 'zh' ? '全部' : 'All')
                  : tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {i18n.language === 'zh' ? '暂无文章' : 'No posts available'}
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  {post.coverImage && (
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    </div>
                  )}
                  {!post.coverImage && (
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600" />
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(post.date), 'MMM d, yyyy', { locale: getDateLocale() })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.summary}
                    </p>

                    {post.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <span key={tag} className="inline-flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                    >
                      {i18n.language === 'zh' ? '阅读更多' : 'Read More'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;