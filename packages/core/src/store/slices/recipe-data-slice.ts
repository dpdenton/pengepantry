import {Recipe} from 'entities/Recipe';
import {Nullable} from 'utils/types';
import {PayloadAction} from '@reduxjs/toolkit/src/createAction';
import {createSlice} from '@reduxjs/toolkit';

export interface RecipeDataSlice {
  loading: boolean;
  recipe: Nullable<Recipe>;
  byId: Record<string, Recipe>;
}

type RecipeDataSliceReducers = {
  addRecipe: (state: RecipeDataSlice, payload: PayloadAction<Recipe>) => any;
  fetchRecipe: (state: RecipeDataSlice, payload: PayloadAction<number>) => any;
  setProduct: (state: RecipeDataSlice, payload: PayloadAction<Recipe>) => any;
};

export const recipeDataSlice = createSlice<
  RecipeDataSlice,
  RecipeDataSliceReducers
>({
  name: 'recipeData',
  initialState: {
    loading: false,
    byId: {},
    recipe: null,
  },
  reducers: {
    setProduct: (state, {payload}) => {
      state.loading = false;
      state.recipe = payload;
    },
    fetchRecipe: state => {
      state.loading = true;
    },
    addRecipe: (state, {payload}) => {
      state.byId[payload.id] = payload;
    },
  },
});
