import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from 'stores';

export interface NavState {
  categoryActive: number
}

const initialState: NavState = {
  categoryActive: 0
}

export const activeReducer = createSlice({
  name: 'active',
  initialState,
  reducers: {
    changeActiveCategoryNav: (state, action: PayloadAction<any>) => {
      state.categoryActive = action.payload
      return state
    },
  }
})

export const { changeActiveCategoryNav } = activeReducer.actions

export const selectActiveCategoryNav = (state: AppState) => state.active.categoryActive;

export default activeReducer.reducer