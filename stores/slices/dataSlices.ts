import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from 'stores';
import { fetchAllArticles, fetchCategoryOrArticles } from 'stores/fetch/dataFetch';
import { fetchCategoryNav } from 'stores/fetch/navFetch';

export interface DataState {
  title: string
  description: string
  articles: any
  articleBase: any
  nav: any
}

const initialState: DataState = {
  title: '',
  description: '',
  articles: [],
  articleBase: {},
  nav: []
}

export const dataReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
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
    changeNav: (state, action: PayloadAction<any>) => {
      state.nav = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllArticles.fulfilled, (state, action) => {
      console.log(state.articles)
      console.log(action)
      state.articles = action.payload.data
      state.title = action.payload.title
      state.description = action.payload.description
      return state
    })
    
    builder.addCase(fetchCategoryOrArticles.fulfilled, (state, action) => {
      state.articles = action.payload.articles
      state.articleBase = action.payload.articleBase
      state.title = action.payload.title
      state.description = action.payload.description
      return state
    })
    
    builder.addCase(fetchCategoryNav.fulfilled, (state, action) => {
      state.nav = action.payload.nav
      return state
    })

    return {
      [HYDRATE]: (state: DataState, action: any) => {
        return {
          ...state,
          ...action.payload.data,
        };
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  changeTitle, 
  changeDescription,
  changeArticles,
  changeArticleBase,
  changeNav
} = dataReducer.actions

export const selectDataState = (state: AppState) => state.data;

export default dataReducer.reducer