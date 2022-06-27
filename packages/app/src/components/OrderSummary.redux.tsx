import React from 'react';
import {MenuRoute} from 'navigation/home/types';
import {useHomeNavigation} from 'navigation/home/HomeStack';
import {RecipeSelectionRedux} from 'components/RecipeSelection.redux';
import {OrderSummary} from '@pengepantry/core/lib/components/order-summary/OrderSummary';
import {RowSpacer} from '@pengepantry/core/lib/components/layout/Spacer';
import {useRecipeSelections} from '@pengepantry/core/lib/store/store-selectors';

export const OrderSummaryRedux = () => {
  const {navigate} = useHomeNavigation();
  const [idOne, idTwo, idThree] = useRecipeSelections();

  return (
    <OrderSummary onNext={() => navigate(MenuRoute.MenuReview)}>
      <RecipeSelectionRedux recipeSelectionId={idOne} />
      <RowSpacer />
      <RecipeSelectionRedux recipeSelectionId={idTwo} />
      <RowSpacer />
      <RecipeSelectionRedux recipeSelectionId={idThree} />
    </OrderSummary>
  );
};
