import {PayloadAction} from '@reduxjs/toolkit/src/createAction';
import {createSlice} from '@reduxjs/toolkit';
import {toggleValue} from 'store/utils';

export type OrderSlice = {
  recipeIds: (string | null)[];
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
    recipeIds: [null, null, null],
    pantryItemIds: [],
  },
  reducers: {
    toggleRecipeSelection: ({recipeIds}, {payload: recipeId}) => {
      const recipeIndex = recipeIds.indexOf(recipeId);
      if (recipeIndex > -1) {
        recipeIds[recipeIndex] = null;
      } else {
        const index = recipeIds.indexOf(null);
        if (index < 0) {
          throw Error(
            `About to index recipeIds at -1: ${recipeIds.join(', ')}`,
          );
        }
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
