import type { AppThunk } from 'stores'

import { dispatchData } from './dispatchData'
import { fetchDataByType } from './fetchDataByType'

export interface FetchResult {
  title: string
  categoryTitle: string
  description: string
  shortTitle: string
  shortDescription: string
  articles: any[]
  articleBase?: any
  type: 'blog' | 'tag'
}

// 🔹 Akce využívající univerzální funkci

export const fetchAllArticles =
  (link: string, locale: string): AppThunk =>
  async (dispatch) => {
    try {
      const data = await fetchDataByType(link, locale)
      dispatchData(dispatch, data)
    } catch (error) {
      console.error('❌ Chyba při načítání dat v fetchAllArticles:', error)
    }
  }

export const fetchCategoryOrArticles =
  (link: string, locale: string): AppThunk =>
  async (dispatch) => {
    try {
      const data = await fetchDataByType(link, locale)
      dispatchData(dispatch, data)
    } catch (error) {
      console.error('❌ Chyba při načítání dat v fetchCategoryOrArticles:', error)
    }
  }
