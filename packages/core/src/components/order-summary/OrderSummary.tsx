import React from 'react';
import styled from '@emotion/native';
import {CenteredRow} from 'components/layout/Row';
import {AppView} from 'components/layout/AppView';
import {Button} from 'components/button/Button';
import {ColMedium} from 'components/layout/Spacer';

interface Props {
  onNext: () => void;
}

export const OrderSummary: React.FC<Props> = ({onNext, children}) => {
  return (
    <OrderSummaryView>
      <OrderSummaryRow>{children}</OrderSummaryRow>
      <ColMedium />
      <Button onPress={onNext} label="NEXT" />
    </OrderSummaryView>
  );
};

const OrderSummaryView = styled(AppView)`
  background-color: rgba(0, 0, 0, 0.75);
  padding: ${props => props.theme.spacing.m.toString()}px;
`;

const OrderSummaryRow = styled(CenteredRow)`
  justify-content: space-between;
`;
