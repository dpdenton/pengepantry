import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@emotion/react';
import {reduxStore} from '@pengepantry/core/lib/store/store';
import {appTheme} from '@pengepantry/core/lib/theme';
import {PropsWithChildren} from 'react';

const MyApp: React.FC<PropsWithChildren<AppProps>> = ({
  Component,
  pageProps,
}) => {
  return (
    <ThemeProvider theme={appTheme}>
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
