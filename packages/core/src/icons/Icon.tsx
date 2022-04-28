import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {iconData} from './Icon.data';
import {appTheme} from 'theme';

export type IconName = keyof typeof iconData;

interface Props {
  variant?: 'primary';
  inverse?: boolean;
  name: IconName;
}

const fillMap = {
  primary: appTheme.primary.color,
};

const inverseFillMap = {
  primary: appTheme.primary.inverse,
};
export const Icon: React.FC<Props> = ({name, variant = 'primary', inverse}) => {
  const {paths} = iconData[name];
  const fill = inverse ? inverseFillMap[variant] : fillMap[variant];
  return (
    <Svg height="24px" width="24px" viewBox="0 0 24 24">
      {paths.map((path, index) => (
        <Path key={index} fill={fill} d={path} />
      ))}
    </Svg>
  );
};
