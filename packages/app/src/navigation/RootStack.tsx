import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomBar} from 'components/bottom-bar/BottomBar';
import {HomeStack} from 'navigation/home/HomeStack';
import {RootStackParamList} from './types';
import {themeConfig} from '@pengepantry/core/lib/theme/config';

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
      backgroundColor: themeConfig.theme.backgroundColor.primary,
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
