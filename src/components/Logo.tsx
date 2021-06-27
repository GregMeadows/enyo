import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { ReactComponent as LogoIconSvg } from '../images/logo/icon.svg';
import { ReactComponent as LogoTextSvg } from '../images/logo/text.svg';
import { ReactComponent as LogoFullSvg } from '../images/logo/full.svg';
import { ReactComponent as LogoBlockSvg } from '../images/logo/block.svg';
import { BREAKPOINT_MOBILE } from '../assets/consts';

interface LogoProps {
  type?: 'icon' | 'text' | 'full' | 'block';
  size?: 'small' | 'medium' | 'large';
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    svg: {
      transition: 'height 0.5s ease',
      userSelect: 'none',
    },
    container: {
      color: theme.palette.text.primary,
      display: 'inline-flex',
      alignItems: 'center',
    },
    icon: {
      height: theme.spacing(8),
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        height: theme.spacing(7),
      },
      '&.large': {
        height: '8vw',
      },
    },
    text: {
      height: '5vw',
      maxHeight: '3rem',
      minHeight: '2.6rem',
    },
    full: {
      height: '6vw',
      maxHeight: '6rem',
      minHeight: '4rem',
    },
    block: {
      height: '5vw',
      maxHeight: '5rem',
      minHeight: '3rem',
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
const Logo: FunctionComponent<LogoProps> = ({ type, size }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const isHomepage = pathname === '/';

  let logo;
  switch (type) {
    case 'text': {
      logo = <LogoTextSvg className={clsx(classes.svg, classes.text, size)} />;
      break;
    }
    case 'full': {
      logo = <LogoFullSvg className={clsx(classes.svg, classes.full, size)} />;
      break;
    }
    case 'block': {
      logo = (
        <LogoBlockSvg className={clsx(classes.svg, classes.block, size)} />
      );
      break;
    }
    case 'icon':
    default: {
      logo = <LogoIconSvg className={clsx(classes.svg, classes.icon, size)} />;
      break;
    }
  }

  if (isHomepage) {
    return <div className={classes.container}>{logo}</div>;
  }

  return (
    <Link to="/" className={classes.container}>
      {logo}
    </Link>
  );
};

export default Logo;
