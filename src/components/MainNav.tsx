import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import InfoIcon from '@material-ui/icons/Info';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NavButtons from './NavButtons';
import { LinkedItem } from '../types';
import { ROUTE_ABOUT, ROUTE_CONTACT, ROUTE_SHOP } from '../assets/routes';

const MainNav: FunctionComponent = () => {
  const { t } = useTranslation();

  const mainNavItems: LinkedItem[] = [
    {
      text: t('nav.main.shop'),
      link: ROUTE_SHOP,
      fallbackIcon: <ShoppingCartIcon />,
    },
    {
      text: t('nav.main.about'),
      link: ROUTE_ABOUT,
      fallbackIcon: <InfoIcon />,
    },
    {
      text: t('nav.main.contact'),
      link: ROUTE_CONTACT,
      fallbackIcon: <ChatBubbleIcon />,
    },
  ];

  return <NavButtons items={mainNavItems} />;
};

export default MainNav;
