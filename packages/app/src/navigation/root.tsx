/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {fonts} from '@pengepantry/core/lib/theme/fonts';
import NotFoundScreen from 'screens/NotFoundScreen';
import {Home} from 'screens/home/Home';
import {RootStackParamList} from './types';
import {appTheme} from '@pengepantry/core/lib/theme';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const getDefaultScreenOptions = () => {
  return {
    headerShadowVisible: false, // applied here
    headerStyle: {
      backgroundColor: appTheme.secondary.inverse,
    },
  };
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={getDefaultScreenOptions()}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{...getDefaultScreenOptions(), title: 'Oops!'}}
      />
    </Stack.Navigator>
  );
}

export const defaultHeaderTitleStyle = {
  flex: 0,
  alignSelf: 'flex-start',
  fontFamily: fonts.PRIMARY_MEDIUM,
  fontSize: 20,
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
} as StyleProp<TextStyle>;

export const headerStyle = () =>
  ({
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    // width: Dimensions.get('window').width - 60 * (rightIcons + 1) - 15,
    alignSelf: 'flex-start',
    // marginBottom: Platform.OS === 'android' ? 2 : -1,
    // left: Platform.OS === 'android' ? 5 : undefined,
  } as StyleProp<TextStyle>);
export const defaultHeaderBStyle = headerStyle();
