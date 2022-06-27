import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {reduxStore} from '@pengepantry/core/lib/store/store';
import {PropsWithChildren} from 'react';

const App: React.FC<PropsWithChildren<AppProps>> = ({Component, pageProps}) => {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
