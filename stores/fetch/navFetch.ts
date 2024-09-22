import type { AppThunk } from 'stores'

import { client } from 'lib/api'
import { getCatalogNav, getCategoryNav } from 'queries/category'
import { getTagNav } from 'queries/tags'
import { navReducer } from 'stores/slices/navSlices'

export const fetchNavCategory =
  (locale: string): AppThunk =>
  async (dispatch) => {
    const { data: navData } = await client.query({
      query: getCategoryNav,
      variables: { locale },
    })

    const nav = navData.categories.data.map((item: any) => ({
      title: item.attributes.navTitle,
      slug: item.attributes.slug,
    }))

    dispatch(navReducer.actions.changeCategoryNav(nav))
  }

export const fetchNavCatalog =
  (locale: string): AppThunk =>
  async (dispatch) => {
    const { data } = await client.query({ query: getCatalogNav, variables: { locale } })

    const nav = data.shopCategories.data.map((item: any) => ({
      title: item.attributes.navTitle,
      slug: item.attributes.slug,
    }))

    dispatch(navReducer.actions.changeCategoryNav(nav))
  }

export const fetchNavTag =
  (locale: string): AppThunk =>
  async (dispatch) => {
    const { data: navData } = await client.query({
      query: getTagNav,
      variables: { locale },
    })

    const resultNav = navData.labels.data.filter((item: any) => {
      if (item.attributes.articles.data.length) {
        const filterPublish = item.attributes.articles.data.filter(
          (itemPublish: any) => itemPublish.attributes.publishedAt,
        )
        if (filterPublish.length) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    })

    const nav = resultNav.map((item: any) => ({
      title: item.attributes.navTitle,
      slug: item.attributes.slug,
    }))

    dispatch(navReducer.actions.changeCategoryNav(nav))
  }
