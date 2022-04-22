import React from 'react';
import styled from '@emotion/native';
import {AppTheme} from 'theme/types';
import {ViewProps} from 'react-native';

export const Screen: React.FC<ViewProps> = ({children}) => {
  return <ScreenView>{children}</ScreenView>;
};
export const ScreenView = styled.View<AppTheme>`
  display: flex;
  flex-direction: column;
  padding: 7px 14px;
  height: 100%;
  background-color: ${props => props.theme.secondary.inverse};
`;
