import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import NavButtons from './NavButtons';
import { LinkedItem } from '../types';

const useStyles = makeStyles(
  () => ({
    mainNav: {
      textAlign: 'center',
    },
  }),
  {
    classNamePrefix: 'nav-buttons',
  }
);

const MainNav: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const mainNavItems: LinkedItem[] = [
    { text: t('nav.main.kits'), link: '/' },
    { text: t('nav.main.leagues'), link: '/' },
    { text: t('nav.main.games'), link: '/' },
    { text: t('nav.main.create'), link: '/' },
    { text: t('nav.main.about'), link: '/about' },
  ];

  return (
    <section className={classes.mainNav}>
      <NavButtons items={mainNavItems} />
    </section>
  );
};

export default MainNav;
