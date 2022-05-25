import {useSelector} from 'react-redux';
import {GlobalReduxStore} from 'store/store';
import {Recipe} from 'entities/Recipe';

export const useAppStore = <TSelection = unknown>(
  selector: (state: GlobalReduxStore) => TSelection,
) => useSelector(selector);

export const useRecipeSelections = () => {
  return useAppStore(({order}) => order.recipeIds);
};

export const useRecipeStore = () => {
  return useAppStore(({recipeData}) => recipeData);
};

export const useRecipesList = (): Recipe[] => {
  return useAppStore<Recipe[]>(state =>
    Array.from(state.recipeData.byId.values()),
  );
};

export const recipeSelector =
  (recipeId: string | undefined) => (state: GlobalReduxStore) => {
    return recipeId && state.recipeData.byId.get(recipeId);
  };
