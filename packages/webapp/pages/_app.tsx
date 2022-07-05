import '../styles/globals.css';
import {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import {appStore} from 'store/app-store';

const App: React.FC<PropsWithChildren<AppProps>> = ({Component, pageProps}) => {
  return (
    <Provider store={appStore}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
