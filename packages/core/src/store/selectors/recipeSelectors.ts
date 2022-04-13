import {useSelector} from 'react-redux';
import {GlobalReduxStore} from 'store/recipeStore';
import {Recipe} from 'entities/Recipe';

export const useAppStore = <TSelection = unknown>(
  selector: (state: GlobalReduxStore) => TSelection,
) => useSelector(selector);

export const useRecipeOne = () => {
  const selections = useRecipeSelections();
  return useAppStore(recipeSelector(selections.recipeOneId));
};

export const useRecipeSelections = () => {
  return useAppStore(({selections}) => selections.selectedRecipeIds);
};

export const useRecipesList = (): Recipe[] => {
  return useAppStore<Recipe[]>(state =>
    Array.from(state.recipeStore.byId.values()),
  );
};

export const recipeSelector =
  (recipeId: string | undefined) => (state: GlobalReduxStore) => {
    return recipeId && state.recipeStore.byId.get(recipeId);
  };
