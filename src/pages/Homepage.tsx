import React, { FunctionComponent } from 'react';
import { fade, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ImageScroller from '../components/ImageScroller';
import bannerImg from '../images/banner.jpg';
import { ReactComponent as TeeSvg } from '../images/tee.svg';
import useTitle from '../hooks/useTitle';

const useStyles = makeStyles(
  (theme: Theme) => ({
    info: {
      padding: '1rem 8vw',
    },
    banner: {
      height: '82vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bannerText: {
      color: theme.palette.text.primary,
      textTransform: 'uppercase',
      fontWeight: 400,
      background: fade(theme.palette.background.default, 0.4),
      padding: '0.5rem 3rem',
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
      <ImageScroller image={bannerImg} className={classes.banner}>
        <Typography variant="h1" className={classes.bannerText}>
          {t('homepage.header')}
        </Typography>
      </ImageScroller>
      <section className={classes.info}>
        <div className={classes.kit}>
          <Typography variant="h3" paragraph>
            {t('dev:kit', { number: 1 })}
          </Typography>
          <TeeSvg className={classes.tee} />
        </div>
        <div className={classes.kit}>
          <Typography variant="h3" paragraph>
            {t('dev:kit', { number: 2 })}
          </Typography>
          <TeeSvg className={classes.tee} />
        </div>
        <div className={classes.kit}>
          <Typography variant="h3" paragraph>
            {t('dev:kit', { number: 3 })}
          </Typography>
          <TeeSvg className={classes.tee} />
        </div>
      </section>
    </>
  );
};
export default Homepage;
