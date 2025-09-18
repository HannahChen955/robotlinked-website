import PropTypes from 'prop-types';
import { ArrowRight } from 'lucide-react';

const ProcessTimeline = ({ steps, orientation = 'horizontal', colorScheme = 'blue' }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      number: 'bg-blue-600',
      arrow: 'text-blue-300',
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      number: 'bg-purple-600',
      arrow: 'text-purple-300',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-100',
      number: 'bg-green-600',
      arrow: 'text-green-300',
    },
  };

  const colors = colorClasses[colorScheme] || colorClasses.blue;

  if (orientation === 'vertical') {
    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-sm">
            <div className="flex-shrink-0">
              <div className={`w-10 h-10 ${colors.number} text-white rounded-full flex items-center justify-center font-semibold`}>
                {index + 1}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          <div className={`${colors.bg} p-6 rounded-xl border ${colors.border}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-8 h-8 ${colors.number} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                {index + 1}
              </div>
              <h4 className="font-semibold text-gray-900">{step.title}</h4>
            </div>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
              <ArrowRight className={`w-6 h-6 ${colors.arrow}`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

ProcessTimeline.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  colorScheme: PropTypes.oneOf(['blue', 'purple', 'green']),
};

export default ProcessTimeline;