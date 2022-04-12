import React from 'react';
import {iconData} from './IconData';

interface Props {
  name: keyof typeof iconData;
}
export const Icon: React.FC<Props> = ({name}) => {
  const icon = iconData[name];
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Icon-&gt;-Burger-Menu"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group">
          <path
            d={icon.path}
            id="Icon"
            fill="currentColor"
            fillRule="nonzero"
          />
          <rect id="Rectangle" x="0" y="0" width="24" height="24" />
        </g>
      </g>
    </svg>
  );
};
