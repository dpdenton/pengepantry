import {TouchableOpacityProps} from 'react-native';

export type AppButtonProps = TouchableOpacityProps & {
  intent?: Intent;
  children: string;
};

export type Intent = 'positive' | 'negative' | 'neutral';
