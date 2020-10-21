import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WingedBorder from '../../components/WingedBorder';
import useTitle from '../../hooks/useTitle';
import terms from './terms';
import access from './access';
import faqs from './faqs';
import privacy from './privacy';
import shipping from './shipping';

const useStyles = makeStyles(
  () => ({
    title: {
      marginBottom: '1rem',
    },
    info: {
      padding: '2rem 20vw',
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

interface InfoPages {
  [key: string]: {
    title: string;
    content: string[];
  };
}

const infoPages: InfoPages = {
  terms,
  access,
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
      <WingedBorder position="left" direction="down" />
      <section className={classes.info}>
        <Typography variant="h1" className={classes.title}>
          {t(page.title)}
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
