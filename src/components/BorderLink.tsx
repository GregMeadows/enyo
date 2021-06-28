import { ButtonBase } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { LinkedItem } from '../types';

const useStyles = makeStyles(
  (theme: Theme) => ({
    button: {
      fontSize: '1.05rem',
      padding: '7.5px 15px',
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: '100%',
        margin: '0 15px',
        borderBottom: '2px solid',
        borderBottomColor: theme.palette.text.primary,
        transition: 'right 0.5s',
      },
      '&:hover': {
        '&:after': {
          right: 0,
        },
      },
    },
  }),
  {
    classNamePrefix: 'border-link',
  }
);

const BorderLink: FunctionComponent<LinkedItem> = ({ text, link }) => {
  const classes = useStyles();
  const isLink = link.startsWith('http');

  return (
    <ButtonBase
      className={classes.button}
      component={isLink ? 'button' : Link}
      to={isLink ? undefined : link}
      href={isLink ? link : undefined}
      disableRipple
      disableTouchRipple
    >
      {text}
    </ButtonBase>
  );
};

export default BorderLink;
