import React from 'react';
import styled from '@emotion/native';
import {TextProps} from 'react-native';
import {
  FontFamily,
  FontSizes,
  fontSizes,
  FontStyle,
  FontWeight,
  getFontName,
} from 'theme/fonts';
import {appTheme} from 'theme';

interface Props extends TextProps {
  /**
   * Use this in most cases to set the properties of the font (weight, style, size etc). Defaults to 'p1'
   *
   * If you need more fine-grained control over the styling the set the 'override properties' below
   */
  variant?: TextVariant;

  color?: string;
  inverse?: boolean;

  /**
   * Override properties: if set will override the variant properties
   */
  family?: FontFamily;
  weight?: FontWeight;
  size?: FontSizes;
  fontStyle?: FontStyle;
}

export type TextVariant = 'p3' | 'p2' | 'p1' | 'h3' | 'h2' | 'h1';

const variantMap: {
  [key in TextVariant]: {
    color: string;
    size: FontSizes;
    fontFamily: FontFamily;
    weight: FontWeight;
  };
} = {
  p3: {
    size: fontSizes.m,
    fontFamily: 'Poppins',
    weight: 400,
    color: appTheme.text.primary.color,
  },
  p2: {
    size: fontSizes.m,
    fontFamily: 'Poppins',
    weight: 400,
    color: appTheme.text.primary.color,
  },
  p1: {
    size: fontSizes.m,
    fontFamily: 'Poppins',
    weight: 400,
    color: appTheme.text.primary.color,
  },
  h3: {
    size: fontSizes.l,
    fontFamily: 'Poppins',
    weight: 400,
    color: appTheme.text.primary.color,
  },
  h2: {
    size: fontSizes.xl,
    fontFamily: 'Poppins',
    weight: 400,
    color: appTheme.text.primary.color,
  },
  h1: {
    size: fontSizes.xxl,
    fontFamily: 'Poppins',
    weight: 400,
    color: appTheme.text.primary.color,
  },
};

export const AppText: React.FC<Props> = ({
  variant = 'p1',
  fontStyle = 'normal',
  size: sizeOverride,
  weight: weightOverride,
  family: fontFamilyOverride,
  color,
  inverse,
  children,
  ...textProps
}) => {
  const {size, fontFamily, weight} = variantMap[variant];
  return (
    <TextStyle
      size={sizeOverride ?? size}
      weight={weightOverride ?? weight}
      family={fontFamilyOverride ?? fontFamily}
      fontStyle={fontStyle}
      color={
        color ??
        (inverse ? appTheme.text.primary.inverse : appTheme.text.primary.color)
      }
      {...textProps}
    >
      {children}
    </TextStyle>
  );
};

interface TextStyleProps {
  color: string;
  size: FontSizes;
  family: FontFamily;
  weight: FontWeight;
  fontStyle: FontStyle;
}

const TextStyle = styled.Text<TextStyleProps>`
  color: ${({color}) => color};
  font-size: ${({size}) => `${size}px`};
  font-family: ${({family, weight, fontStyle}) =>
    getFontName({family, weight, style: fontStyle})};
  font-weight: ${({weight}) => weight};
`;
