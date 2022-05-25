import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {Maybe} from '@pengepantry/core/lib/utils/types';
import {Recipe} from '@pengepantry/core/lib/entities/Recipe';
import {RecipeSelection} from '@pengepantry/core/lib/components/order-summary/RecipeSelection';
import {useRecipeStore} from '@pengepantry/core/lib/store/store-selectors';

interface Props {
  recipeSelectionId: Maybe<string>;
}

export const RecipeSelectionRedux: React.FC<Props> = ({recipeSelectionId}) => {
  const scale = useRef(new Animated.Value(0)).current;
  const prevRecipe = useRef<Maybe<Recipe>>();
  const {byId} = useRecipeStore();

  useEffect(() => {
    Animated.timing(scale, {
      toValue: recipeSelectionId ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [recipeSelectionId, scale]);

  const recipe = recipeSelectionId ? byId.get(recipeSelectionId) : undefined;
  prevRecipe.current = recipe ?? prevRecipe.current;
  return (
    <RecipeSelection
      uri={recipe?.url ?? prevRecipe.current?.url ?? placeholderUri}
      scale={scale}
    />
  );
};

const placeholderUri = 'https://via.placeholder.com/200x100';
