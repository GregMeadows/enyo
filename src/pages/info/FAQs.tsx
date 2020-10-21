import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { InfoPage } from './types';

const FAQsPage = (): InfoPage => {
  const { t } = useTranslation();

  const title = t('pages.info.faq.title');
  const content = (
    <>
      <Typography variant="h4">{t('pages.info.faq.ship.title')}</Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.faq.ship.1')}
      </Typography>
      <br />
      <Typography variant="h4">{t('pages.info.faq.arrive.title')}</Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.faq.arrive.1')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.faq.arrive.2')}
      </Typography>
      <br />
      <Typography variant="h4">{t('pages.info.faq.care.title')}</Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.faq.care.1')}
      </Typography>
      <br />
      <Typography variant="h4">{t('pages.info.faq.returns.title')}</Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.faq.returns.1')}
      </Typography>
      <br />
      <Typography variant="h4">{t('pages.info.faq.contact.title')}</Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.faq.contact.1')}
      </Typography>
      <br />
    </>
  );

  return { title, content };
};

export default FAQsPage;
