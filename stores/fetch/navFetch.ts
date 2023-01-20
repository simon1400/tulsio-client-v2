import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "lib/api";
import { getCategoryNav } from "queries/category";

export const fetchCategoryNav = createAsyncThunk(
  'categoryNav',
  async (thunkAPI) => {    
    const { data: navData } = await client.query({query: getCategoryNav});

    const nav = navData.categories.data.map((item: any) => (
      {
        title: item.attributes.title, 
        slug: item.attributes.slug
      }
    ))

    return ({ nav })
  }
)