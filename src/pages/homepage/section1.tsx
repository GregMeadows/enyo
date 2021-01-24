import React, { FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Glitch from '../../components/onView/Glitch';
import CenterReveal from '../../components/onView/CenterReveal';
import WingedBorder from '../../components/WingedBorder';
import { isLightMode } from '../../stores/settings';
import { BREAKPOINT_LAPTOP, BREAKPOINT_TABLET } from '../../assets/consts';
import enyoProWhiteFrontImg from '../../images/clothing/enyo/pro/white.front.png';
import enyoProBlackFrontImg from '../../images/clothing/enyo/pro/black.front.png';
import { ReactComponent as Hex } from '../../images/hex.svg';
import SVGPaths, {
  SVGParams,
  PathDirection,
} from '../../components/onView/SVGPaths';
import { ReactComponent as ArrowSvg } from '../../images/arrow.svg';
import RotatedGridText from '../../components/RotatedGridText';
import StyledButton from '../../components/StyledButton';

const PATH_SIZE = 4;

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      padding: '5rem 0 3rem',
      position: 'relative',
      background: theme.palette.background.default,
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
        padding: '1rem 6vw 2rem',
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
      padding: '50px 6vw 40px 3vw',
    },
    kitInfoText: {
      [theme.breakpoints.up(BREAKPOINT_LAPTOP)]: {
        fontSize: '1.3rem',
      },
    },
    contactButton: {
      textAlign: 'center',
      paddingTop: '2rem',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        paddingTop: '1rem',
      },
    },
    kitItem: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -50,
      paddingRight: '4vw',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        marginTop: '1rem',
        padding: '0 10vw',
      },
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
      <WingedBorder right direction="down" length={90} />
      <Grid container>
        <RotatedGridText show={inView} text={t('pages.homepage.kit.rotated')} />
        <Grid item xs={12} md={6} className={classes.kitInfoContainer}>
          <div className={classes.kitInfo}>
            <CenterReveal delay={2.3} show={inView} className={classes.arrows}>
              <ArrowSvg className={clsx(classes.arrow, 'upper')} />
              <ArrowSvg className={clsx(classes.arrow, 'lower')} />
            </CenterReveal>
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
              <div className={classes.contactButton}>
                <StyledButton>{t('pages.homepage.contact')}</StyledButton>
              </div>
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
            src={isLightMode() ? enyoProWhiteFrontImg : enyoProBlackFrontImg}
            alt={t('pages.homepage.kit.front')}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Section1;
