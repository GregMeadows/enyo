import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_SHOP } from '../assets/routes';
import Main from '../components/Main';
import useTitle from '../hooks/useTitle';

const useStyles = makeStyles(
  () => ({
    links: {
      marginTop: '4rem',
    },
  }),
  {
    classNamePrefix: 'not-found',
  }
);

const NotFound: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  useTitle(t('pages.notfound.title'));

  return (
    <Main>
      <Typography variant="body1" paragraph>
        {t('pages.notfound.body.1')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('pages.notfound.body.2')}
      </Typography>
      <Typography variant="body1" className={classes.links}>
        <Trans
          i18nKey="pages.notfound.body.3"
          components={[
            <Link component={RouterLink} to={ROUTE_HOME} />,
            <Link href={ROUTE_SHOP} />,
          ]}
        />
      </Typography>
    </Main>
  );
};
export default NotFound;
