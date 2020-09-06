import React, { FunctionComponent, Suspense } from 'react';
import { CssBaseline } from '@material-ui/core';
import Homepage from './pages/Homepage';
import ElevatedAppBar from './components/ElevatedAppBar';

const App: FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <ElevatedAppBar />
      <Suspense fallback="loading">
        <Homepage />
      </Suspense>
    </>
  );
};

export default App;
