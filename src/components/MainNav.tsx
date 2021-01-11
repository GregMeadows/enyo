import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import InfoIcon from '@material-ui/icons/Info';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
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
    { text: t('nav.main.about'), link: '/about', fallbackIcon: <InfoIcon /> },
    {
      text: t('nav.main.contact'),
      link: '/contact',
      fallbackIcon: <ChatBubbleIcon />,
    },
  ];

  return (
    <div className={classes.mainNav}>
      <NavButtons items={mainNavItems} />
    </div>
  );
};

export default MainNav;
