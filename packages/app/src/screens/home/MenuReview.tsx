import React from 'react';
import {Screen} from '@pengepantry/core/lib/components/screen/Screen';
import {Heading} from '@pengepantry/core/lib/components/heading/Heading';
import {VerticalListItem} from '@pengepantry/core/lib/components/list-item/VerticalListItem';
import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';
import {
  ColLarge,
  ColMedium,
  ColSmall,
  ColXSmall,
} from '@pengepantry/core/lib/components/layout/Spacer';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {CenteredRow} from '@pengepantry/core/lib/components/layout/Row';
import {Button} from '@pengepantry/core/lib/components/button/Button';
import styled from '@emotion/native';
import {Divider} from '@pengepantry/core/lib/components/divider/Divider';
import {useTogglePantryItem} from '@pengepantry/core/lib/store/slices/order/order-actions';
import {useOrderSlice} from '@pengepantry/core/lib/store/slices/order/order-selectors';

export const MenuReview = () => {
  const {pantryItemIds} = useOrderSlice();
  const togglePantryItem = useTogglePantryItem();
  console.log({pantryItemIds, togglePantryItem});
  return (
    <Screen>
      <Heading
        title="Order Confirmation"
        subTitle="Review  your selection and add any pantry items"
      />
      <ColMedium />
      <VerticalListItem imageUri="https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg">
        <AppView>
          <AppText variant="h3">A recipe with a difference</AppText>
          <ColXSmall />
          <AppText>3 pantry items </AppText>
        </AppView>
      </VerticalListItem>
      <ColMedium />
      <VerticalListItem imageUri="https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg">
        <AppText variant="h3">A recipe with a difference</AppText>
      </VerticalListItem>
      <ColMedium />
      <VerticalListItem imageUri="https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg">
        <AppText variant="h3">A recipe with a difference</AppText>
      </VerticalListItem>
      <ColMedium />
      <Heading title="Pantry items" subTitle="Select items that last a while" />
      <ColMedium />
      <VerticalListItem imageUri="https://images.everydayhealth.com/images/olive-oil-lowers-alzheimers-death-risk-1440x810.jpg">
        <ListItemContent>
          <AppView>
            <AppText variant="h3">Olive oil (500ml)</AppText>
            <ColXSmall />
            <AppText>£1.99</AppText>
          </AppView>
          <Button label="ADD" onPress={() => togglePantryItem('1')} />
        </ListItemContent>
      </VerticalListItem>
      <ColMedium />
      <Heading title="Order summary" />
      <ColMedium />
      <CenteredRow style={{justifyContent: 'space-between'}}>
        <AppText variant="p1">Recipes (3)</AppText>
        <AppText variant="p1">£29.99</AppText>
      </CenteredRow>
      <ColSmall />
      <Divider />
      <ColSmall />
      <CenteredRow style={{justifyContent: 'space-between'}}>
        <AppText variant="p1">Pantry items (1)</AppText>
        <AppText variant="p1">£1.99</AppText>
      </CenteredRow>
      <ColSmall />
      <Divider />
      <ColSmall />
      <CenteredRow style={{justifyContent: 'space-between'}}>
        <AppText variant="p1">Delivery cost</AppText>
        <AppText variant="p1">£2.49</AppText>
      </CenteredRow>
      <ColSmall />
      <Divider />
      <ColSmall />
      <CenteredRow style={{justifyContent: 'space-between'}}>
        <AppText fontFamily="PRIMARY_BOLD">Total</AppText>
        <AppText fontFamily="PRIMARY_BOLD">£34.89</AppText>
      </CenteredRow>
      <ColLarge />
      <ColLarge />
      <Button label="CONFIRM" />
    </Screen>
  );
};

const ListItemContent = styled(CenteredRow)`
  justify-content: space-between;
  flex-grow: 1;
`;
