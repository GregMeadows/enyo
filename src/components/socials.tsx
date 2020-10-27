import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import clsx from 'clsx';
import { ReactComponent as TwitchIcon } from '../images/TwitchGlitchWhite.svg';
import { BREAKPOINT_LAPTOP, BREAKPOINT_TABLET } from '../assets/consts';

interface SocialsType {
  className?: string;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      '& :not(:last-child)': {
        marginRight: theme.spacing(3),
        [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
          marginRight: theme.spacing(2),
        },
      },
      '& > a': {
        color: theme.palette.text.primary,
        display: 'inline-flex',
        '&:hover': {
          color: theme.palette.primary.main,
        },
        '& > svg': {
          height: '1em',
          width: '1em',
          fontSize: '2.8rem',
          [theme.breakpoints.down(BREAKPOINT_LAPTOP)]: {
            fontSize: '2.5rem',
          },
          [theme.breakpoints.down(BREAKPOINT_TABLET)]: {
            fontSize: '2.3rem',
          },
        },
      },
    },
  }),
  {
    classNamePrefix: 'socials',
  }
);

const Socials: FunctionComponent<SocialsType> = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <a href="https://twitter.com/enyoGG">
        <TwitterIcon fontSize="large" />
      </a>
      <a href="https://www.instagram.com/enyo.gg/">
        <InstagramIcon fontSize="large" />
      </a>
      <a href="https://www.twitch.tv/enyogg">
        <TwitchIcon />
      </a>
    </div>
  );
};
export default Socials;
