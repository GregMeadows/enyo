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
import Landing from './pages/landing';
import themes from './themes';
import Info, { INFO_PAGES } from './pages/info';

const DISPLAY_LANDING = false;

const App: FunctionComponent = observer(() => {
  return (
    <ThemeProvider theme={DISPLAY_LANDING ? themes.default.dark : getTheme()}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          {DISPLAY_LANDING && <Landing />}
          {!DISPLAY_LANDING && (
            <>
              <Layout>
                <ElevatedAppBar />
                <Switch>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/terms" exact>
                    <Info info={INFO_PAGES.terms} />
                  </Route>
                  <Route path="/privacy" exact>
                    <Info info={INFO_PAGES.privacy} />
                  </Route>
                  <Route path="/access" exact>
                    <Info info={INFO_PAGES.access} />
                  </Route>
                </Switch>
              </Layout>
              <Footer />
            </>
          )}
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
