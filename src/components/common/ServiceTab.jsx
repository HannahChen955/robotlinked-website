import { useState } from 'react';
import PropTypes from 'prop-types';

const ServiceTab = ({ tabs, defaultTab = 0, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-200">
          <div className="flex gap-2">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === index
                      ? `${tab.activeColor || 'bg-blue-600'} text-white`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  );
};

ServiceTab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      activeColor: PropTypes.string,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultTab: PropTypes.number,
  className: PropTypes.string,
};

export default ServiceTab;