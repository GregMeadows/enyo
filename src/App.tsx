import React, { FunctionComponent, Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Layout from './components/Layout';
import ElevatedAppBar from './components/ElevatedAppBar';
import Loading from './components/Loading';
import { getTheme } from './stores/settings';

const App: FunctionComponent = observer(() => {
  return (
    <ThemeProvider theme={getTheme()}>
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
});

export default App;
