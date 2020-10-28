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
  useTitle(page ? t(page.title) : undefined);

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
    <>
      <WingedBorder left direction="down" />
      <section className={classes.info}>
        <Typography variant="h1">{t(page.title)}</Typography>
        <Typography variant="subtitle1" className={classes.updated}>
          <strong>{t('pages.info.updated')}</strong>{' '}
          {page.updated.toLocaleDateString()}
        </Typography>
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
    </>
  );
};
export default Info;
