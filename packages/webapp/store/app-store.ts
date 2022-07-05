import {debounce} from 'lodash';
import {AnyAction, applyMiddleware, createStore, compose} from 'redux';
import {GlobalReduxStore} from '@pengepantry/core/lib/store/store';
import {
  rootReducer,
  sagaMiddleware,
  initialState,
  STATE_KEY,
} from '@pengepantry/core/lib/store/store';

const isClient = typeof window !== 'undefined';

const loadState = () => {
  const stateString = isClient && localStorage.getItem(STATE_KEY);
  return stateString ? JSON.parse(stateString) : initialState;
};

const preloadedState = loadState();

const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const appStore = createStore<GlobalReduxStore, AnyAction, any, any>(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const handler = debounce(
  () => {
    const state = appStore.getState();
    const stateString = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, stateString);
  },
  500,
  {
    trailing: true,
  },
);

appStore.subscribe(handler);
