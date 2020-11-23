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
import PageTitle from './components/PageTitle';
import Info from './pages/info';
import { ROUTES_INFO, ROUTE_ABOUT, ROUTE_CONTACT } from './assets/routes';
import Contact from './pages/Contact';
import About from './pages/About';

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
              <Route path={ROUTE_ABOUT} exact component={About} />
              <>
                <PageTitle />
                <Switch>
                  <Route path={ROUTES_INFO} exact component={Info} />
                  <Route path={ROUTE_CONTACT} exact component={Contact} />
                </Switch>
              </>
            </Switch>
          </Layout>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
