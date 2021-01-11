import { InfoPage } from '../types';
import en from './shipping_en.md';

const shipping: InfoPage = {
  // t('pages.info.shipping.title')
  title: 'pages.info.shipping.title',
  updated: new Date(2020, 11, 25),
  translations: {
    en,
  },
};

export default shipping;
