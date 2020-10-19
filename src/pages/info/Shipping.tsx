import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { InfoPage } from './types';

const ShippingPage = (): InfoPage => {
  const { t } = useTranslation();

  const title = t('pages.info.shipping.title');
  const content = (
    <>
      <Typography variant="body1" paragraph>
        {t('pages.info.shipping.main.1')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.shipping.main.2')}
      </Typography>
      <br />
      <Typography variant="h4">
        {t('pages.info.shipping.undamaged.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.shipping.undamaged.1')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.shipping.undamaged.2')}
      </Typography>
      <br />
      <Typography variant="h4">
        {t('pages.info.shipping.damaged.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.shipping.damaged.1')}
      </Typography>
      <br />
      <Typography variant="h4">
        {t('pages.info.shipping.incorrect.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.shipping.incorrect.1')}
      </Typography>
      <br />
      <Typography variant="h4">
        {t('pages.info.shipping.returns.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.info.shipping.returns.1')}
      </Typography>
    </>
  );

  return { title, content };
};

export default ShippingPage;
