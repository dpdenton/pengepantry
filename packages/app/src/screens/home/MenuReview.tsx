import React from 'react';
import {Screen} from '@pengepantry/core/lib/components/screen/Screen';
import {Heading} from '@pengepantry/core/lib/components/heading/Heading';
import {VerticalListItem} from '@pengepantry/core/lib/components/list-item/VerticalListItem';
import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {CenteredRow} from '@pengepantry/core/lib/components/layout/Row';
import {Button} from '@pengepantry/core/lib/components/button/Button';
import {Divider} from '@pengepantry/core/lib/components/divider/Divider';
import {useTogglePantryItem} from '@pengepantry/core/lib/store/slices/order/order-actions';
import {ColSpacer} from '@pengepantry/core/lib/components/layout/Spacer';

export const MenuReview = () => {
  const togglePantryItem = useTogglePantryItem();
  return (
    <Screen>
      <Heading
        title="Order Confirmation"
        subTitle="Review  your selection and add any pantry items"
      />
      <ColSpacer />
      <VerticalListItem imageUri="https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg">
        <AppView>
          <AppText variant="h3">A recipe with a difference</AppText>
          <ColSpacer />
          <AppText>3 pantry items </AppText>
        </AppView>
      </VerticalListItem>
      <ColSpacer />
      <VerticalListItem imageUri="https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg">
        <AppText variant="h3">A recipe with a difference</AppText>
      </VerticalListItem>
      <ColSpacer />
      <VerticalListItem imageUri="https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg">
        <AppText variant="h3">A recipe with a difference</AppText>
      </VerticalListItem>
      <ColSpacer />
      <Heading title="Pantry items" subTitle="Select items that last a while" />
      <ColSpacer />
      <VerticalListItem imageUri="https://images.everydayhealth.com/images/olive-oil-lowers-alzheimers-death-risk-1440x810.jpg">
        <CenteredRow className="justify-between">
          <AppView>
            <AppText variant="h3">Olive oil (500ml)</AppText>
            <ColSpacer />
            <AppText>£1.99</AppText>
          </AppView>
          <Button onPress={() => togglePantryItem('1')}>ADD</Button>
        </CenteredRow>
      </VerticalListItem>
      <ColSpacer />
      <Heading title="Order summary" />
      <ColSpacer />
      <CenteredRow className="justify-between">
        <AppText variant="p1">Recipes (3)</AppText>
        <AppText variant="p1">£29.99</AppText>
      </CenteredRow>
      <ColSpacer size="s" />
      <Divider />
      <ColSpacer size="s" />
      <CenteredRow className="justify-between">
        <AppText variant="p1">Pantry items (1)</AppText>
        <AppText variant="p1">£1.99</AppText>
      </CenteredRow>
      <ColSpacer size="s" />
      <Divider />
      <ColSpacer size="s" />
      <CenteredRow className="justify-between">
        <AppText variant="p1">Delivery cost</AppText>
        <AppText variant="p1">£2.49</AppText>
      </CenteredRow>
      <ColSpacer size="s" />
      <Divider />
      <ColSpacer size="s" />
      <CenteredRow className="justify-between">
        <AppText family="Poppins">Total</AppText>
        <AppText family="Poppins">£34.89</AppText>
      </CenteredRow>
      <ColSpacer size="s" />
      <ColSpacer size="s" />
      <Button>CONFIRM</Button>
    </Screen>
  );
};
