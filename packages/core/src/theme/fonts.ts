import {Platform} from 'react-native';

export type FontWeight = 100 | 400 | 700;
export type FontStyle = 'normal' | 'italic';
export type FontFamily = 'Poppins';
export type FontSizes = 10 | 12 | 14 | 16 | 18 | 22;

const styleToName = {
  normal: '',
  italic: 'Italic',
};

const weightToName = {
  100: 'Thin',
  400: 'Regular',
  700: 'Bold',
};

export const getFontName = (params?: {
  family?: FontFamily;
  weight?: FontWeight;
  style?: FontStyle;
}) => {
  const {style = 'normal', family = 'Poppins', weight = 400} = params ?? {};

  // XXX: not sure this is going to work; RN doesn't look at the filename so cannot guarantee naming convention
  return Platform.OS === 'web'
    ? family
    : `${family}-${weightToName[weight]}${styleToName[style]}`;
};

export const fontSizes: {[key: string]: FontSizes} = {
  xs: 10,
  s: 12,
  m: 14,
  l: 16,
  xl: 18,
  xxl: 22,
};
