import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WingedBorder from '../../components/WingedBorder';
import useTitle from '../../hooks/useTitle';
import terms from './terms';
import faqs from './faqs';
import privacy from './privacy';
import shipping from './shipping';
import {
  BREAKPOINT_LAPTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../../assets/consts';
import { InfoPage } from './types';

const useStyles = makeStyles(
  (theme: Theme) => ({
    updated: {
      marginBottom: '2rem',
    },
    titleContainer: {
      background: theme.palette.background.paper,
      clipPath: `polygon(100% 0, 100% 100%, 8% 100%, 0 80%, 0 0)`,
      padding: '0 0 1rem 0',
    },
    title: {
      padding: '4rem 20vw 1rem',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        padding: '3.8rem 12vw 1rem',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '3.5rem 6vw 0.8rem',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        padding: '2.5rem 0 0.5rem',
        textAlign: 'center',
      },
    },
    info: {
      padding: '2rem 20vw',
      [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
        padding: '1.8rem 12vw',
      },
      [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
        padding: '1.5rem 8vw',
      },
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        padding: '1rem 4vw',
      },
    },
    header: {
      marginTop: '2rem',
      marginBottom: '0.1rem',
    },
  }),
  {
    classNamePrefix: 'info',
  }
);

const infoPages: { [key: string]: InfoPage } = {
  terms,
  faqs,
  privacy,
  shipping,
};

const Info: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const location = useLocation();
  const page = infoPages[location.pathname.substring(1)];
  const title = page ? t(page.title) : undefined;
  const subtitle = page ? (
    <>
      <strong>{t('pages.info.updated')}</strong>{' '}
      {page.updated.toLocaleDateString()}
    </>
  ) : undefined;
  useTitle(title, subtitle);

  if (!page) {
    return (
      <section className={classes.info}>
        <Typography variant="body1" paragraph>
          {t('pages.info.error')}
        </Typography>
      </section>
    );
  }

  return (
    <section className={classes.info}>
      {page.content.map((key) => {
        if (key.endsWith('.title')) {
          return (
            <Typography key={key} variant="h4" className={classes.header}>
              {t(key)}
            </Typography>
          );
        }
        return (
          <Typography key={key} variant="body1" paragraph>
            {t(key)}
          </Typography>
        );
      })}
    </section>
  );
};
export default Info;
