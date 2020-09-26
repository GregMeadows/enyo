import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import NavButtons from '../components/NavButtons';
import { LinkedItem } from '../components/types';

const useStyles = makeStyles(
  () => ({
    info: {
      margin: 0,
    },
    mainNav: {
      textAlign: 'center',
    },
  }),
  {
    classNamePrefix: 'homepage',
  }
);

const Homepage: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const mainNavItems: LinkedItem[] = [
    { text: t('nav.main.kits'), link: '/' },
    { text: t('nav.main.leagues'), link: '/' },
    { text: t('nav.main.about'), link: '/' },
  ];

  return (
    <>
      <section className={classes.mainNav}>
        <NavButtons items={mainNavItems} />
      </section>
      <section className={classes.info}>
        <Typography variant="body1" gutterBottom>
          {t('dev:loremIpsum.1')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {t('dev:loremIpsum.2')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {t('dev:loremIpsum.3')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {t('dev:loremIpsum.4')}
        </Typography>
        <Typography variant="body1">{t('dev:loremIpsum.5')}</Typography>
      </section>
    </>
  );
};
export default Homepage;
