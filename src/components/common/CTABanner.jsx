import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTABanner = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  bgColor = 'bg-gray-900',
  textColor = 'text-white',
  className = ''
}) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgColor} ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
          {title}
        </h2>
        <p className={`text-xl mb-8 ${textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryAction && (
            <Link
              to={primaryAction.href}
              className={`inline-flex items-center justify-center px-8 py-4 ${
                bgColor === 'bg-gray-900' ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'
              } font-semibold rounded-xl transition-colors`}
            >
              {primaryAction.text}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          )}
          {secondaryAction && (
            <Link
              to={secondaryAction.href}
              className={`inline-flex items-center justify-center px-8 py-4 border-2 ${
                bgColor === 'bg-gray-900'
                  ? 'border-white text-white hover:bg-white hover:text-gray-900'
                  : 'border-gray-900 text-gray-900 hover:bg-gray-50'
              } font-semibold rounded-xl transition-all hover:scale-105`}
            >
              {secondaryAction.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

CTABanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  primaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  secondaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};

export default CTABanner;