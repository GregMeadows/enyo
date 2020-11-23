import React, { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

interface MarkdownLinkType {
  href: string;
}

const MarkdownLink: FunctionComponent<MarkdownLinkType> = ({
  href,
  ...rest
}) => {
  if (href.startsWith('/')) {
    // Internal router link
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Link component={RouterLink} to={href} {...rest} />
    );
  }

  // External link
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Link href={href} {...rest} />;
};
export default MarkdownLink;
