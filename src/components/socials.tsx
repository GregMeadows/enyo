import React, { FunctionComponent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      '& :not(:last-child)': {
        marginRight: theme.spacing(2),
      },
      '& > a': {
        color: theme.palette.text.primary,
      },
      '& a:hover': {
        color: theme.palette.primary.main,
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
      <a href="https://twitter.com/">
        <TwitterIcon fontSize="large" />
      </a>
      <a href="https://www.instagram.com/">
        <InstagramIcon fontSize="large" />
      </a>
      <a href="https://www.twitch.tv/">
        <ChatBubbleIcon fontSize="large" />
      </a>
    </div>
  );
};
export default Socials;
