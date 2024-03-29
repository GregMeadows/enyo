import React, { FunctionComponent, Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Homepage from './pages/homepage';
import Footer from './components/Footer';
import Layout from './components/Layout';
import MainAppBar from './components/MainAppBar';
import Loading from './components/Loading';
import { getTheme } from './stores/settings';
import ScrollToTop from './components/ScrollToTop';
import PageTitle from './components/PageTitle';
import { ROUTE_ABOUT, ROUTE_CONTACT } from './assets/routes';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App: FunctionComponent = observer(() => (
  <ThemeProvider theme={getTheme()}>
    <CssBaseline />
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Layout>
          <MainAppBar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path={ROUTE_ABOUT} exact component={About} />
            <>
              <PageTitle />
              <Switch>
                <Route path={ROUTE_CONTACT} exact component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </>
          </Switch>
        </Layout>
        <Footer />
      </Suspense>
    </BrowserRouter>
  </ThemeProvider>
));

export default App;
