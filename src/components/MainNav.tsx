import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import NavButtons from './NavButtons';
import { LinkedItem } from '../types';

const useStyles = makeStyles(
  () => ({
    mainNav: {
      marginLeft: '3vw',
    },
  }),
  {
    classNamePrefix: 'main-nav',
  }
);

const MainNav: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const mainNavItems: LinkedItem[] = [
    { text: t('nav.main.about'), link: '/about' },
    { text: t('nav.main.contact'), link: '/contact' },
  ];

  return (
    <div className={classes.mainNav}>
      <NavButtons items={mainNavItems} />
    </div>
  );
};

export default MainNav;
