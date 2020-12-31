import React, { FunctionComponent } from 'react';
import { Trans } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { ROUTE_CONTACT } from '../assets/routes';

interface ContactLinkProps {
  i18nKey: string;
  className?: string;
}

const ContactLink: FunctionComponent<ContactLinkProps> = ({
  i18nKey,
  className,
}) => {
  return (
    <Trans
      i18nKey={i18nKey}
      components={{
        contact: <Link component={RouterLink} to={ROUTE_CONTACT} />,
      }}
      className={className}
    />
  );
};
export default ContactLink;
