import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import Logo from './Logo';
import NavList from './NavList';
import { LinkedItem } from '../types';
import {
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../assets/consts';
import Socials from './socials';
import WingedBorder from './WingedBorder';
import { ROUTES_INFO, ROUTE_CONTACT } from '../assets/routes';
import enyoOutlineSvg from '../images/enyo.outline.svg';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: theme.palette.background.paper,
      backgroundImage: `url(${enyoOutlineSvg})`,
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
        backgroundImage: 'none',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        clipPath: `polygon(92% 0, 100% 8%, 100% 100%, 0 100%, 0 0)`,
        height: '27rem',
      },
    },
    grid: {
      height: '100%',
    },
    wing: {
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        display: 'none',
      },
    },
    top: {
      flexGrow: 1,
      padding: '1.4rem 2.5vw 0',
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
    },
    bottomItem: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
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
        paddingTop: '1rem',
        alignItems: 'center',
      },
    },
  }),
  {
    classNamePrefix: 'footer',
  }
);

const Footer: FunctionComponent = observer(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const company = t('company.long');

  const itemsHelp: LinkedItem[] = [
    { text: t('nav.help.help'), link: '/' },
    { text: t('nav.help.faqs'), link: ROUTES_INFO[3] },
    { text: t('nav.help.delivery'), link: ROUTES_INFO[2] },
    { text: t('nav.help.contact'), link: ROUTE_CONTACT },
  ];

  const itemsAbout: LinkedItem[] = [
    { text: t('nav.about.about'), link: '/' },
    { text: t('nav.about.terms'), link: ROUTES_INFO[0] },
    { text: t('nav.about.privacy'), link: ROUTES_INFO[1] },
  ];

  return (
    <footer className={`${classes.root} mui-fixed`}>
      <Grid container direction="column" className={classes.grid}>
        <WingedBorder
          direction="down"
          right
          length={86}
          className={classes.wing}
        />
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
});

export default Footer;
