import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  title: string
}

const initialState: CounterState = {
  title: '',
}

export const dataReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTitle } = dataReducer.actions

export default dataReducer.reducer