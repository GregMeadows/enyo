import React, { FunctionComponent } from 'react';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ImageScroller from '../components/ImageScroller';
import bannerImg from '../images/banner.png';
import useTitle from '../hooks/useTitle';
import enyoTeeFront from '../images/tee.enyo.front.png';
import enyoTeeBack from '../images/tee.enyo.back.png';

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      padding: '1rem 8vw',
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
    tee: {
      width: '16rem',
    },
    kit: {
      margin: '6rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  {
    classNamePrefix: 'homepage',
  }
);

const Homepage: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  useTitle();

  return (
    <>
      <ImageScroller image={bannerImg} className={classes.banner}>
        <Typography variant="h1" className={classes.bannerText} />
      </ImageScroller>
      <section className={classes.info}>
        <div className={classes.kit}>
          <img src={enyoTeeFront} alt={t('pages.homepage.kit.front')} />
        </div>
        <div className={classes.kit}>
          <img src={enyoTeeBack} alt={t('pages.homepage.kit.back')} />
        </div>
        <div className={classes.kit}>
          <img src={enyoTeeFront} alt={t('pages.homepage.kit.front')} />
        </div>
      </section>
    </>
  );
};
export default Homepage;
