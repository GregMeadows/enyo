import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(
  () => ({
    root: {
      margin: 0,
    },
  }),
  {
    classNamePrefix: 'homepage',
  }
);

const Homepage: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.root}>
      <Typography variant="h3">{t('welcome')}</Typography>
      <Typography variant="body1">{t('dev:loremIpsum.1')}</Typography>
      <Typography variant="body1">{t('dev:loremIpsum.2')}</Typography>
      <Typography variant="body1">{t('dev:loremIpsum.3')}</Typography>
      <Typography variant="body1">{t('dev:loremIpsum.4')}</Typography>
      <Typography variant="body1">{t('dev:loremIpsum.5')}</Typography>
    </section>
  );
};
export default Homepage;
