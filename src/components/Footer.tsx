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
import {
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_PRIVACY,
  ROUTE_TERMS,
} from '../assets/routes';
import enyoOutlineLightSvg from '../images/enyo.outline.light.svg';
import enyoOutlineDarkSvg from '../images/enyo.outline.dark.svg';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'relative',
      borderTop: `1px solid ${theme.palette.border.light}`,
      background: theme.palette.background.paper,
      backgroundImage: `url(${
        theme.palette.type === 'light'
          ? enyoOutlineLightSvg
          : enyoOutlineDarkSvg
      })`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: ' right calc(100% + 45px)',
      backgroundSize: '44rem',
      clipPath: `polygon(95% 0, 100% 9%, 100% 100%, 0 100%, 0 0)`,
      paddingTop: 50,
      paddingBottom: 12,
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        backgroundPosition: 'calc(100% + 8rem) calc(100% + 45px)',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        backgroundPosition: 'calc(100% + 14rem) calc(100% + 4rem)',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        paddingTop: theme.spacing(2),
        paddingBottom: 0,
        backgroundPosition: 'calc(100% + 19rem) calc(100% + 4rem)',
        clipPath: `polygon(97% 0, 100% 7%, 100% 100%, 0 100%, 0 0)`,
      },
    },
    wing: {
      position: 'absolute',
      width: '100%',
      top: theme.spacing(1),
    },
    width: {
      width: '100%',
      maxWidth: 1500,
      margin: '0 auto',
      padding: '0 40px',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '0 17px',
      },
    },
    bottom: {
      marginTop: 32,
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        marginTop: 16,
      },
    },
    links: {
      maxWidth: '16rem',
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        maxWidth: 'none',
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

  const itemsAbout: LinkedItem[] = [
    { text: t('nav.footer.what'), link: '/' },
    { text: t('nav.footer.about'), link: ROUTE_ABOUT },
    { text: t('nav.footer.contact'), link: ROUTE_CONTACT },
    { text: t('nav.footer.terms'), link: ROUTE_TERMS },
    { text: t('nav.footer.privacy'), link: ROUTE_PRIVACY },
  ];

  return (
    <footer className={`${classes.root} mui-fixed`}>
      <WingedBorder
        direction="down"
        right
        length={92}
        className={classes.wing}
      />
      <div className={classes.width}>
        <div className={classes.links}>
          <NavList title={t('nav.footer.title')} items={itemsAbout} />
        </div>
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
            <Typography variant="subtitle2">
              {t('copyright', {
                year: new Date().getFullYear(),
                company,
              })}
            </Typography>
            <Typography variant="subtitle2">{t('company.info')}</Typography>
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
      </div>
    </footer>
  );
};

export default Footer;
