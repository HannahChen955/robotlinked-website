import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Settings, BarChart3, Shield, TrendingUp } from 'lucide-react';

const Solutions = () => {
  const { t } = useTranslation();

  const stages = [
    { name: t('solutions.stages.pilot'), color: 'bg-blue-100 text-blue-800' },
    { name: t('solutions.stages.evt'), color: 'bg-purple-100 text-purple-800' },
    { name: t('solutions.stages.dvt'), color: 'bg-indigo-100 text-indigo-800' },
    { name: t('solutions.stages.pvt'), color: 'bg-green-100 text-green-800' },
    { name: t('solutions.stages.mp'), color: 'bg-gray-900 text-white' },
  ];

  const modules = [
    {
      icon: Package,
      title: t('solutions.modules.module1.title'),
      desc: t('solutions.modules.module1.desc'),
    },
    {
      icon: Settings,
      title: t('solutions.modules.module2.title'),
      desc: t('solutions.modules.module2.desc'),
    },
    {
      icon: BarChart3,
      title: t('solutions.modules.module3.title'),
      desc: t('solutions.modules.module3.desc'),
    },
    {
      icon: Shield,
      title: t('solutions.modules.module4.title'),
      desc: t('solutions.modules.module4.desc'),
    },
    {
      icon: TrendingUp,
      title: t('solutions.modules.module5.title'),
      desc: t('solutions.modules.module5.desc'),
    },
  ];

  const deliverables = [
    t('solutions.deliverables.item1'),
    t('solutions.deliverables.item2'),
    t('solutions.deliverables.item3'),
    t('solutions.deliverables.item4'),
    t('solutions.deliverables.item5'),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {t('solutions.subtitle')}
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              {t('solutions.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Stages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('solutions.stages.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {stages.map((stage, index) => (
              <div key={index} className="flex items-center">
                <div className={`px-6 py-3 rounded-full font-semibold ${stage.color}`}>
                  {stage.name}
                </div>
                {index < stages.length - 1 && (
                  <ArrowRight className="mx-2 w-5 h-5 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('solutions.modules.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600">{module.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('solutions.deliverables.title')}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            {t('common.book_call')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;