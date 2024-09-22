import type { Action, ThunkAction } from '@reduxjs/toolkit'

import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { dataReducer } from './slices/dataSlices'
import { metaReducer } from './slices/metaSlices'
import { modalReducer } from './slices/modalSlices'
import { navReducer } from './slices/navSlices'

const makeStore = () =>
  configureStore({
    reducer: {
      [dataReducer.name]: dataReducer.reducer,
      [metaReducer.name]: metaReducer.reducer,
      [navReducer.name]: navReducer.reducer,
      [modalReducer.name]: modalReducer.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)
