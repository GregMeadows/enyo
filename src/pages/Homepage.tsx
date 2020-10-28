import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@material-ui/core';
import ImageScroller from '../components/ImageScroller';
import bannerImg from '../images/banner.png';
import useTitle from '../hooks/useTitle';
import enyoProHomeFrontImg from '../images/clothing/enyo/pro/home.front.png';
import enyoProHomeBackImg from '../images/clothing/enyo/pro/home.back.png';
import enyoProAwayFrontImg from '../images/clothing/enyo/pro/away.front.png';
import enyoProAwayBackImg from '../images/clothing/enyo/pro/away.back.png';
import bannerTextImg from '../images/banner.text.png';
import { isLightMode } from '../stores/settings';
import { BREAKPOINT_MOBILE } from '../assets/consts';

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      padding: '1rem 8vw',
    },
    banner: {
      height: 820,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        height: 600,
      },
    },
    bannerText: {
      width: '90%',
      maxWidth: '45rem',
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(BREAKPOINT_MOBILE));
  useTitle();

  return (
    <>
      <ImageScroller
        image={bannerImg}
        className={classes.banner}
        offsetY={isMobile ? -240 : -80}
        offsetX={isMobile ? 62 : 50}
        classes={{
          foreground: classes.bannerText,
        }}
      >
        <img src={bannerTextImg} alt={t('company.tag')} />
      </ImageScroller>
      <section className={classes.info}>
        <div className={classes.kit}>
          <img
            src={isLightMode() ? enyoProHomeFrontImg : enyoProAwayFrontImg}
            alt={t('pages.homepage.kit.front')}
          />
        </div>
        <div className={classes.kit}>
          <img
            src={isLightMode() ? enyoProHomeBackImg : enyoProAwayBackImg}
            alt={t('pages.homepage.kit.back')}
          />
        </div>
        <div className={classes.kit}>
          <img
            src={isLightMode() ? enyoProHomeFrontImg : enyoProAwayFrontImg}
            alt={t('pages.homepage.kit.front')}
          />
        </div>
      </section>
    </>
  );
};
export default Homepage;
