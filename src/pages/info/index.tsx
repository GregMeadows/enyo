import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import useTitle from '../../hooks/useTitle';
import terms from './terms';
import faqs from './faqs';
import privacy from './privacy';
import shipping from './shipping';
import { InfoPage } from './types';
import Main from '../../components/Main';
import { ROUTES_INFO, ROUTE_CONTACT } from '../../assets/routes';

const useStyles = makeStyles(
  () => ({
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
      <Main>
        <Typography variant="body1" paragraph>
          {t('pages.info.error')}
        </Typography>
      </Main>
    );
  }

  return (
    <Main>
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
            <Trans
              i18nKey={key}
              components={[
                <Link component={RouterLink} to={ROUTE_CONTACT} />,
                <Link component={RouterLink} to={ROUTES_INFO[2]} />,
              ]}
            />
          </Typography>
        );
      })}
    </Main>
  );
};
export default Info;
