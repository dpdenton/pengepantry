import {Recipe} from 'entities/Recipe';
import {Nullable} from 'utils/types';
import {PayloadAction} from '@reduxjs/toolkit/src/createAction';
import {createSlice} from '@reduxjs/toolkit';

const initialStoreValues = new Map<string, Recipe>();
initialStoreValues.set('1', {
  id: '1',
  url: 'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
  name: 'Honey roast lamb',
});
initialStoreValues.set('2', {
  id: '2',
  url: 'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
  name: 'Honey roast beef',
});
initialStoreValues.set('3', {
  id: '3',
  url: 'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
  name: 'Honey roast chicken',
});

initialStoreValues.set('4', {
  id: '4',
  url: 'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
  name: 'Some other shit',
});
initialStoreValues.set('5', {
  id: '5',
  url: 'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
  name: 'Only on the high street',
});

export interface RecipeDataSlice {
  loading: boolean;
  recipe: Nullable<Recipe>;
  byId: Map<string, Recipe>;
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
    byId: initialStoreValues,
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
      state.byId.set(payload.id, payload);
    },
  },
});
