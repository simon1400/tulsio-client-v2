import { client } from "lib/api";
import { getCategoryNav } from "queries/category";
import { AppThunk } from "stores";
import { navReducer } from "stores/slices/navSlices";

export const fetchNav = (): AppThunk =>
  async dispatch => {
    const { data: navData } = await client.query({query: getCategoryNav});

    const nav = navData.categories.data.map((item: any) => (
      {
        title: item.attributes.title, 
        slug: item.attributes.slug
      }
    ))

    dispatch(navReducer.actions.changeCategoryNav(nav));
  };