import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@emotion/react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {reduxStore} from '@pengepantry/core/lib/store/recipeStore';
import {Home} from './src/screens/home/Home';
import Navigation from './src/navigation/root';

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

const styles = StyleSheet.create({
  scrollView: {},
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
export default App;
