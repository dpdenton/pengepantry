import React from 'react';
import styled from '@emotion/native';
import {TextProps} from 'react-native';
import {fonts, fontSizes} from 'theme/fonts';
import {appTheme} from 'theme';

export type FontWeight = 'bold' | 'regular';

interface Props extends TextProps {
  color?: string;
  inverse?: boolean;
  weight?: FontWeight;
  variant?: TextVariant;
}

export type TextVariant = 'p3' | 'p2' | 'p1' | 'h3' | 'h2' | 'h1';

const variantMap: {
  [key in TextVariant]: {
    size: number;
    weight: FontWeight;
  };
} = {
  p3: {
    size: fontSizes.m,
    weight: 'regular',
  },
  p2: {
    size: fontSizes.m,
    weight: 'regular',
  },
  p1: {
    size: fontSizes.m,
    weight: 'regular',
  },
  h3: {
    size: fontSizes.m,
    weight: 'regular',
  },
  h2: {
    size: fontSizes.m,
    weight: 'regular',
  },
  h1: {
    size: fontSizes.xxl,
    weight: 'regular',
  },
};

export const AppText: React.FC<Props> = ({
  variant = 'p1',
  weight: weightOverride,
  color,
  inverse,
  children,
  ...textProps
}) => {
  const {size, weight} = variantMap[variant];
  return (
    <TextStyle
      weight={weightOverride ?? weight}
      size={size}
      color={
        color ?? inverse
          ? appTheme.text.primary.inverse
          : appTheme.text.primary.color
      }
      {...textProps}
    >
      {children}
    </TextStyle>
  );
};

const weightMap: {[key in FontWeight]: string} = {
  regular: fonts.PRIMARY_REGULAR,
  bold: fonts.PRIMARY_BOLD,
};

interface TextStyleProps {
  color: string;
  size: number;
  weight: FontWeight;
}

const TextStyle = styled.Text<TextStyleProps>`
  color: ${({color}) => color};
  font-size: ${({size}) => `${size}px`};
  font-family: ${({weight}) => weightMap[weight]};
  letter-spacing: 1.5px;
  border-width: 1px;
  border-color: black;
`;
