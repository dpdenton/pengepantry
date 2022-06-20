import React, {useCallback} from 'react';
import {RecipeDetail} from '@pengepantry/core/lib/components/recipe-detail/RecipeDetail';
import {useDispatch} from 'react-redux';
import {useRecipeSelections} from '@pengepantry/core/lib/store/store-selectors';
import {orderSlice} from '@pengepantry/core/lib/store/slices/order/order-slice';

interface Props {
  recipeId: string;
}
export const RecipeDetailRedux: React.FC<Props> = ({recipeId}) => {
  const dispatch = useDispatch();
  const selectedRecipeIds = useRecipeSelections();
  const addRecipe = useCallback(() => {
    dispatch(orderSlice.actions.toggleRecipeSelection(recipeId));
  }, [recipeId]);
  return (
    <RecipeDetail
      title="Welcome, Wisteria 👋"
      subTitle="Locally source recipe boxes from your favourite shops"
      heroImageUrl="https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg"
      ingredients={[
        {id: '1', name: 'Peperoni'},
        {id: '1', name: 'Cheese'},
        {id: '1', name: 'Chicken breaks'},
        {id: '1', name: 'Oil'},
        {id: '1', name: 'Salt'},
      ]}
      cookingSteps={[
        'Locally source recipe boxes from your favourite shops',
        'Locally source recipe boxes from your favourite shops',
        'Locally source recipe boxes from your favourite shops',
      ]}
      isSelected={selectedRecipeIds.includes(recipeId)}
      addRecipe={addRecipe}
    />
  );
};
