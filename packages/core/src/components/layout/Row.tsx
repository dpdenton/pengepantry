import React, {PropsWithChildren} from 'react';
import classNames from 'classnames';
import {AppView} from 'components/layout/AppView';

type PropsWithClassName = {
  className?: string;
};
export const Row: React.FC<PropsWithChildren<PropsWithClassName>> = ({
  className,
  children,
}) => {
  return (
    <AppView className={classNames('flex flex-row', className)}>
      {children}
    </AppView>
  );
};

export const CenteredRow: React.FC<PropsWithChildren<PropsWithClassName>> = ({
  className,
  children,
}) => {
  return (
    <Row className={classNames('items-center', className)}>{children}</Row>
  );
};
