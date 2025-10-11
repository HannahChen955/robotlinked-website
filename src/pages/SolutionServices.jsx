import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, Zap, Users, Target, Shield, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

const SolutionServices = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('solutions.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('solutions.subtitle')}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all hover:scale-105 shadow-lg"
              >
                {t('solutions.cta.primary')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Cards Section - Challenge + Solution Pairs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('solutions.solutions_table.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                {/* Problem Section */}
                <div className="mb-4">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-red-100 rounded-lg mr-3">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-sm font-medium text-red-600 uppercase tracking-wide">
                      {t('solutions.solutions_table.problem_header')}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {t(`solutions.solutions_table.row${num}.problem`)}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-4"></div>

                {/* Solution Section */}
                <div>
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-green-100 rounded-lg mr-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-sm font-medium text-green-600 uppercase tracking-wide">
                      {t('solutions.solutions_table.solution_header')}
                    </h3>
                  </div>
                  <p className="text-gray-900 font-medium text-sm">
                    {t(`solutions.solutions_table.row${num}.solution`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('solutions.process.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="text-center relative">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {num}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t(`solutions.process.step${num}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(`solutions.process.step${num}.desc`)}
                  </p>
                </div>
                {num < 5 && (
                  <div className="hidden md:block absolute top-8 left-full w-8">
                    <ArrowRight className="w-6 h-6 text-purple-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('solutions.advantages.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  {num === 1 && <Users className="w-7 h-7 text-purple-600" />}
                  {num === 2 && <Target className="w-7 h-7 text-purple-600" />}
                  {num === 3 && <Zap className="w-7 h-7 text-purple-600" />}
                  {num === 4 && <CheckCircle className="w-7 h-7 text-purple-600" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t(`solutions.advantages.adv${num}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`solutions.advantages.adv${num}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionServices;