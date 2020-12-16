import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@material-ui/core';
import ImageScroller from '../../components/ImageScroller';
import bannerImg from '../../images/banner.png';
import useTitle from '../../hooks/useTitle';
import bannerTextImg from '../../images/banner.text.png';
import { BREAKPOINT_MOBILE } from '../../assets/consts';
import Section1 from './section1';
import Section2 from './section2';

const useStyles = makeStyles(
  (theme: Theme) => ({
    banner: {
      backgroundColor: '#222',
      height: 820,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down(BREAKPOINT_MOBILE)]: {
        height: 600,
      },
    },
    bannerText: {
      width: '90%',
      maxWidth: '45rem',
    },
  }),
  {
    classNamePrefix: 'homepage',
  }
);

const Homepage: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(BREAKPOINT_MOBILE));
  useTitle();

  return (
    <>
      <ImageScroller
        image={bannerImg}
        className={classes.banner}
        offsetY={isMobile ? -240 : -80}
        offsetX={isMobile ? 62 : 50}
        classes={{
          foreground: classes.bannerText,
        }}
      >
        <img src={bannerTextImg} alt={t('company.tag')} />
      </ImageScroller>
      <Section1 />
      <Section2 />
    </>
  );
};
export default Homepage;
