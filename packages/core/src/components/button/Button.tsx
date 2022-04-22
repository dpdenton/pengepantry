import React from 'react';
import styled from '@emotion/native';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {AppText} from 'components/app-text/AppText';
import {appTheme} from 'theme';

export type ButtonType = 'primary';
interface Props extends TouchableOpacityProps {
  label?: string;
  type?: ButtonType;
}

const colorMap: {[key in ButtonType]: string} = {
  primary: appTheme.action.primary.inverse,
};

const backgroundColorMap: {[key in ButtonType]: string} = {
  primary: appTheme.action.primary.color,
};

export const Button: React.FC<Props> = ({
  label,
  type = 'primary',
  ...props
}) => {
  return (
    <ButtonView background={backgroundColorMap[type]} {...props}>
      <AppText color={colorMap[type]}>{label}</AppText>
    </ButtonView>
  );
};

const ButtonView = styled(TouchableOpacity)<{background: string}>`
  background: ${props => props.background};
  border-radius: 17px;
  text-align: center;
  padding: 9px 34px 7px;
`;
