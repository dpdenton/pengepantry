/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {NavigatorScreenParams} from '@react-navigation/native';
import {HomeStackParamList} from 'navigation/home/types';

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Profile: undefined;
  Modal: undefined;
};

export type Maybe<T> = T | null;

export interface AppTheme {
  theme?: {
    debug: boolean;
    colors: {
      backgroundColor: string;
    };
  };
}
