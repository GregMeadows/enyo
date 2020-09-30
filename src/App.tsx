import React, { FunctionComponent, Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading';
import { getTheme } from './stores/settings';
import ScrollToTop from './components/ScrollToTop';
import Landing from './pages/landing';

const App: FunctionComponent = observer(() => {
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Landing />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
