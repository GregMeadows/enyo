import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Logo from './Logo';
import NavList from './NavList';
import { LinkedItem } from '../types';
import {
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../assets/consts';
import Socials from './Socials';
import WingedBorder from './WingedBorder';
import { ROUTES_INFO, ROUTE_ABOUT, ROUTE_CONTACT } from '../assets/routes';
import enyoOutlineLightSvg from '../images/enyo.outline.light.svg';
import enyoOutlineDarkSvg from '../images/enyo.outline.dark.svg';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: theme.palette.background.paper,
      backgroundImage: `url(${
        theme.palette.type === 'light'
          ? enyoOutlineLightSvg
          : enyoOutlineDarkSvg
      })`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right top',
      backgroundSize: '44rem',
      clipPath: `polygon(90% 0, 100% 15%, 100% 100%, 0 100%, 0 0)`,
      paddingTop: '1rem',
      height: '22rem',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        backgroundPosition: 'calc(100% + 10rem) top',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        backgroundPosition: 'calc(100% + 15rem) 115%',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        clipPath: `polygon(92% 0, 100% 8%, 100% 100%, 0 100%, 0 0)`,
        height: '31rem',
      },
    },
    grid: {
      height: '100%',
    },
    top: {
      flexGrow: 1,
      padding: '1.4rem 2.5vw 0',
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        padding: '2.5rem 2vw 0',
      },
    },
    navList: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      maxWidth: '20rem',
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        maxWidth: 'none',
      },
    },
    bottom: {
      background: theme.palette.background.default,
      borderTop: `1px solid ${theme.palette.border.main}`,
      minHeight: '5rem',
      paddingLeft: '2vw',
      paddingRight: '2vw',
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        background: 'none',
      },
    },
    bottomItem: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        paddingTop: '0.8rem',
        paddingBottom: '0.8rem',
      },
    },
    logo: {
      alignItems: 'flex-end',
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        alignItems: 'center',
      },
    },
    info: {
      alignItems: 'center',
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        order: 1,
      },
    },
    socials: {
      alignItems: 'flex-start',
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        paddingTop: '2rem',
        alignItems: 'center',
      },
    },
  }),
  {
    classNamePrefix: 'footer',
  }
);

const Footer: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const company = t('company.long');

  const itemsHelp: LinkedItem[] = [
    { text: t('nav.help.faq'), link: ROUTES_INFO[3] },
    { text: t('nav.help.shipping'), link: ROUTES_INFO[2] },
    { text: t('nav.help.returns'), link: ROUTES_INFO[4] },
    { text: t('nav.help.contact'), link: ROUTE_CONTACT },
  ];

  const itemsAbout: LinkedItem[] = [
    { text: t('nav.about.about'), link: ROUTE_ABOUT },
    { text: t('nav.about.terms'), link: ROUTES_INFO[0] },
    { text: t('nav.about.privacy'), link: ROUTES_INFO[1] },
  ];

  return (
    <footer className={`${classes.root} mui-fixed`}>
      <Grid container direction="column" className={classes.grid}>
        <WingedBorder direction="down" right length={86} />
        <Grid container item className={classes.top}>
          <Grid item xs className={classes.navList}>
            <NavList title={t('nav.help.title')} items={itemsHelp} />
          </Grid>
          <Grid item xs className={classes.navList}>
            <NavList title={t('nav.about.title')} items={itemsAbout} />
          </Grid>
        </Grid>
        <Grid container item alignItems="center" className={classes.bottom}>
          <Grid
            item
            xs={12}
            sm="auto"
            className={clsx(classes.bottomItem, classes.socials)}
          >
            <Socials />
          </Grid>
          <Grid
            item
            xs={12}
            sm
            className={clsx(classes.bottomItem, classes.info)}
          >
            <Typography variant="subtitle2">{t('company.info')}</Typography>
            <Typography variant="subtitle2">
              {t('copyright', {
                year: new Date().getFullYear(),
                company,
              })}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm="auto"
            className={clsx(classes.bottomItem, classes.logo)}
          >
            <Logo type="text" />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
