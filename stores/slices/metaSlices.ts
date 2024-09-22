import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from 'stores'

import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export interface NavState {
  published: string
  category: string
  updated: string
  noCrawl: boolean
  tags: string
  image: string
  ogTitle: string
  ogDescription: string
  contentType: string
  themeColor: string
  siteName: string
  siteUrl: string
}

const initialState: NavState = {
  published: '',
  category: '',
  updated: '',
  noCrawl: false,
  tags: '',
  image: '',
  ogTitle: '',
  ogDescription: '',
  contentType: 'website',
  themeColor: '#4545ff',
  siteName: 'Tulsio',
  siteUrl:
    process.env.NODE_ENV === 'development' ? 'http://localhost:3004/cs' : 'https://tulsio.com/cs',
}

export const metaReducer = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    changePublished: (state, action: PayloadAction<string>) => {
      state.published = action.payload
    },
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    changeNoCrawl: (state, action: PayloadAction<boolean>) => {
      state.noCrawl = action.payload
    },
    changeUpdated: (state, action: PayloadAction<string>) => {
      state.updated = action.payload
    },
    changeImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload
    },
    changeOgTitle: (state, action: PayloadAction<string>) => {
      state.ogTitle = action.payload
    },
    changeOgDescription: (state, action: PayloadAction<string>) => {
      state.ogDescription = action.payload
    },
    changeContentType: (state, action: PayloadAction<string>) => {
      state.contentType = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: NavState, action: any) => {
      return {
        ...state,
        ...action.payload.meta,
      }
    })
  },
})

export const {
  changePublished,
  changeCategory,
  changeNoCrawl,
  changeUpdated,
  changeImage,
  changeOgTitle,
  changeOgDescription,
  changeContentType,
} = metaReducer.actions

export const selectAllMeta = (state: AppState) => state.meta

export default metaReducer.reducer
