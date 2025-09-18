import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Simple test pages
const SimplePage = ({ title, content }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-xl text-gray-600">{content}</p>
    </div>
  </div>
);

const SimpleApp = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Simple Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">RobotLinked</h1>
            <nav className="space-x-4">
              <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/services" className="text-gray-700 hover:text-gray-900">Services</a>
              <a href="/clients" className="text-gray-700 hover:text-gray-900">Clients</a>
              <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <SimplePage
                title="Welcome to RobotLinked"
                content="帮助全球 AI 硬件与机器人公司在中国成功量产"
              />
            } />
            <Route path="/services" element={
              <SimplePage
                title="Our Services"
                content="人才服务 + 供应链解决方案"
              />
            } />
            <Route path="/clients" element={
              <SimplePage
                title="Our Clients"
                content="服务全球AI硬件与机器人公司"
              />
            } />
            <Route path="/about" element={
              <SimplePage
                title="About Us"
                content="专业的中国制造专家团队"
              />
            } />
            <Route path="/contact" element={
              <SimplePage
                title="Contact Us"
                content="service@robotlinked.com"
              />
            } />
            <Route path="*" element={
              <SimplePage
                title="404 Not Found"
                content="页面未找到"
              />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default SimpleApp;