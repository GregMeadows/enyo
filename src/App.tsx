import React, { FunctionComponent, Suspense } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Layout from './components/Layout';
import ElevatedAppBar from './components/ElevatedAppBar';
import Loading from './components/Loading';
import light from './themes/default/light';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={light}>
      <CssBaseline />
      <Suspense fallback={<Loading />}>
        <Layout>
          <ElevatedAppBar />
          <Homepage />
        </Layout>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
