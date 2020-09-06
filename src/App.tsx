import React, { FunctionComponent, Suspense } from 'react';
import { CssBaseline } from '@material-ui/core';
import Homepage from './pages/Homepage';
import ElevatedAppBar from './components/ElevatedAppBar';
import Loading from './components/Loading';

const App: FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <Suspense fallback={<Loading />}>
        <ElevatedAppBar />
        <Homepage />
      </Suspense>
    </>
  );
};

export default App;
