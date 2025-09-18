import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhTranslations from './zh.json';
import enTranslations from './en.json';

const resources = {
  zh: {
    translation: zhTranslations
  },
  en: {
    translation: enTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // 默认英文
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;