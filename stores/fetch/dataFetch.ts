import { client } from "lib/api";
import { getAllArticles, getArticleBase, getArticlesCategory } from "queries/articles";
import { getCategory } from "queries/category";
import { AppThunk } from "stores";
import { dataReducer } from "stores/slices/dataSlices";

export const fetchAllArticles = (link: string): AppThunk =>
  async dispatch => {
    if(link === 'blog') {
      const { data: articleData } = await client.query({query: getAllArticles});
      dispatch(dataReducer.actions.changeTitle('Blog'));
      dispatch(dataReducer.actions.changeDescription('Blog'));
      dispatch(dataReducer.actions.changeArticles(articleData.articles.data.map((item: any) => ({...item.attributes}))));
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
      dispatch(dataReducer.actions.changeTitle(categoryDataReq.categories.data[0]?.attributes.meta.title));
      dispatch(dataReducer.actions.changeDescription(categoryDataReq.categories.data[0]?.attributes.meta.description));
      dispatch(dataReducer.actions.changeArticles(data.articles.data.map((item: any) => ({...item.attributes}))));
    }
  };


export const fetchCategoryOrArticles = (link: string): AppThunk =>
  async dispatch => {
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
    dispatch(dataReducer.actions.changeTitle(dataTitle));
    dispatch(dataReducer.actions.changeDescription(dataDescription));
    dispatch(dataReducer.actions.changeArticles(articles));
    dispatch(dataReducer.actions.changeArticleBase(articleBase));
  };