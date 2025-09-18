import PropTypes from 'prop-types';

const MetricStrip = ({ metrics, className = '' }) => {
  return (
    <div className={`grid md:grid-cols-3 gap-6 ${className}`}>
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
          <div className={`text-3xl font-bold mb-2 ${metric.color || 'text-blue-600'}`}>
            {metric.value}
          </div>
          <div className="text-gray-900 font-semibold mb-2">{metric.label}</div>
          {metric.description && (
            <div className="text-sm text-gray-600">{metric.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

MetricStrip.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default MetricStrip;