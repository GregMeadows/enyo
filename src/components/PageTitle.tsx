import React, { FunctionComponent, useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import WingedBorder from './WingedBorder';
import {
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../assets/consts';
import settings from '../stores/settings';

const useStyles = makeStyles(
  (theme: Theme) => ({
    titleContainer: {
      background: theme.palette.background.paper,
      clipPath: `polygon(100% 0, 100% 100%, 8% 100%, 0 80%, 0 0)`,
      padding: '0 0 1rem 0',
    },
    title: {
      padding: '3.6rem 20vw 2rem',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        padding: '3.4rem 14vw 2rem',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '3.2rem 9vw 1.8rem',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        padding: '2.6rem 0 1.5rem',
        textAlign: 'center',
      },
    },
  }),
  {
    classNamePrefix: 'page-title',
  }
);

const PageTitle: FunctionComponent = observer(() => {
  const classes = useStyles();
  const { pageTitle, pageSubtitle } = useContext(settings);

  if (!pageTitle) {
    return null;
  }

  return (
    <section className={classes.titleContainer}>
      <div className={classes.title}>
        <Typography variant="h1">{pageTitle}</Typography>
        {pageSubtitle && (
          <Typography variant="subtitle1">{pageSubtitle}</Typography>
        )}
      </div>
      <WingedBorder left direction="up" length={90} />
    </section>
  );
});
export default PageTitle;
