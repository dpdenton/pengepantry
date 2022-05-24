import {appTheme} from 'theme/index';
import {fonts} from 'theme/fonts';
export interface AppTheme {
  theme?: AppThemeProps;
}

export type AppThemeProps = typeof appTheme;

export type FontFamily = keyof typeof fonts;
