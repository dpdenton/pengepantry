import React from 'react';
import styled from '@emotion/native';
import {fontSizes, poppins} from 'constants/fonts';
import {TextProps} from 'react-native';

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
  return (
    <TextStyle weight={weight} size={size} color={color} {...textProps}>
      {children}
    </TextStyle>
  );
};

const weightMap: {[key in FontWeight]: string} = {
  [FontWeight.Regular]: poppins.regular,
  [FontWeight.Bold]: poppins.medium,
};

const TextStyle = styled.Text<Props>`
  color: ${({color = 'black'}) => color};
  font-size: ${({size = 12}) => `${size}px`};
  font-family: ${({weight = FontWeight.Regular}) => weightMap[weight]};
  letter-spacing: 1.5px;
`;
