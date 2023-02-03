import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppState } from 'stores';

export interface ModalState {
  modalState: "success" | "error" | null
}

const initialState: ModalState = {
  modalState: null
}

export const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeModalState: (state, action: PayloadAction<any>) => {
      state.modalState = action.payload
      return state
    },
  }
})

export const { changeModalState } = modalReducer.actions

export const selectModalState = (state: AppState) => state.modal.modalState;

export default modalReducer.reducer