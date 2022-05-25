import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MenuRoute, HomeStackParamList} from 'navigation/home/types';
import {Home} from 'screens/home/Home';
import {MenuSelection} from 'screens/home/MenuSelection';
import {getDefaultScreenOptions} from 'navigation/RootStack';
import {RecipeDetailScreen} from 'screens/home/RecipeDetail';
import {MenuReview} from 'screens/home/MenuReview';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = () => (
  <Stack.Navigator initialRouteName={MenuRoute.MenuHome}>
    <Stack.Screen
      name={MenuRoute.MenuHome}
      component={Home}
      options={getDefaultScreenOptions({title: 'Home'})}
    />
    <Stack.Screen
      name={MenuRoute.MenuSelection}
      component={MenuSelection}
      options={getDefaultScreenOptions({title: 'Menu'})}
    />
    <Stack.Screen
      name={MenuRoute.RecipeDetail}
      component={RecipeDetailScreen}
      options={getDefaultScreenOptions({title: 'Recipe'})}
    />
    <Stack.Screen
      name={MenuRoute.MenuReview}
      component={MenuReview}
      options={getDefaultScreenOptions({title: 'Review'})}
    />
  </Stack.Navigator>
);
