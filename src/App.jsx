import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import './i18n';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import pages
import Home from './pages/Home';
import TalentServices from './pages/TalentServices';
import SolutionServices from './pages/SolutionServices';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

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
          <Header />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/talent" element={<TalentServices />} />
              <Route path="/solutions" element={<SolutionServices />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* Legacy redirects */}
              <Route path="/services" element={<TalentServices />} />
              <Route path="/advantages" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;