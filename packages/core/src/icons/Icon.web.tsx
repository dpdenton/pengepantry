import React from 'react';
import {iconData} from './Icon.data';

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
          {icon.paths.map((path, index) => {
            return (
              <path
                key={index}
                d={path}
                id="Icon"
                fill="currentColor"
                fillRule="nonzero"
              />
            );
          })}
        </g>
      </g>
    </svg>
  );
};
