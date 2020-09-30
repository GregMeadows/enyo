import React, { FunctionComponent, Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';
import Landing from './pages/landing';
import themes from './themes';

const App: FunctionComponent = observer(() => {
  return (
    <ThemeProvider theme={themes.default.dark}>
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
