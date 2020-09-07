import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
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
      <h1>{t('welcome')}</h1>
      <p>{t('loremIpsum.1')}</p>
      <p>{t('loremIpsum.2')}</p>
      <p>{t('loremIpsum.3')}</p>
      <p>{t('loremIpsum.4')}</p>
      <p>{t('loremIpsum.5')}</p>
    </section>
  );
};
export default Homepage;
