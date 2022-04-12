import Svg, {G, Path} from 'react-native-svg';
import React from 'react';
import {iconData} from './IconData';

interface Props {
  name: keyof typeof iconData;
}
export const Icon: React.FC<Props> = ({name}) => {
  const icon = iconData[name];
  return (
    <Svg height="24px" width="24px" viewBox="0 0 24 24">
      <G strokeWidth={1}>
        <Path fill="#7CA60A" d={icon.path} />
      </G>
    </Svg>
  );
};
