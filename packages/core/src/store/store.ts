import {applyMiddleware, combineReducers, createStore} from 'redux';

import {call, put, takeEvery} from 'redux-saga/effects';
import {getRecipeById} from 'services/graphql/queries';
import createSagaMiddleware from 'redux-saga';
import {Recipe} from 'entities/Recipe';
import * as GraphQLModels from 'services/graphql/models';
import {RecipeDataSlice, recipeDataSlice} from 'store/slices/recipe-data-slice';
import {orderSlice, OrderSlice} from 'store/slices/order/order-slice';

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// })

export interface GlobalReduxStore {
  recipeData: RecipeDataSlice;
  order: OrderSlice;
}

const reducer = combineReducers<GlobalReduxStore>({
  recipeData: recipeDataSlice.reducer,
  order: orderSlice.reducer,
});
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// Mount it on the Store
export const reduxStore = createStore(reducer, applyMiddleware(sagaMiddleware));

// SAGAS

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchRecipe() {
  try {
    const recipe: GraphQLModels.Recipe = yield call(getRecipeById);
    yield put(recipeDataSlice.actions.setProduct(Recipe.fromGraphQL(recipe)));
  } catch (e) {
    yield put({type: 'USER_FETCH_FAILED', message: e});
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* mySaga() {
  yield takeEvery(recipeDataSlice.actions.fetchRecipe, fetchRecipe);
}

// Then run the saga
sagaMiddleware.run(mySaga);
