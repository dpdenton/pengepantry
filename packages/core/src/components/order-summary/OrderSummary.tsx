import React from 'react'
import styled from '@emotion/native'
import { AppText } from 'components/app-text/AppText'
import { CenteredFlexRow, FlexRow } from 'components/layout/FlexRow'
import { RecipeOneSelection } from 'components/order-summary/RecipeOneSelection'

export interface OrderSummaryProps {
  counter: number
}

export const OrderSummary: React.FC<OrderSummaryProps> = () => {
  return (
    <OrderSummaryView>
      <RecipeOneSelection />
      {/*<OrderItem><AppText color='white'>1</AppText></OrderItem>*/}
      <OrderItem>
        <AppText color="white">2</AppText>
      </OrderItem>
      <OrderItem>
        <AppText color="white">3</AppText>
      </OrderItem>
      <OrderItem>
        <AppText color="white">4</AppText>
      </OrderItem>
    </OrderSummaryView>
  )
}

const OrderSummaryView = styled(CenteredFlexRow)`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 14px;
  height: 60px;
  width: 100%;
  justify-content: space-between;
`

const OrderItem = styled(FlexRow)`
  width: 25%;
  flex-grow: 1;
  justify-content: center;
`
