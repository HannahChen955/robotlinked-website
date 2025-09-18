import { useTranslation } from 'react-i18next';
import { Users, ArrowRight, CheckCircle, Zap, Target } from 'lucide-react';

const TalentServices = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('talent.title', 'Specialized Headhunting for AI Hardware & Robotics')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('talent.subtitle', 'From prototyping to mass production, we connect you with China-based talent')}
            </p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('talent.description', 'Find talent who meet global standards and execute locally.')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105 shadow-lg"
              >
                {t('talent.cta.primary', 'Submit Hiring Request')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#roles"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:scale-105"
              >
{t('talent.cta.secondary', 'View Role Examples')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('talent.pain_points.title', 'We Solve the Hardest Hiring Challenges')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all text-center">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mx-auto mb-4">
                  {num === 1 && <Target className="w-8 h-8 text-blue-600" />}
                  {num === 2 && <Zap className="w-8 h-8 text-blue-600" />}
                  {num === 3 && <Users className="w-8 h-8 text-blue-600" />}
                  {num === 4 && <CheckCircle className="w-8 h-8 text-blue-600" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`talent.pain_points.point${num}.title`, `Challenge ${num}`)}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(`talent.pain_points.point${num}.desc`, 'We solve this challenge effectively')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('talent.process_new.title', 'Our Process')}
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="text-center relative">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {num}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t(`talent.process_new.step${num}.title`, `Step ${num}`)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(`talent.process_new.step${num}.desc`, 'Process description')}
                  </p>
                </div>
                {num < 5 && (
                  <div className="hidden md:block absolute top-8 left-full w-8">
                    <ArrowRight className="w-6 h-6 text-blue-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Roles Section */}
      <section id="roles" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('talent.core_roles.title', 'What We Do Best')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['manufacturing', 'supply_chain', 'quality', 'leadership'].map((category, index) => (
              <div key={category} className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {t(`talent.core_roles.${category}.title`, `Category ${index + 1}`)}
                </h3>
                <div className="space-y-2">
                  {(t(`talent.core_roles.${category}.roles`, { returnObjects: true }) || []).map((role, roleIndex) => (
                    <div key={roleIndex} className="bg-white p-2 rounded-lg text-sm text-gray-700 text-center">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('talent.engagement.title', 'Flexible Engagement Models')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-gray-50 p-8 rounded-2xl text-center">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t(`talent.engagement.model${num}.title`, `Model ${num}`)}
                </h3>
                <p className="text-gray-600 mb-2">
                  {t(`talent.engagement.model${num}.desc`, 'Model description')}
                </p>
                <p className="text-sm text-gray-500">
                  {t(`talent.engagement.model${num}.detail`, 'Model details')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentServices;