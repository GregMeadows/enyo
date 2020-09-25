import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  useScrollTrigger,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { isLightMode, switchThemeType } from '../stores/settings';
import Logo from './Logo';

interface ElevationScrollProps {
  children: React.ReactElement;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: theme.palette.background.default,
      borderBottom: `1px solid ${theme.palette.border.light}`,
    },
    logo: {
      height: '100%',
      width: '100%',
    },
    spacer: {
      display: 'flex',
      flexGrow: 1,
    },
  }),
  {
    classNamePrefix: 'elevated-app-bar',
  }
);

function ElevationScroll(props: ElevationScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevatedAppBar(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();
  const themeTypeLabel = isLightMode() ? t('theme.dark') : t('theme.light');

  return (
    <>
      <ElevationScroll>
        <AppBar color="transparent" className={classes.root}>
          <Toolbar>
            <Logo />
            <div className={classes.spacer} />
            <Tooltip title={themeTypeLabel}>
              <IconButton onClick={switchThemeType} aria-label={themeTypeLabel}>
                <Brightness4Icon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
