import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import WingedBorder from '../../components/WingedBorder';
import TermsPage from './Terms';
import PrivacyPage from './Privacy';
import AccessPage from './Access';
import ShippingPage from './Shipping';
import { InfoPage } from './types';
import {
  ROUTE_ACCESS,
  ROUTE_PRIVACY,
  ROUTE_SHIPPING,
  ROUTE_TERMS,
} from '../../assets/routes';
import useTitle from '../../hooks/useTitle';

const useStyles = makeStyles(
  () => ({
    title: {
      marginBottom: '1rem',
    },
    info: {
      padding: '2rem 20vw',
    },
  }),
  {
    classNamePrefix: 'info',
  }
);

function useInfoPage(page: string): InfoPage | null {
  switch (page) {
    case ROUTE_TERMS:
      return TermsPage();
    case ROUTE_PRIVACY:
      return PrivacyPage();
    case ROUTE_ACCESS:
      return AccessPage();
    case ROUTE_SHIPPING:
      return ShippingPage();
    default:
      return null;
  }
}

const Info: FunctionComponent = () => {
  const classes = useStyles();
  const location = useLocation();
  const page = useInfoPage(location.pathname);
  useTitle(page?.title);

  if (!page) {
    return null;
  }

  return (
    <>
      <WingedBorder position="left" direction="down" />
      <section className={classes.info}>
        <Typography variant="h1" className={classes.title}>
          {page.title}
        </Typography>
        {page.content}
      </section>
    </>
  );
};
export default Info;
