import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../assets/consts';
import { isLightMode, switchThemeType } from '../stores/settings';
import Logo from './Logo';
import MainNav from './MainNav';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: fade(theme.palette.background.default, 0.98),
      borderBottom: `1px solid ${theme.palette.border.light}`,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
    },
    toolbar: {
      width: '100%',
      maxWidth: 1500,
      padding: '0 40px',
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '0 17px',
      },
    },
    logo: {
      height: '100%',
      width: '100%',
    },
    title: {
      alignSelf: 'flex-end',
      marginBottom: '0.3rem',
      marginLeft: '0.6rem',
      lineHeight: 0.8,
    },
    spacer: {
      display: 'flex',
      flexGrow: 1,
    },
    mobile: {
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        display: 'none',
      },
    },
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    background: {
      background: theme.palette.background.default,
    },
  }),
  {
    classNamePrefix: 'main-app-bar',
  }
);

export default function MainAppBar(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();
  const themeTypeLabel = isLightMode() ? t('theme.dark') : t('theme.light');

  return (
    <>
      <AppBar color="transparent" className={classes.root} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Logo />
          <Typography variant="h5" className={classes.title}>
            {t('nav.title')}
          </Typography>

          <div className={classes.spacer} />

          <MainNav />

          <div className={clsx(classes.spacer, classes.mobile)} />

          <Tooltip title={themeTypeLabel}>
            <IconButton onClick={switchThemeType} aria-label={themeTypeLabel}>
              <Brightness4Icon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.background} />
    </>
  );
}
