import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t('terms.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('terms.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('terms.acceptance.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.acceptance.content')}
              </p>
            </div>

            {/* Services Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('terms.services.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.services.content')}
              </p>
            </div>

            {/* User Obligations */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('terms.obligations.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.obligations.content')}
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('terms.ip.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.ip.content')}
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('terms.liability.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.liability.content')}
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('terms.termination.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.termination.content')}
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('terms.law.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.law.content')}
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('terms.changes.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.changes.content')}
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('terms.contact.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('terms.contact.content')}
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> service@roblinked.com<br />
                  <strong>Address:</strong> {t('terms.contact.address')}
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                {t('terms.updated')}: 2025年1月
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;