import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    {
      name: t('nav.core_services'),
      href: null,
      dropdown: [
        { name: t('nav.talent'), href: '/talent' },
        { name: t('nav.solutions'), href: '/solutions' }
      ]
    },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const isDropdownActive = (dropdown) => {
    return dropdown.some(item => isActive(item.href));
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center py-2">
            <img
              src="/images/logo.svg"
              alt="RobotLinked"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors px-3 py-2 rounded-lg',
                      isDropdownActive(item.dropdown) && 'text-blue-600 bg-blue-50 hover:text-blue-700'
                    )}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {isServicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className={cn(
                            'block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors',
                            isActive(dropdownItem.href) && 'text-blue-600 bg-blue-50'
                          )}
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'text-gray-700 hover:text-gray-900 font-medium transition-colors px-3 py-2 rounded-lg',
                    isActive(item.href) && 'text-blue-600 bg-blue-50 hover:text-blue-700'
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {i18n.language === 'zh' ? 'EN' : '中'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navigation.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="space-y-1">
                  <div className="px-2 py-2 text-gray-900 font-medium">{item.name}</div>
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      to={dropdownItem.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg ml-4',
                        isActive(dropdownItem.href) && 'bg-blue-50 text-blue-600 hover:text-blue-700'
                      )}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block px-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium rounded-lg',
                    isActive(item.href) && 'bg-blue-50 text-blue-600 hover:text-blue-700'
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* Mobile Language Toggle */}
            <div className="mt-4 px-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {i18n.language === 'zh' ? 'English' : '中文'}
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;