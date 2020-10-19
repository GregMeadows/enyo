import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { InfoPage } from './types';

const TermsPage = (): InfoPage => {
  const { t } = useTranslation();

  const title = t('pages.info.terms.title');
  const content = (
    <>
      <Typography variant="body1" paragraph>
        {t('pages.info.terms.main.1')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.terms.main.2')}
      </Typography>
      <Typography variant="body1">{t('pages.info.terms.main.3')}</Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.terms.main.4')}
      </Typography>
      <br />
      <Typography variant="h4">
        {t('pages.info.terms.contract.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.terms.contract.1')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.terms.contract.2')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.terms.contract.3')}
      </Typography>
      <br />
      <Typography variant="h4">{t('pages.info.terms.goods.title')}</Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.terms.goods.1')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.terms.goods.2')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.terms.goods.3')}
      </Typography>
      <br />
      <Typography variant="h4">
        {t('pages.info.terms.copyright.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.terms.copyright.1')}
      </Typography>
      <br />
      <Typography variant="h4">
        {t('pages.info.terms.business.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.terms.business.1')}
      </Typography>
    </>
  );

  return { title, content };
};

export default TermsPage;
