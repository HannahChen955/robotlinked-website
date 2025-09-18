import PropTypes from 'prop-types';
import { Star, Award, Clock, CheckCircle } from 'lucide-react';

const CaseCard = ({ caseData, featured = false, className = '' }) => {
  return (
    <div
      className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${
        featured ? 'ring-2 ring-blue-200' : 'border border-gray-100'
      } ${className}`}
    >
      {featured && (
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold text-yellow-700">Featured Case</span>
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        {caseData.tier && (
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
            {caseData.tier}
          </span>
        )}
        <span className="text-gray-600">{caseData.industry}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {caseData.stage && (
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{caseData.stage}</span>
          </div>
        )}
        {caseData.duration && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{caseData.duration}</span>
          </div>
        )}
      </div>

      {caseData.results && (
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
          <ul className="space-y-2">
            {caseData.results.map((result, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

CaseCard.propTypes = {
  caseData: PropTypes.shape({
    tier: PropTypes.string,
    industry: PropTypes.string.isRequired,
    stage: PropTypes.string,
    duration: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  featured: PropTypes.bool,
  className: PropTypes.string,
};

export default CaseCard;