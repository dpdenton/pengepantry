import React from 'react';
import {OrderSummary} from '@pengepantry/core/lib/components/order-summary/OrderSummary';
import {useRecipeSelections} from '@pengepantry/core/lib/store/selectors/recipeSelectors';
import {RecipeSelectionRedux} from 'components/RecipeSelection.redux';

export const OrderSummaryRedux = () => {
  const [idOne, idTwo, idThree] = useRecipeSelections();

  return (
    <OrderSummary>
      <RecipeSelectionRedux recipeSelectionId={idOne} />
      <RecipeSelectionRedux recipeSelectionId={idTwo} />
      <RecipeSelectionRedux recipeSelectionId={idThree} />
    </OrderSummary>
  );
};
