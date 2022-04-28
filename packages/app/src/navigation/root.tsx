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
import {Menu} from 'screens/Menu';
import {RootStackParamList} from './types';
import {appTheme} from '@pengepantry/core/lib/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomBar} from 'components/bottom-bar/BottomBar';
import {Home} from 'screens/Home';
import {Profile} from 'screens/Profile';

const Tab = createBottomTabNavigator();

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
    <Tab.Navigator tabBar={BottomBar}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={getDefaultScreenOptions()}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={getDefaultScreenOptions()}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={getDefaultScreenOptions()}
      />
    </Tab.Navigator>
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
