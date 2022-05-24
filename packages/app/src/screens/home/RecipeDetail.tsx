import React from 'react';
import {Screen} from '@pengepantry/core/lib/components/screen/Screen';
import {RecipeDetail} from '@pengepantry/core/lib/components/recipe-detail/RecipeDetail';

export const RecipeDetailScreen = () => {
  return (
    <Screen>
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
      />
    </Screen>
  );
};
