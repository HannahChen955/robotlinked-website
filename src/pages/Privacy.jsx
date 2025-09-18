import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('privacy.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
          <div className="space-y-8">
            {/* Information Collection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.collection.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.collection.content')}
              </p>
            </div>

            {/* Information Usage */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.usage.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.usage.content')}
              </p>
            </div>

            {/* Information Protection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.protection.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.protection.content')}
              </p>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.sharing.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sharing.content')}
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.cookies.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.cookies.content')}
              </p>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.rights.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.rights.content')}
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.contact.content')}
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> service@roblinked.com<br />
                  <strong>Address:</strong> {t('privacy.contact.address')}
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                {t('privacy.updated')}: 2025年1月
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;