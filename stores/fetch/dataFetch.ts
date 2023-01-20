import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "lib/api";
import { getAllArticles, getArticleBase, getArticlesCategory } from "queries/articles";
import { getCategory } from "queries/category";

export const fetchAllArticles = createAsyncThunk(
  'articles/all',
  async (link: string) => {
    if(link === 'blog') {
      const { data: articleData } = await client.query({query: getAllArticles});
      return ({
        title: 'Blog',
        description: 'Blog',
        data: articleData.articles.data.map((item: any) => ({...item.attributes}))
      })
    }else{
      const { data } = await client.query({
        query: getArticlesCategory,
        variables: {
          slug: link
        }
      });
      const { data: categoryDataReq } = await client.query({
        query: getCategory,
        variables: {
          slug: link
        }
      });
      return ({
        title: categoryDataReq.categories.data[0]?.attributes.meta.title,
        description: categoryDataReq.categories.data[0]?.attributes.meta.description,
        data: data.articles.data.map((item: any) => ({...item.attributes}))
      })
    }
  }
)

export const fetchCategoryOrArticles = createAsyncThunk(
  'categoryOrArticles',
  async (link: string, thunkAPI) => {
    let articles = [], 
        articleBase = {}, 
        dataTitle = 'Blog', 
        dataDescription = "Blog"
    
    if(link === 'blog') {
      const { data: articleData } = await client.query({query: getAllArticles});
      articles = articleData.articles.data.map((item: any) => ({...item.attributes}))
    }else{
      const { data: categoryDataReq } = await client.query({
        query: getCategory,
        variables: {
          slug: link
        }
      });
      if(categoryDataReq.categories.data.length) {
        dataTitle = categoryDataReq.categories.data[0]?.attributes.meta.title
        dataDescription = categoryDataReq.categories.data[0]?.attributes.meta.description
        const { data: articlesData } = await client.query({
          query: getArticlesCategory,
          variables: {
            slug: link
          }
        });
        articles = articlesData.articles.data.map((item: any) => ({...item.attributes}))
      }else{
        const { data: articleBaseReq } = await client.query({
          query: getArticleBase,
          variables: {
            slug: link
          }
        });
        articleBase = articleBaseReq.articlesBase.data[0]?.attributes
      }
    }
    return ({
      title: dataTitle,
      description: dataDescription,
      articles,
      articleBase
    })
  }
)