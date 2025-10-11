// 博客文章元数据
const blogPostsMetadata = [
  {
    slug: 'ai-native-supply-chain-zh',
    title: '我们的核心竞争力：以轻量化结构与 AI 驱动的团队，赋能全球硬件创新',
    date: '2024-12-15',
    author: 'RobotLinked Team',
    summary: '揭示 RobotLinked 如何通过轻量化团队结构、AI-Native 文化和深厚的供应链经验，成为 AI 硬件团队最信赖的制造合作伙伴。',
    tags: ['团队优势', 'AI-Native', '供应链', '硬件创新'],
    readingTime: '10 min read',
    isFounderStatement: false,
    language: 'zh'
  },
  {
    slug: 'ai-native-supply-chain-en',
    title: 'Our Core Advantage: A Lightweight, AI-Native Team Empowering Global Hardware Innovation',
    date: '2024-12-15',
    author: 'RobotLinked Team',
    summary: 'How RobotLinked helps AI-first teams bridge the gap between software and manufacturing through lightweight structure, AI-native culture, and deep supply chain expertise.',
    tags: ['Team Advantage', 'AI-Native', 'Supply Chain', 'Hardware Innovation'],
    readingTime: '10 min read',
    isFounderStatement: false,
    language: 'en'
  },
  {
    slug: 'founder-statement-zh',
    title: '创始人主张',
    date: '2024-12-01',
    author: 'Jason Zheng',
    summary: '分享我在供应链管理领域十几年的职业历程、价值观和信念，以及对未来服务对象的思考。',
    tags: ['创始人', '企业文化', '供应链管理'],
    readingTime: '8 min read',
    isFounderStatement: true,
    language: 'zh'
  },
  {
    slug: 'founder-statement-en',
    title: 'Founder\'s Statement',
    date: '2024-12-01',
    author: 'Jason Zheng',
    summary: 'Sharing my decade-plus journey in supply chain management, core values, and vision for serving growing companies in emerging technologies.',
    tags: ['Founder', 'Company Culture', 'Supply Chain Management'],
    readingTime: '8 min read',
    isFounderStatement: true,
    language: 'en'
  }
];

export async function getAllPosts() {
  // 暂时返回硬编码的数据，实际部署时可以改为读取markdown文件
  return blogPostsMetadata.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const metadata = blogPostsMetadata.find(p => p.slug === slug);
  if (!metadata) return null;

  try {
    // 尝试获取markdown内容
    const response = await fetch(`/blog-content/${slug}.md`);
    if (response.ok) {
      const content = await response.text();
      // 移除frontmatter部分（如果存在）
      const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '');
      return {
        ...metadata,
        content: contentWithoutFrontmatter
      };
    }
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
  }

  // 如果无法加载内容，返回一个默认内容
  const loadingText = metadata.language === 'en'
    ? '*Article content is loading...*'
    : '*文章内容正在加载中...*';

  return {
    ...metadata,
    content: `# ${metadata.title}\n\n${metadata.summary}\n\n${loadingText}`
  };
}