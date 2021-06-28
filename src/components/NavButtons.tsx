import { IconButton, Tooltip, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { BREAKPOINT_MOBILE } from '../assets/consts';
import { LinkedItem } from '../types';
import BorderLink from './BorderLink';

interface NavButtonsProps {
  items: LinkedItem[];
}

const NavButtons: FunctionComponent<NavButtonsProps> = ({ items }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(BREAKPOINT_MOBILE));

  return (
    <nav>
      {items.map((item) => {
        const isLink = item.link.startsWith('http');

        if (item.fallbackIcon && isMobile) {
          return (
            <Tooltip title={item.text} key={item.text}>
              <IconButton
                component={isLink ? 'button' : Link}
                to={isLink ? undefined : item.link}
                href={isLink ? item.link : undefined}
                aria-label={item.text}
              >
                {item.fallbackIcon}
              </IconButton>
            </Tooltip>
          );
        }
        return <BorderLink key={item.link} text={item.text} link={item.link} />;
      })}
    </nav>
  );
};

export default NavButtons;
