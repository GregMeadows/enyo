import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import clsx from 'clsx';
import { ReactComponent as TwitchIcon } from '../images/TwitchGlitchWhite.svg';
import { BREAKPOINT_TABLET } from '../assets/consts';

interface SocialsProps {
  className?: string;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      '& :not(:last-child)': {
        marginRight: theme.spacing(1.5),
        [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
          marginRight: theme.spacing(1),
        },
      },
      '& > a': {
        color: theme.palette.text.primary,
        display: 'inline-flex',
        transition: 'color 0.1s linear',
        '&:hover': {
          color: theme.palette.primary.main,
        },
        '& > svg': {
          transition: 'height 0.5s ease, width 0.5s ease',
          height: '3vw',
          maxHeight: '2rem',
          minHeight: '1.8rem',
          width: '3vw',
          maxWidth: '2rem',
          minWidth: '1.8rem',
        },
      },
    },
  }),
  {
    classNamePrefix: 'socials',
  }
);

const Socials: FunctionComponent<SocialsProps> = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <a href="https://www.instagram.com/enyo.gg/">
        <InstagramIcon fontSize="large" />
      </a>
      <a href="https://twitter.com/enyoGG">
        <TwitterIcon fontSize="large" />
      </a>
      <a href="https://www.twitch.tv/enyogg">
        <TwitchIcon />
      </a>
    </div>
  );
};
export default Socials;
