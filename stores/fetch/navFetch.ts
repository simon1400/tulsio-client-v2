import { client } from "lib/api";
import { getCategoryNav } from "queries/category";
import { getTagNav } from "queries/tags";
import { AppThunk } from "stores";
import { navReducer } from "stores/slices/navSlices";

export const fetchNavCategory = (): AppThunk => async (dispatch) => {
  const { data: navData } = await client.query({ query: getCategoryNav });

  const nav = navData.categories.data.map((item: any) => ({
    title: item.attributes.navTitle,
    slug: item.attributes.slug,
  }));

  dispatch(navReducer.actions.changeCategoryNav(nav));
};

export const fetchNavTag = (): AppThunk => async (dispatch) => {
  const { data: navData } = await client.query({ query: getTagNav });

  const resultNav = navData.labels.data.filter((item: any) => {
    if(item.attributes.articles.data.length) {
      const filterPublish = item.attributes.articles.data.filter((itemPublish: any) => itemPublish.attributes.publishedAt)
      if(filterPublish.length) {
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  })

  const nav = resultNav.map((item: any) => ({
    title: item.attributes.navTitle,
    slug: item.attributes.slug,
  }));

  dispatch(navReducer.actions.changeCategoryNav(nav));
};
