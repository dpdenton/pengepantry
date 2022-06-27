import React from 'react';
import classNames from 'classnames';
import {AppTextProps} from './AppText.types';
import {mapFontSizeToClassName} from 'components/app-text/AppText.utils';

type AppTextWebProps = {
  elementType: 'p' | 'h1';
};

type Props = AppTextProps & AppTextWebProps;

export const AppText: React.FC<Props> = ({size = 'm', children}) => {
  const fontSizeClassName = mapFontSizeToClassName(size);
  return <p className={classNames(fontSizeClassName)}>{children}</p>;
};
