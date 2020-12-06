import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import ImageScroller from '../components/ImageScroller';
import bannerImg from '../images/banner.png';
import useTitle from '../hooks/useTitle';
import enyoProHomeFrontImg from '../images/clothing/enyo/pro/home.front.png';
import enyoProAwayFrontImg from '../images/clothing/enyo/pro/away.front.png';
import bannerTextImg from '../images/banner.text.png';
import { isLightMode } from '../stores/settings';
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../assets/consts';
import WingedBorder from '../components/WingedBorder';
import EnterOnView from '../components/EnterOnView';

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      padding: '2rem 0',
      position: 'relative',
    },
    banner: {
      backgroundColor: '#222',
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
    title: {
      margin: '2rem 4vw',
    },
    kitItem: {
      padding: '4vw',
      textAlign: 'center',
    },
    kitInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 9vw',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        order: 1,
        padding: '2vw 6vw',
      },
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
        <Typography variant="h1" className={classes.title}>
          {t('pages.homepage.kit.title')}
        </Typography>
        <WingedBorder right direction="down" length={85} />
        <Grid container>
          <Grid item className={classes.rotatedContainer}>
            <div className={classes.rotated}>
              <Typography variant="subtitle1">
                {t('pages.homepage.kit.rotated')}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.kitInfo}>
            <Typography variant="body1" paragraph>
              {t('pages.homepage.kit.text.1')}
            </Typography>
            <Typography variant="body1">
              {t('pages.homepage.kit.text.2')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.kitItem}>
            <EnterOnView>
              <img
                src={isLightMode() ? enyoProHomeFrontImg : enyoProAwayFrontImg}
                alt={t('pages.homepage.kit.front')}
              />
            </EnterOnView>
          </Grid>
        </Grid>
      </section>
    </>
  );
};
export default Homepage;
