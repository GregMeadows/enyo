import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as LogoIconSvg } from '../images/logo/icon.svg';
import { ReactComponent as LogoTextSvg } from '../images/logo/text.svg';
import { ReactComponent as LogoFullSvg } from '../images/logo/full.svg';

interface LogoType {
  type?: 'icon' | 'text' | 'full';
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      height: theme.spacing(7),
      transition: 'height 0.5s ease',
      userSelect: 'none',
    },
    link: {
      padding: theme.spacing(0.5),
      display: 'inline-flex',
    },
  }),
  {
    classNamePrefix: 'logo',
  }
);

/**
 * Renders the main logo. Uses the icon logo by default.
 *
 * @param type The type of logo desired.
 */
const Logo: FunctionComponent<LogoType> = ({ type }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const isHomepage = pathname === '/';

  let logo;
  switch (type) {
    case 'text': {
      logo = <LogoTextSvg className={classes.root} />;
      break;
    }
    case 'full': {
      logo = <LogoFullSvg className={classes.root} />;
      break;
    }
    case 'icon':
    default: {
      logo = <LogoIconSvg className={classes.root} />;
      break;
    }
  }

  if (isHomepage) {
    return <div className={classes.link}>{logo}</div>;
  }

  return (
    <Link to="/" className={classes.link}>
      {logo}
    </Link>
  );
};

export default Logo;
