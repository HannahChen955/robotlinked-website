import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, ArrowLeft, User, Tag, Share2 } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '../utils/blogUtils';
import { format } from 'date-fns';
import { zhCN, enUS } from 'date-fns/locale';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLanguageNotice, setShowLanguageNotice] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const postData = await getPostBySlug(slug);

      if (!postData) {
        navigate('/blog');
        return;
      }

      setPost(postData);

      // 获取相关文章
      const allPosts = await getAllPosts();
      const related = allPosts
        .filter(p => p.slug !== slug)
        .filter(p => p.tags?.some(tag => postData.tags?.includes(tag)))
        .slice(0, 3);
      setRelatedPosts(related);

      setLoading(false);
    };

    fetchPost();
  }, [slug, navigate]);

  // 处理语言切换 - 如果是创始人主张，自动跳转到对应语言版本
  useEffect(() => {
    if (!post) return;

    if (post.isFounderStatement) {
      const targetSlug = i18n.language === 'zh' ? 'founder-statement-zh' : 'founder-statement-en';
      if (slug !== targetSlug) {
        navigate(`/blog/${targetSlug}`);
      }
      setShowLanguageNotice(false);
    } else if (i18n.language === 'en' && (!post.language || post.language === 'zh')) {
      // 如果是其他文章且切换到英文，显示提示（文章只有中文版）
      setShowLanguageNotice(true);
    } else {
      setShowLanguageNotice(false);
    }
  }, [i18n.language, post, slug, navigate]);

  const getDateLocale = () => i18n.language === 'zh' ? zhCN : enUS;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(i18n.language === 'zh' ? '链接已复制！' : 'Link copied!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            {i18n.language === 'zh' ? '返回博客' : 'Back to Blog'}
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/90">
              {post.author && (
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.date), 'MMMM d, yyyy', { locale: getDateLocale() })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 hover:text-white transition-colors ml-auto"
              >
                <Share2 className="w-4 h-4" />
                {i18n.language === 'zh' ? '分享' : 'Share'}
              </button>
            </div>

            {post.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 bg-white/20 backdrop-blur text-white text-sm px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Language Notice */}
          {showLanguageNotice && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                This article is currently only available in Chinese. The content below is displayed in Chinese.
              </p>
            </div>
          )}

          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto rounded-xl shadow-lg mb-8"
            />
          )}

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none
              prose-headings:font-bold
              prose-h1:text-3xl
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-li:text-gray-700
              prose-strong:text-gray-900
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-ul:list-disc prose-ul:pl-5
              prose-img:rounded-lg
              prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              {i18n.language === 'zh' ? '相关文章' : 'Related Articles'}
            </h2>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                >
                  <div className="text-sm text-gray-500 mb-2">
                    {format(new Date(relatedPost.date), 'MMM d, yyyy', { locale: getDateLocale() })}
                  </div>
                  <h3 className="font-bold text-lg mb-2 hover:text-blue-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedPost.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;