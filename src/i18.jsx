import i18n from 'i18next';
import {
  default as Backend,
  default as LanguageDetector,
} from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import English from './language/en/translate.json';
import Russian from './language/ru/translate.json';
import Uzbek from './language/uz/translate.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: Uzbek,
      },
      ru: {
        translation: Russian,
      },
      en: {
        translation: English,
      },
    },
    fallbackLng: window.localStorage.getItem('i18nextLng') || 'ru',
    debug: false,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
  });
export default i18n;