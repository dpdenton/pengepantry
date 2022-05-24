import React from 'react';
import styled from '@emotion/native';
import {TextProps} from 'react-native';
import {fonts, fontSizes} from 'theme/fonts';
import {appTheme} from 'theme';
import {FontFamily} from 'theme/types';

interface Props extends TextProps {
  color?: string;
  inverse?: boolean;
  fontFamily?: FontFamily;
  variant?: TextVariant;
}

export type TextVariant = 'p3' | 'p2' | 'p1' | 'h3' | 'h2' | 'h1';

const variantMap: {
  [key in TextVariant]: {
    size: number;
    fontFamily: keyof typeof fonts;
  };
} = {
  p3: {
    size: fontSizes.m,
    fontFamily: 'PRIMARY_REGULAR',
  },
  p2: {
    size: fontSizes.m,
    fontFamily: 'PRIMARY_REGULAR',
  },
  p1: {
    size: fontSizes.m,
    fontFamily: 'PRIMARY_REGULAR',
  },
  h3: {
    size: fontSizes.l,
    fontFamily: 'PRIMARY_MEDIUM',
  },
  h2: {
    size: fontSizes.xl,
    fontFamily: 'PRIMARY_MEDIUM',
  },
  h1: {
    size: fontSizes.xxl,
    fontFamily: 'PRIMARY_MEDIUM',
  },
};

export const AppText: React.FC<Props> = ({
  variant = 'p1',
  fontFamily: fontFamilyOverride,
  color,
  inverse,
  children,
  ...textProps
}) => {
  const {size, fontFamily} = variantMap[variant];
  return (
    <TextStyle
      fontFamily={fontFamilyOverride ?? fontFamily}
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

interface TextStyleProps {
  color: string;
  size: number;
  fontFamily: FontFamily;
}

const TextStyle = styled.Text<TextStyleProps>`
  color: ${({color}) => color};
  font-size: ${({size}) => `${size}px`};
  font-family: ${({fontFamily}) => fonts[fontFamily]};
  letter-spacing: 1.5px;
  border-width: 1px;
  border-color: black;
`;
