import React, { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Terms: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
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
    </div>
  );
};
export default Terms;
