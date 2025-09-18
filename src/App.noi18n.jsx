import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
// import './i18n'; // 暂时注释掉i18n

// Simple Header without i18n
const SimpleHeader = () => (
  <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16 md:h-20">
        <a href="/" className="flex items-center py-2">
          <span className="text-2xl font-bold text-gray-900">RobotLinked</span>
        </a>
        <div className="hidden md:flex md:items-center md:gap-8">
          <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">首页</a>
          <a href="/services" className="text-gray-700 hover:text-gray-900 font-medium">服务</a>
          <a href="/clients" className="text-gray-700 hover:text-gray-900 font-medium">客户</a>
          <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">关于我们</a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">联系我们</a>
        </div>
      </div>
    </nav>
  </header>
);

// Simple Footer
const SimpleFooter = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p>© 2024 RobotLinked. 保留所有权利。</p>
    </div>
  </footer>
);

// Simple pages without i18n
const HomePage = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          帮助全球 AI 硬件与机器人公司在中国成功量产
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          我们提供两大核心服务：人才服务与供应链解决方案
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold">
            预约咨询
          </a>
          <a href="/services" className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold">
            查看服务
          </a>
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            两大核心服务
          </h2>
          <p className="text-xl text-gray-600">
            从人才到方案，一站式解决中国制造挑战
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">人才服务</h3>
            <p className="text-gray-700">制造与供应链团队搭建</p>
          </div>
          <div className="bg-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">方案服务</h3>
            <p className="text-gray-700">供应链落地与量产爬坡</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ServicesPage = () => (
  <div className="min-h-screen py-16 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">我们的服务</h1>
      <p className="text-xl text-gray-600">人才服务 + 供应链解决方案</p>
    </div>
  </div>
);

const ClientsPage = () => (
  <div className="min-h-screen py-16 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">客户案例</h1>
      <p className="text-xl text-gray-600">服务全球AI硬件与机器人公司</p>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen py-16 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h1>
      <p className="text-xl text-gray-600">专业的中国制造专家团队</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen py-16 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
      <p className="text-xl text-gray-600">service@robotlinked.com</p>
    </div>
  </div>
);

const NotFound = () => (
  <div className="min-h-screen py-16 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 Not Found</h1>
      <p className="text-xl text-gray-600">页面未找到</p>
    </div>
  </div>
);

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen flex flex-col">
          <SimpleHeader />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Legacy redirects */}
              <Route path="/talent" element={<ServicesPage />} />
              <Route path="/solutions" element={<ServicesPage />} />
              <Route path="/advantages" element={<AboutPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <SimpleFooter />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;