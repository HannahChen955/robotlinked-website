import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/images/logo.svg"
                alt="RobotLinked"
                className="h-12 md:h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4">
              {t('home.hero.subtitle')}
            </p>
            <div className="space-y-2">
              <a
                href="mailto:service@robotlinked.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                service@robotlinked.com
              </a>
              <a
                href="mailto:jason.zheng@robotlinked.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                jason.zheng@robotlinked.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('nav.services')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/talent"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.talent')}
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.solutions')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t('common.copyright', { year: currentYear })}
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('common.privacy')}
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('common.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;