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
      position: 'relative',
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
      position: 'relative',
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
    float: {
      position: 'absolute',
      width: '28rem',
      '& > h6': {
        textTransform: 'uppercase',
      },
    },
    floatDesign: {
      top: '3%',
      right: '16%',
    },
    floatFit: {
      top: '45%',
      left: '15%',
      textAlign: 'right',
    },
    floatFabric: {
      bottom: '5%',
      right: '15%',
    },
    floatBody: {
      marginTop: theme.spacing(1),
    },
    line: {
      position: 'absolute',
      strokeWidth: 2,
      stroke: theme.palette.primary.main,
    },
    lineDesign: {
      left: -125,
    },
    lineFit: {
      left: 150,
      top: -75,
    },
    lineFabric: {
      left: -125,
      top: -35,
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
          <div className={clsx(classes.float, classes.floatDesign)}>
            <Typography variant="h6">
              {t('pages.homepage.kit.design.title')}
            </Typography>
            <svg
              height={60}
              width={420}
              className={clsx(classes.line, classes.lineDesign)}
            >
              <line x1={0} x2={120} y1={60} y2={2} />
              <line x1={120} x2={420} y1={2} y2={2} />
            </svg>
            <Typography variant="body2" className={classes.floatBody}>
              {t('pages.homepage.kit.design.1')}
            </Typography>
          </div>
        </div>
        <WingedBorder right direction="up" length={80} />
        <div className={classes.kit}>
          <img
            src={isLightMode() ? enyoProHomeBackImg : enyoProAwayBackImg}
            alt={t('pages.homepage.kit.back')}
          />
          <div className={clsx(classes.float, classes.floatFit)}>
            <Typography variant="h6">
              {t('pages.homepage.kit.fit.title')}
            </Typography>
            <svg
              height={102}
              width={420}
              className={clsx(classes.line, classes.lineFit)}
            >
              <line x1={0} x2={300} y1={100} y2={100} />
              <line x1={300} x2={420} y1={100} y2={2} />
            </svg>
            <Typography variant="body2" className={classes.floatBody}>
              {t('pages.homepage.kit.fit.1')}
            </Typography>
          </div>
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
          <div className={clsx(classes.float, classes.floatFabric)}>
            <Typography variant="h6">
              {t('pages.homepage.kit.fabric.title')}
            </Typography>
            <svg
              height={62}
              width={420}
              className={clsx(classes.line, classes.lineFabric)}
            >
              <line x1={0} x2={120} y1={0} y2={60} />
              <line x1={120} x2={420} y1={60} y2={60} />
            </svg>
            <Typography variant="body2" className={classes.floatBody}>
              {t('pages.homepage.kit.fabric.1')}
            </Typography>
          </div>
        </div>
        <WingedBorder left right direction="up" length={90} />
      </section>
    </>
  );
};
export default Homepage;
