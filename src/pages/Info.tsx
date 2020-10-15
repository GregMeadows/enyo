import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WingedBorder from '../components/WingedBorder';
import { KeyValue } from '../types';

const useStyles = makeStyles(
  () => ({
    root: {
      paddingTop: '2rem',
    },
    info: {},
  }),
  {
    classNamePrefix: 'info',
  }
);

const Info: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();
  const { t } = useTranslation();

  const PAGE_TITLES: KeyValue = {
    about: t('pages.info.about'),
  };

  const title = PAGE_TITLES[location.pathname];

  if (!title) {
    return null;
  }

  return (
    <div className={classes.root}>
      <WingedBorder position="right" direction="down" />
      <section className={classes.info}>
        <Typography variant="h1">{title}</Typography>
        <section>{children}</section>
      </section>
      <WingedBorder position="left" direction="up" />
    </div>
  );
};
export default Info;
