import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation, Trans } from 'react-i18next';

const useStyles = makeStyles(
  () => ({
    root: {
      margin: 0,
    },
  }),
  {
    classNamePrefix: 'homepage',
  }
);

const Homepage: FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.root}>
      <h1>{t('Welcome')}</h1>
      <Trans>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.{' '}
          <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>.
          Vestibulum lacinia arcu eget nulla.{' '}
          <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
          lacinia nunc.{' '}
        </p>

        <p>
          Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
          at dolor. Maecenas mattis. Sed convallis tristique sem.{' '}
          <b>Vestibulum lacinia arcu eget nulla</b>. Proin ut ligula vel nunc
          egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
          luctus non, massa.{' '}
          <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Fusce
          ac turpis quis ligula lacinia aliquet. Mauris ipsum.{' '}
          <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Nulla
          metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque
          volutpat condimentum velit.{' '}
        </p>

        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt
          mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
          Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a
          tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam
          ultrices. Suspendisse in justo eu magna luctus suscipit.{' '}
        </p>

        <p>
          Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus
          vitae pharetra auctor, sem massa mattis sem, at interdum magna augue
          eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
          blandit dolor. Sed non quam. In vel mi sit amet augue congue
          elementum. <b>Vestibulum sapien</b>. Morbi in ipsum sit amet pede
          facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas
          et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices
          enim. Curabitur sit amet mauris.{' '}
        </p>

        <p>
          Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer
          lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor.
          Integer id quam. Morbi mi. <b>Curabitur sit amet mauris</b>. Quisque
          nisl felis, venenatis tristique, dignissim in, ultrices sit amet,
          augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet.{' '}
          <i>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue</i>.
          Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede.
          Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo.{' '}
        </p>
      </Trans>
    </section>
  );
};
export default Homepage;
