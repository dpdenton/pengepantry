/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './types';
import {appTheme} from '@pengepantry/core/lib/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomBar} from 'components/bottom-bar/BottomBar';
import {HomeStack} from 'navigation/home/HomeStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export const getDefaultScreenOptions = (params: {title?: string}) => {
  const {title} = params;
  return {
    title,
    headerShadowVisible: false, // applied here
    headerStyle: {
      backgroundColor: appTheme.background.primary.color,
    },
  };
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Tab.Navigator tabBar={BottomBar}>
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{...getDefaultScreenOptions({}), headerShown: false}}
      />
      {/*<Stack.Screen*/}
      {/*  name="Profile"*/}
      {/*  component={Profile}*/}
      {/*  options={{*/}
      {/*    ...getDefaultScreenOptions(),*/}
      {/*    tabBarVisible: false,*/}
      {/*    tabBarStyle: {display: 'none'},*/}
      {/*  }}*/}
      {/*/>*/}
    </Tab.Navigator>
  );
};
