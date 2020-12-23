import React, { FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Glitch from '../../components/onView/Glitch';
import FadeUp from '../../components/onView/FadeUp';
import WingedBorder from '../../components/WingedBorder';
import { isLightMode } from '../../stores/settings';
import { BREAKPOINT_LAPTOP, BREAKPOINT_TABLET } from '../../assets/consts';
import enyoProHomeFrontImg from '../../images/clothing/enyo/pro/home.front.png';
import enyoProAwayFrontImg from '../../images/clothing/enyo/pro/away.front.png';
import { ReactComponent as Hex } from '../../images/hex.svg';
import SVGPaths, {
  SVGParams,
  PathDirection,
} from '../../components/onView/SVGPaths';
import { ReactComponent as ArrowSvg } from '../../images/arrow.svg';

const PATH_SIZE = 4;

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      padding: '5rem 0',
      position: 'relative',
      background: theme.palette.background.default,
    },
    rotated: {
      display: 'inline-flex',
      alignItems: 'baseline',
      textTransform: 'uppercase',
      transform: 'rotate(-90deg) translate(-50%, 20%)',
      transformOrigin: '0 0',
      position: 'absolute',
      left: 0,
    },
    rotatedContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    titleContainer: {
      margin: '1rem 4vw',
    },
    title: {
      lineHeight: '60%',
    },
    kitInfoContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: '10vw',
      paddingRight: '3vw',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        order: 1,
        padding: '2rem 6vw',
      },
    },
    kitInfo: {
      position: 'relative',
    },
    kitInfoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      padding: '50px 6vw 50px 3vw',
    },
    kitInfoText: {
      [theme.breakpoints.up(BREAKPOINT_LAPTOP)]: {
        fontSize: '1.3rem',
      },
    },
    kitItem: {
      paddingTop: '4vh',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    hexContainer: {
      position: 'absolute',
      left: '41%',
      top: '36%',
    },
    hex: {
      display: 'block',
      fill: theme.palette.primary.main,
      height: 70,
      width: 70,
    },
    arrows: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      left: 10,
      bottom: -50,
      justifyContent: 'space-between',
      height: 100,
    },
    arrow: {
      height: 40,
      '&.upper': {
        fill: theme.palette.text.primary,
      },
      '&.lower': {
        bottom: -50,
        fill: theme.palette.primary.main,
      },
    },
  }),
  {
    classNamePrefix: 'section-1',
  }
);

const Section1: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [viewRef, inView] = useInView({
    threshold: 0.6,
  });

  const svgPaths: SVGParams[] = [
    {
      id: '1_diagonal',
      direction: PathDirection.RIGHT_DOWN,
      duration: 0.2,
      style: { height: 50, left: '85%' },
      reverseAnimation: true,
    },
    {
      id: '2_horizontal',
      direction: PathDirection.HORIZONTAL,
      duration: 0.3,
      style: { height: PATH_SIZE, width: '85%' },
      reverseAnimation: true,
    },
    {
      id: '3_vertcal',
      direction: PathDirection.VERTICAL,
      duration: 0.28,
      style: { height: '100%', width: PATH_SIZE },
    },
    {
      id: '4_horizontal',
      direction: PathDirection.HORIZONTAL,
      duration: 0.3,
      style: { height: PATH_SIZE, width: '100%', bottom: 0 },
    },
    {
      id: '5_vertical',
      direction: PathDirection.VERTICAL,
      duration: 0.3,
      style: { height: '30%', width: PATH_SIZE, right: 0, bottom: 0 },
      reverseAnimation: true,
    },
  ];

  return (
    <section className={classes.info} ref={viewRef}>
      <Glitch show={inView} className={classes.titleContainer}>
        <Typography variant="h1" className={classes.title}>
          {t('pages.homepage.kit.title')}
        </Typography>
      </Glitch>
      <WingedBorder right direction="down" length={85} />
      <Grid container>
        <Grid item className={classes.rotatedContainer}>
          <div className={classes.rotated}>
            <Typography variant="subtitle1">
              {t('pages.homepage.kit.rotated')}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.kitInfoContainer}>
          <div className={classes.kitInfo}>
            <FadeUp delay={2.1} show={inView} className={classes.arrows}>
              <ArrowSvg className={clsx(classes.arrow, 'upper')} />
              <ArrowSvg className={clsx(classes.arrow, 'lower')} />
            </FadeUp>
            <SVGPaths show={inView} delay={1.5} paths={svgPaths} />
            <div className={classes.kitInfoTextContainer}>
              <Typography
                variant="body1"
                paragraph
                className={classes.kitInfoText}
              >
                {t('pages.homepage.kit.text.1')}
              </Typography>
              <Typography variant="body1" className={classes.kitInfoText}>
                {t('pages.homepage.kit.text.2')}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.kitItem}>
          <Glitch
            show={inView}
            rows={7}
            delay={0.5}
            className={classes.hexContainer}
          >
            <Hex className={classes.hex} />
          </Glitch>
          <img
            src={isLightMode() ? enyoProHomeFrontImg : enyoProAwayFrontImg}
            alt={t('pages.homepage.kit.front')}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Section1;
