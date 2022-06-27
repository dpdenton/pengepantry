import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {iconData} from './Icon.data';

export type IconName = keyof typeof iconData;

interface Props {
  name: IconName;
}

export const Icon: React.FC<Props> = ({name}) => {
  const {paths} = iconData[name];
  return (
    <Svg height="24px" width="24px" viewBox="0 0 24 24" fill="black">
      {paths.map((path, index) => (
        <Path key={index} d={path} />
      ))}
    </Svg>
  );
};
