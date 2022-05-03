import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@emotion/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {reduxStore} from '@pengepantry/core/lib/store/recipeStore';
import {appTheme} from '@pengepantry/core/lib/theme';
import Navigation from 'navigation/RootStack';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={appTheme}>
        <Provider store={reduxStore}>
          <StatusBar
            backgroundColor={appTheme.primary.inverse}
            barStyle="dark-content"
          />
          <Navigation />
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
