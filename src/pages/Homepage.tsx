import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import ImageScroller from '../components/ImageScroller';
import bannerImg from '../images/banner.png';
import useTitle from '../hooks/useTitle';
import enyoProHomeFrontImg from '../images/clothing/enyo/pro/home.front.png';
import enyoProHomeBackImg from '../images/clothing/enyo/pro/home.back.png';
import enyoProAwayFrontImg from '../images/clothing/enyo/pro/away.front.png';
import enyoProAwayBackImg from '../images/clothing/enyo/pro/away.back.png';
import bannerTextImg from '../images/banner.text.png';
import { isLightMode } from '../stores/settings';

const useStyles = makeStyles(
  () => ({
    info: {
      padding: '1rem 8vw',
    },
    banner: {
      height: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bannerText: {
      height: '12rem',
    },
    tee: {
      width: '16rem',
    },
    kit: {
      margin: '6rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  {
    classNamePrefix: 'homepage',
  }
);

const Homepage: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  useTitle();

  return (
    <>
      <ImageScroller image={bannerImg} className={classes.banner} offset={-100}>
        <img
          src={bannerTextImg}
          alt={t('company.tag')}
          className={classes.bannerText}
        />
      </ImageScroller>
      <section className={classes.info}>
        <div className={classes.kit}>
          <img
            src={isLightMode() ? enyoProHomeFrontImg : enyoProAwayFrontImg}
            alt={t('pages.homepage.kit.front')}
          />
        </div>
        <div className={classes.kit}>
          <img
            src={isLightMode() ? enyoProHomeBackImg : enyoProAwayBackImg}
            alt={t('pages.homepage.kit.back')}
          />
        </div>
        <div className={classes.kit}>
          <img
            src={isLightMode() ? enyoProHomeFrontImg : enyoProAwayFrontImg}
            alt={t('pages.homepage.kit.front')}
          />
        </div>
      </section>
    </>
  );
};
export default Homepage;
