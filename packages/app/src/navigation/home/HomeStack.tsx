import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeRoute, HomeStackParamList} from 'navigation/home/types';
import {Home} from 'screens/home/Home';
import {MenuSelection} from 'screens/home/MenuSelection';
import {getDefaultScreenOptions} from 'navigation/RootStack';
import {MenuReview} from 'screens/home/MenuReview';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = () => (
  <Stack.Navigator initialRouteName={HomeRoute.MenuMain}>
    <Stack.Screen
      name={HomeRoute.MenuMain}
      component={Home}
      options={getDefaultScreenOptions({title: 'Home'})}
    />
    <Stack.Screen
      name={HomeRoute.MenuSelection}
      component={MenuSelection}
      options={getDefaultScreenOptions({title: 'Menu'})}
    />
    <Stack.Screen
      name={HomeRoute.MenuReview}
      component={MenuReview}
      options={getDefaultScreenOptions({title: 'Review'})}
    />
  </Stack.Navigator>
);
