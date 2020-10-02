import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { ReactComponent as TwitchIcon } from '../images/TwitchGlitchWhite.svg';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      '& :not(:last-child)': {
        marginRight: theme.spacing(2),
      },
      '& > a': {
        color: theme.palette.text.primary,
        display: 'inline-flex',
        '&:hover': {
          color: theme.palette.primary.main,
        },
        '& > svg': {
          fontSize: '2.2rem',
          height: '1em',
          width: '1em',
        },
      },
    },
  }),
  {
    classNamePrefix: 'socials',
  }
);

const Socials: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
