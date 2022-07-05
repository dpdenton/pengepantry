import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';
import {useRecipeSelections} from '@pengepantry/core/lib/store/store-selectors';
import React from 'react';

export const SelectedRecipeIds = () => {
  const recipeSelections = useRecipeSelections();
  return <AppText>{recipeSelections.join(', ')}</AppText>;
};
