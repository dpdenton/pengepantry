import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {reduxStore} from '@pengepantry/core/lib/store/store';
import Navigation from 'navigation/RootStack';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={reduxStore}>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
