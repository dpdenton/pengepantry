import {appTheme} from 'theme/index';
export interface AppTheme {
  theme?: AppThemeProps;
}

export type AppThemeProps = typeof appTheme;
