import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getRecipeById} from 'services/graphql/queries';
import createSagaMiddleware from 'redux-saga';
import {Recipe} from 'entities/Recipe';
import * as GraphQLModels from 'services/graphql/models';
import {RecipeDataSlice, recipeDataSlice} from 'store/slices/recipe-data-slice';
import {orderSlice, OrderSlice} from 'store/slices/order/order-slice';
import {initialStoreValues} from 'store/store.data';

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// })

export interface GlobalReduxStore {
  recipeData: RecipeDataSlice;
  order: OrderSlice;
}

export const rootReducer = combineReducers<GlobalReduxStore>({
  recipeData: recipeDataSlice.reducer,
  order: orderSlice.reducer,
});

export const STATE_KEY = 'pengepantry-app-state';

export const initialState = {
  order: {recipeIds: [null, null, null], pantryItemIds: []},
  recipeData: {
    loading: false,
    byId: initialStoreValues,
    recipe: null,
  },
};

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// Mount it on the Store
export const reduxStore = createStore<GlobalReduxStore, AnyAction, any, any>(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware),
);

// SAGAS

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchRecipe(args: {type: string; payload: number}) {
  console.log({args});
  try {
    const recipe: GraphQLModels.Recipe = yield call(() =>
      getRecipeById({variables: {id: args.payload}}),
    );
    yield put(recipeDataSlice.actions.setProduct(Recipe.fromGraphQL(recipe)));
  } catch (e) {
    yield put({type: 'USER_FETCH_FAILED', message: e});
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* mySaga() {
  // @ts-ignore
  yield takeEvery(recipeDataSlice.actions.fetchRecipe, fetchRecipe);
}

// Then run the saga
sagaMiddleware.run(mySaga);

export {sagaMiddleware};
