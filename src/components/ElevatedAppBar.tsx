import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface ElevationScrollProps {
  children: React.ReactElement;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ElevatedAppBar(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">{t('enyo')}</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
