import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_SHOP,
} from '../assets/routes';
import { LinkedItem } from '../types';
import NavButtons from './NavButtons';

const MainNav: FunctionComponent = () => {
  const { t } = useTranslation();

  const mainNavItems: LinkedItem[] = [
    {
      text: t('nav.main.what'),
      link: ROUTE_HOME,
    },
    {
      text: t('nav.main.about'),
      link: ROUTE_ABOUT,
    },
    {
      text: t('nav.main.contact'),
      link: ROUTE_CONTACT,
    },
    {
      text: t('nav.main.shop'),
      link: ROUTE_SHOP,
    },
  ];

  return <NavButtons items={mainNavItems} />;
};

export default MainNav;
