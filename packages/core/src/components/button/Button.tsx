import React from 'react';
import styled from '@emotion/native';
import {TouchableOpacity, TouchableOpacityProps, Text} from 'react-native';
import {AppText, FontWeight} from 'components/app-text/AppText';

interface Props extends TouchableOpacityProps {
  label?: string;
}

export const Button: React.FC<Props> = ({label, ...props}) => {
  return (
    <ButtonView {...props}>
      <AppText color="white">{label}</AppText>
    </ButtonView>
  );
};

const ButtonView = styled(TouchableOpacity)`
  background: #ff2f66;
  border-radius: 17px;
  text-align: center;
  padding: 9px 34px 7px;
`;
