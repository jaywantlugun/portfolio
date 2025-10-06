import { configureStore, combineReducers } from "@reduxjs/toolkit";
import type { Reducer, UnknownAction } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReducerMap = Record<string, Reducer<any, UnknownAction>>;

export const createDynamicStore = () => {
  const asyncReducers: ReducerMap = {};

  // function to create root reducer dynamically
  const createRootReducer = (asyncReducers: ReducerMap) =>
    combineReducers({
      [baseApi.reducerPath]: baseApi.reducer,
      ...asyncReducers,
    });

  const store = configureStore({
    reducer: createRootReducer(asyncReducers),
    middleware: (getDefault) => getDefault().concat(baseApi.middleware),
  });

  // extend store with custom fields
  const extendedStore = store as typeof store & {
    asyncReducers: ReducerMap;
    injectReducer: (key: string, asyncReducer: Reducer) => void;
  };

  extendedStore.asyncReducers = asyncReducers;

  extendedStore.injectReducer = (key: string, asyncReducer: Reducer) => {
    if (!extendedStore.asyncReducers[key]) {
      extendedStore.asyncReducers[key] = asyncReducer;
      extendedStore.replaceReducer(
        createRootReducer(extendedStore.asyncReducers),
      );
    }
  };

  return extendedStore;
};

export const store = createDynamicStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
