import React from 'react';
import {OrderSummary} from '@pengepantry/core/lib/components/order-summary/OrderSummary';
import {useRecipeSelections} from '@pengepantry/core/lib/store/selectors/recipeSelectors';
import {RecipeSelectionRedux} from 'components/RecipeSelection.redux';
import {useNavigation} from '@react-navigation/native';
import {MenuRoute} from 'navigation/home/types';
import {RowMedium} from '@pengepantry/core/lib/components/layout/Spacer';

export const OrderSummaryRedux = () => {
  const {navigate} = useNavigation();
  const [idOne, idTwo, idThree] = useRecipeSelections();

  return (
    <OrderSummary onNext={() => navigate(MenuRoute.MenuReview)}>
      <RecipeSelectionRedux recipeSelectionId={idOne} />
      <RowMedium />
      <RecipeSelectionRedux recipeSelectionId={idTwo} />
      <RowMedium />
      <RecipeSelectionRedux recipeSelectionId={idThree} />
    </OrderSummary>
  );
};
