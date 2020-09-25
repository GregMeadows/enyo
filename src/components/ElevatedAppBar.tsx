import React from 'react';
import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
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

  return (
    <>
      <ElevationScroll>
        <AppBar color="transparent" className={classes.root}>
          <Toolbar>
            <Logo />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
