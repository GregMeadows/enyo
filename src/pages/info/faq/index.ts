import { InfoPage } from '../types';
import en from './faq_en.md';

const faq: InfoPage = {
  // t('pages.info.faq.title')
  title: 'pages.info.faq.title',
  updated: new Date(2021, 0, 16),
  translations: {
    en,
  },
};

export default faq;
