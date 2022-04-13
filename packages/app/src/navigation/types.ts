/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {NavigatorScreenParams} from '@react-navigation/native';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = {
  Home: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
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
