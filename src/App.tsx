import React, { FunctionComponent, Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Layout from './components/Layout';
import ElevatedAppBar from './components/ElevatedAppBar';
import Loading from './components/Loading';
import { getTheme } from './stores/settings';
import ScrollToTop from './components/ScrollToTop';

const App: FunctionComponent = observer(() => {
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Layout>
            <ElevatedAppBar />
            <Switch>
              <Route path="/" exact component={Homepage} />
            </Switch>
          </Layout>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
