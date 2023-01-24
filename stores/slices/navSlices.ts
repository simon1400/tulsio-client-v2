import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from 'stores';

export interface NavState {
  categoryNav: any
}

const initialState: NavState = {
  categoryNav: []
}

export const navReducer = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    changeCategoryNav: (state, action: PayloadAction<any>) => {
      state.categoryNav = action.payload
      return state
    },
  },

  extraReducers: {
    [HYDRATE]: (state: NavState, action: any) => {
      return {
        ...state,
        ...action.payload.nav,
      };
    }
  },
})

export const { changeCategoryNav } = navReducer.actions

export const selectCategoryNav = (state: AppState) => state.nav.categoryNav;

export default navReducer.reducer