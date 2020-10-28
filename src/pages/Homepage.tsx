import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Trans, useTranslation } from 'react-i18next';
import { Typography, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
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
import WingedBorder from '../components/WingedBorder';

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      padding: '2rem 0',
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
      margin: '5rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rotated: {
      display: 'inline-flex',
      alignItems: 'baseline',
      textTransform: 'uppercase',
      transform: 'rotate(90deg) translate(50%, 0)',
      position: 'absolute',
      '& > svg': {
        marginLeft: '0.4rem',
        height: '1em',
        width: '1em',
        fontSize: '0.7rem',
      },
    },
    rotatedRight: {
      right: 0,
    },
    rotatedLeft: {
      left: 0,
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
        <WingedBorder left right direction="down" length={90} />
        <div className={clsx(classes.rotated, classes.rotatedLeft)}>
          <Typography variant="subtitle1">
            <Trans key="pages.homepage.decor.loading">
              Loading <strong>Kit</strong>
            </Trans>
          </Typography>
          <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" fill="currentColor" />
          </svg>
        </div>
        <div className={classes.kit}>
          <img
            src={isLightMode() ? enyoProHomeFrontImg : enyoProAwayFrontImg}
            alt={t('pages.homepage.kit.front')}
          />
        </div>
        <WingedBorder right direction="up" length={80} />
        <div className={classes.kit}>
          <img
            src={isLightMode() ? enyoProHomeBackImg : enyoProAwayBackImg}
            alt={t('pages.homepage.kit.back')}
          />
        </div>
        <WingedBorder left direction="down" length={80} />
        <div className={clsx(classes.rotated, classes.rotatedRight)}>
          <Typography variant="subtitle1">
            <Trans key="pages.homepage.decor.loading2">
              Loading <strong>Fabric</strong>
            </Trans>
          </Typography>
          <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" fill="currentColor" />
          </svg>
        </div>
        <div className={classes.kit}>
          <img
            src={isLightMode() ? enyoProHomeFrontImg : enyoProAwayFrontImg}
            alt={t('pages.homepage.kit.front')}
          />
        </div>
        <WingedBorder left right direction="up" length={90} />
      </section>
    </>
  );
};
export default Homepage;
