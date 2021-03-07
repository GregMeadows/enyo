import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Nested Keys
// Added here to allow extract script to detect their use
// t('company.numbers.company')
// t('company.numbers.vat')

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['translation', 'dev'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    returnEmptyString: false,
    parseMissingKeyHandler: (key) => `MISSING_TRANSLATION: ${key}`,
  });

export default i18n;
