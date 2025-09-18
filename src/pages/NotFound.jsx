import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {t('404.title')}
        </h1>
        <p className="text-gray-600 mb-8">
          {t('404.message')}
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          {t('404.back_home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;