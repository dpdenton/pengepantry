import React from 'react';
import styled from '@emotion/native';
import {TextProps, Platform} from 'react-native';
import {fonts, fontSizes} from 'theme/fonts';

export enum FontWeight {
  Regular,
  Bold,
}

interface Props extends TextProps {
  weight?: FontWeight;
  size?: number;
  color?: 'white' | 'black';
}

export const AppText: React.FC<Props> = ({
  children,
  weight,
  size = fontSizes.m,
  color,
  ...textProps
}) => {
  console.log({platform: Platform.OS});
  return <TextStyle {...textProps}>{children}</TextStyle>;
};

const weightMap: {[key in FontWeight]: string} = {
  [FontWeight.Regular]: fonts.PRIMARY_REGULAR,
  [FontWeight.Bold]: fonts.PRIMARY_BOLD,
};

const TextStyle = styled.Text<Props>`
  color: ${({color = 'black'}) => color};
  font-size: ${({size = 12}) => `${size}px`};
  font-family: ${({weight = FontWeight.Regular}) => weightMap[weight]};
  letter-spacing: 1.5px;
`;
