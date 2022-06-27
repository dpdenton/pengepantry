import React from 'react';
import {CenteredRow} from 'components/layout/Row';
import {AppView} from 'components/layout/AppView';
import {Button} from 'components/button/Button';
import {ColSpacer} from 'components/layout/Spacer';

interface Props {
  onNext: () => void;
}

export const OrderSummary: React.FC<Props> = ({onNext, children}) => {
  return (
    <AppView className="bg-neutral-100 p-2">
      <CenteredRow className="justify-between">{children}</CenteredRow>
      <ColSpacer />
      <Button onPress={onNext}>NEXT</Button>
    </AppView>
  );
};
