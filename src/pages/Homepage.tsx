import React, { FunctionComponent } from 'react';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import NavButtons from '../components/NavButtons';
import { LinkedItem } from '../types';
import ImageScroller from '../components/ImageScroller';
import bannerImg from '../images/banner.jpg';
import { ReactComponent as TeeSvg } from '../images/tee.svg';

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      marginTop: '3rem',
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
    teeContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    tee: {
      width: '75%',
    },
    kit: {
      margin: '10rem 0',
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
    { text: t('nav.main.about'), link: '/about' },
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
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className={classes.teeContainer}>
              <TeeSvg className={classes.tee} />
            </div>
          </Grid>
          <Grid item xs>
            <div className={classes.kit}>
              <Typography variant="h3" paragraph>
                {t('dev:kit', { number: 1 })}
              </Typography>
              <Typography variant="body1">{t('dev:loremIpsum.1')}</Typography>
            </div>
            <div className={classes.kit}>
              <Typography variant="h3" paragraph>
                {t('dev:kit', { number: 2 })}
              </Typography>
              <Typography variant="body1">{t('dev:loremIpsum.2')}</Typography>
            </div>
            <div className={classes.kit}>
              <Typography variant="h3" paragraph>
                {t('dev:kit', { number: 3 })}
              </Typography>
              <Typography variant="body1">{t('dev:loremIpsum.3')}</Typography>
            </div>
            <div className={classes.kit}>
              <Typography variant="h3" paragraph>
                {t('dev:kit', { number: 4 })}
              </Typography>
              <Typography variant="body1">{t('dev:loremIpsum.4')}</Typography>
            </div>
            <div className={classes.kit}>
              <Typography variant="h3" paragraph>
                {t('dev:kit', { number: 5 })}
              </Typography>
              <Typography variant="body1">{t('dev:loremIpsum.5')}</Typography>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};
export default Homepage;
