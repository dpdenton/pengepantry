import React from 'react';
import {AppViewProps} from 'components/layout/AppView.types';

type Props = AppViewProps &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const AppView: React.FC<Props> = props => {
  return <div {...props}>Hello World</div>;
};
