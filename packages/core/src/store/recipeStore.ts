import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/src/createAction';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getRecipeById} from 'services/graphql/queries';
import createSagaMiddleware from 'redux-saga';
import {Recipe} from 'entities/Recipe';
import * as GraphQLModels from 'services/graphql/models';
import {Nullable} from 'utils/types';

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// })
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

export interface RecipeStore {
  loading: boolean;
  recipe: Nullable<Recipe>;
  byId: Map<string, Recipe>;
}

type RecipeStoreReducers = {
  addRecipe: (state: RecipeStore, payload: PayloadAction<Recipe>) => void;
  fetchRecipe: (state: RecipeStore, payload: PayloadAction<number>) => void;
  setProduct: (state: RecipeStore, payload: PayloadAction<Recipe>) => void;
};

export const recipeStore = createSlice<RecipeStore, RecipeStoreReducers>({
  name: 'recipeStore',
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

type RecipeOrderStore = {
  selectedRecipeIds: (string | undefined)[];
};

type RecipeOrderReducers = {
  toggleRecipeSelection: (
    state: RecipeOrderStore,
    payload: PayloadAction<string>,
  ) => void;
};

export const selectionsSlice = createSlice<
  RecipeOrderStore,
  RecipeOrderReducers
>({
  name: 'selections',
  initialState: {
    selectedRecipeIds: [undefined, undefined, undefined],
  },
  reducers: {
    toggleRecipeSelection: ({selectedRecipeIds}, {payload: recipeId}) => {
      const recipeIndex = selectedRecipeIds.indexOf(recipeId);
      if (recipeIndex > -1) {
        selectedRecipeIds[recipeIndex] = undefined;
      } else {
        const index = selectedRecipeIds.indexOf(undefined);
        selectedRecipeIds[index] = recipeId;
      }
    },
  },
});

export interface GlobalReduxStore {
  recipeStore: RecipeStore;
  selections: RecipeOrderStore;
}

const reducer = combineReducers<GlobalReduxStore>({
  recipeStore: recipeStore.reducer,
  selections: selectionsSlice.reducer,
});
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// Mount it on the Store
export const reduxStore = createStore(reducer, applyMiddleware(sagaMiddleware));

// export const reduxStore = configureStore({
//     reducer,
//     middleware: customizedMiddleware,
// })

// SAGAS

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchRecipe(action: {payload: number; type: string}) {
  try {
    const recipe: GraphQLModels.Recipe = yield call(getRecipeById);
    yield put(recipeStore.actions.setProduct(Recipe.fromGraphQL(recipe)));
  } catch (e) {
    yield put({type: 'USER_FETCH_FAILED', message: e});
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* mySaga() {
  yield takeEvery(recipeStore.actions.fetchRecipe, fetchRecipe);
}

// Then run the saga
sagaMiddleware.run(mySaga);
