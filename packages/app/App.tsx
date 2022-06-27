import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {reduxStore} from '@pengepantry/core/lib/store/store';
import Navigation from 'navigation/RootStack';
import {themeConfig} from '@pengepantry/core/lib/theme/config';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={reduxStore}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={themeConfig.theme.backgroundColor.primary}
        />
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
