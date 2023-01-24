import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { dataReducer } from "./slices/dataSlices";
import { createWrapper } from "next-redux-wrapper";
import { navReducer } from "./slices/navSlices";
import { metaReducer } from "./slices/metaSlices";
import { activeReducer } from "./slices/activeSlices";

const makeStore = () =>
  configureStore({
    reducer: {
      [dataReducer.name]: dataReducer.reducer,
      [metaReducer.name]: metaReducer.reducer,
      [navReducer.name]: navReducer.reducer,
      [activeReducer.name]: activeReducer.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
  });

  export type AppStore = ReturnType<typeof makeStore>;
  export type AppState = ReturnType<AppStore['getState']>;
  export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);