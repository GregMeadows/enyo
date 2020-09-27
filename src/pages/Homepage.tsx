import React, { FunctionComponent } from 'react';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import NavButtons from '../components/NavButtons';
import { LinkedItem } from '../components/types';
import ImageScroller from '../components/ImageScroller';
import bannerImg from '../images/banner.jpg';

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      margin: 0,
      padding: '1rem 8vw',
    },
    mainNav: {
      textAlign: 'center',
    },
    banner: {
      height: '82vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bannerText: {
      color: theme.palette.text.primary,
      textTransform: 'uppercase',
      fontWeight: 400,
      background: fade(theme.palette.background.default, 0.4),
      padding: '0.5rem 3rem',
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
    { text: t('nav.main.games'), link: '/' },
    { text: t('nav.main.create'), link: '/' },
    { text: t('nav.main.about'), link: '/' },
  ];

  return (
    <>
      <section className={classes.mainNav}>
        <NavButtons items={mainNavItems} />
      </section>
      <ImageScroller image={bannerImg} className={classes.banner}>
        <Typography variant="h1" className={classes.bannerText}>
          {t('homepage.header')}
        </Typography>
      </ImageScroller>
      <section className={classes.info}>
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
        <Typography variant="body1">{t('dev:loremIpsum.5')}</Typography>
      </section>
    </>
  );
};
export default Homepage;
