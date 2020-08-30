import React, { FunctionComponent } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Homepage } from './pages/Homepage';
import ElevatedAppBar from './components/ElevatedAppBar';

export const App: FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <ElevatedAppBar />
      <Homepage />
    </>
  );
};
