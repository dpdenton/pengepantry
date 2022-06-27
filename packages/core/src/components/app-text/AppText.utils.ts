import {Size} from './AppText.types';

const fontSizeMap = {
  s: 'text-sm',
  m: 'text-base',
};

export const mapFontSizeToClassName = (fontSize: Size = 'm') => {
  return fontSizeMap[fontSize];
};
