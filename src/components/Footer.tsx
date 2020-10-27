import React, { FunctionComponent } from 'react';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import Logo from './Logo';
import LogoRepeat from '../images/logo/repeat.svg';
import NavList from './NavList';
import { LinkedItem } from '../types';
import {
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../assets/consts';
import Socials from './socials';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: `url(${LogoRepeat})`,
      backgroundSize: '146.055px 72.583px',
      backgroundPosition: 'bottom left',
      zIndex: -1,
      width: '100%',
      position: 'fixed',
      bottom: 0,
      height: 300,
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        height: 380,
      },
    },
    overlay: {
      height: '100%',
      width: '100%',
      background: `linear-gradient(
        ${theme.palette.background.default},
        ${fade(theme.palette.background.default, 0.85)}
      )`,
    },
    grid: {
      height: '100%',
      padding: '0.5rem 10vw',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        padding: '0.5rem 8vw',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '0.5rem 6vw',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        padding: '0.5rem 1vw',
      },
    },
    gridLogo: {
      textAlign: 'center',
    },
    gridSocials: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    socials: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
    gridRight: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    navList: {
      maxWidth: '20rem',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        maxWidth: 'none',
      },
    },
    subtitle: {
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
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
    { text: t('nav.help.faqs'), link: '/faqs' },
    { text: t('nav.help.delivery'), link: '/shipping' },
    { text: t('nav.help.contact'), link: '/' },
  ];

  const itemsAbout: LinkedItem[] = [
    { text: t('nav.about.about'), link: '/' },
    { text: t('nav.about.terms'), link: '/terms' },
    { text: t('nav.about.privacy'), link: '/privacy' },
  ];

  return (
    <footer className={`${classes.root} mui-fixed`}>
      <div className={classes.overlay}>
        <Grid container direction="column" className={classes.grid}>
          <Grid container item xs justify="center" alignItems="center">
            <Grid container item xs={12} sm spacing={4}>
              <Grid item xs className={classes.navList}>
                <NavList title={t('nav.help.title')} items={itemsHelp} />
              </Grid>
              <Grid item xs className={classes.navList}>
                <NavList title={t('nav.about.title')} items={itemsAbout} />
              </Grid>
            </Grid>
            <Grid item sm={false} md={1} />
            <Grid
              container
              item
              xs={12}
              sm={5}
              md
              spacing={1}
              className={classes.gridRight}
              justify="flex-end"
            >
              <Grid item xs={12} md className={classes.gridSocials}>
                <Socials />
              </Grid>
              <Grid item xs={12} md="auto" className={classes.gridLogo}>
                <Logo type="text" />
              </Grid>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="center">
            <Grid item className={classes.subtitle}>
              <Typography variant="subtitle2">
                <strong>
                  {t('copyright', {
                    year: new Date().getFullYear(),
                    company,
                  })}
                </strong>
              </Typography>
            </Grid>
            <Grid item className={classes.subtitle}>
              <Typography variant="subtitle2">
                <strong>{t('company.info')}</strong>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
});

export default Footer;
