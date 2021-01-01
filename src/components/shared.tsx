import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { ROUTE_CONTACT } from '../assets/routes';

// eslint-disable-next-line import/prefer-default-export
export const TRANS_COMPONENTS: { [tagName: string]: React.ReactNode } = {
  contact: <Link component={RouterLink} to={ROUTE_CONTACT} />,
};
