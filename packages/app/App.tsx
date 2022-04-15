import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@emotion/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {reduxStore} from '@pengepantry/core/lib/store/recipeStore';
import Navigation from 'navigation/root';

const backgroundColor = '#FAFAFA';

const theme = {
  debug: true,
  colors: {
    backgroundColor,
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Provider store={reduxStore}>
          <StatusBar
            backgroundColor={backgroundColor}
            barStyle="dark-content"
          />
          <Navigation />
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
