import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from 'stores'

import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export interface DataState {
  title: string
  shortTitle: string
  shortDescription: string
  categoryTitle: string
  description: string
  articles: any
  articleBase: any
  type: string
}

const initialState: DataState = {
  title: '',
  shortTitle: '',
  shortDescription: '',
  categoryTitle: '',
  description: '',
  articles: [],
  articleBase: {},
  type: '',
}

export const dataReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    changeCategoryTitle: (state, action: PayloadAction<string>) => {
      state.categoryTitle = action.payload
    },
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    changeShortTitle: (state, action: PayloadAction<string>) => {
      state.shortTitle = action.payload
    },
    changeShortDescription: (state, action: PayloadAction<string>) => {
      state.shortDescription = action.payload
    },
    changeDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
    changeArticles: (state, action: PayloadAction<any>) => {
      state.articles = action.payload
    },
    changeArticleBase: (state, action: PayloadAction<any>) => {
      state.articleBase = action.payload
    },
    changeType: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: DataState, action: any) => {
      return {
        ...state,
        ...action.payload.data,
      }
    })
  },
})

export const {
  changeTitle,
  changeCategoryTitle,
  changeShortTitle,
  changeShortDescription,
  changeDescription,
  changeArticles,
  changeArticleBase,
  changeType,
} = dataReducer.actions

export const selectDataState = (state: AppState) => state.data
export const selectTitle = (state: AppState) => state.data.title
export const selectCategoryTitle = (state: AppState) => state.data.categoryTitle
export const selectDescription = (state: AppState) => state.data.description
export const selectArticles = (state: AppState) => state.data.articles
export const selectArticleBase = (state: AppState) => state.data.articleBase
export const selectType = (state: AppState) => state.data.type
export const selectShortTitle = (state: AppState) => state.data.shortTitle
export const selectShortDescription = (state: AppState) => state.data.shortDescription

export default dataReducer.reducer
