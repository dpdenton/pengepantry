import {PayloadAction} from '@reduxjs/toolkit/src/createAction';
import {createSlice} from '@reduxjs/toolkit';
import {toggleValue} from 'store/utils';

export type OrderSlice = {
  recipeIds: (string | undefined)[];
  pantryItemIds: string[];
};

type OrderReducers = {
  toggleRecipeSelection: (
    state: OrderSlice,
    payload: PayloadAction<string>,
  ) => any;
  togglePantryItemSelection: (
    state: OrderSlice,
    payload: PayloadAction<string>,
  ) => any;
};

export const orderSlice = createSlice<OrderSlice, OrderReducers>({
  name: 'orderSlice',
  initialState: {
    recipeIds: [undefined, undefined, undefined],
    pantryItemIds: [],
  },
  reducers: {
    toggleRecipeSelection: ({recipeIds}, {payload: recipeId}) => {
      const recipeIndex = recipeIds.indexOf(recipeId);
      if (recipeIndex > -1) {
        recipeIds[recipeIndex] = undefined;
      } else {
        const index = recipeIds.indexOf(undefined);
        recipeIds[index] = recipeId;
      }
    },
    togglePantryItemSelection: (
      {pantryItemIds: haystack},
      {payload: needle},
    ) => {
      toggleValue({haystack, needle});
    },
  },
});
