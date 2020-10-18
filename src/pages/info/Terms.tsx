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
        {t('dev:loremIpsum.1')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('dev:loremIpsum.2')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('dev:loremIpsum.3')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('dev:loremIpsum.4')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('dev:loremIpsum.5')}
      </Typography>
    </>
  );

  return { title, content };
};

export default TermsPage;
