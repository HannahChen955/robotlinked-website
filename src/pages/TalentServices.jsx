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
              {t('talent.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('talent.subtitle')}
            </p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('talent.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105 shadow-lg"
              >
                {t('talent.cta.primary')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#roles"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:scale-105"
              >
                {t('talent.cta.secondary')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('talent.why_choose.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('talent.why_choose.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      {num === 1 && <Target className="w-6 h-6 text-blue-600" />}
                      {num === 2 && <Zap className="w-6 h-6 text-blue-600" />}
                      {num === 3 && <Users className="w-6 h-6 text-blue-600" />}
                      {num === 4 && <CheckCircle className="w-6 h-6 text-blue-600" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">
                      {t(`talent.why_choose.challenge${num}.label`)}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">The Challenge</p>
                        <p className="text-gray-700">{t(`talent.why_choose.challenge${num}.problem`)}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Our Solution</p>
                        <p className="text-gray-700">{t(`talent.why_choose.challenge${num}.solution`)}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
              {t('talent.process_new.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('talent.process_new.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="text-center relative">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {num}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t(`talent.process_new.step${num}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(`talent.process_new.step${num}.desc`)}
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
              {t('talent.core_roles.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('talent.core_roles.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['manufacturing', 'supply_chain', 'quality', 'leadership'].map((category, index) => (
              <div key={category} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`talent.core_roles.${category}.title`)}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t(`talent.core_roles.${category}.desc`)}
                </p>
                <div className="space-y-2">
                  {(t(`talent.core_roles.${category}.roles`, { returnObjects: true }) || []).map((role, roleIndex) => (
                    <div key={roleIndex} className="bg-white p-3 rounded-lg text-sm text-gray-700 border border-gray-100">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('talent.engagement.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('talent.engagement.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`talent.engagement.model${num}.title`)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(`talent.engagement.model${num}.desc`)}
                </p>
                <p className="text-sm font-medium text-blue-600 mb-4">
                  {t(`talent.engagement.model${num}.best_for`)}
                </p>
                <div className="bg-gray-50 p-4 rounded-xl mb-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    {(t(`talent.engagement.model${num}.deliverables`, { returnObjects: true }) || []).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  {t(`talent.engagement.model${num}.pricing`)}
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