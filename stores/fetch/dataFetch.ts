import { client } from "lib/api";
import {
  getAllArticles,
  getArticleBase,
  getArticlesCategory,
  getArticlesTag,
} from "queries/articles";
import { getCategory } from "queries/category";
import { getTag } from "queries/tags";
import { AppThunk } from "stores";
import { dataReducer } from "stores/slices/dataSlices";

export const fetchAllArticles =
  (link: string): AppThunk =>
  async (dispatch) => {
    let title = 'Blog',
        description = 'Blog',
        articles = [],
        type = 'blog'

    if (link === "blog" || link === 'tags') {

      if(link === 'blog') {
        title = 'Blog',
        description = 'Blog',
        type = 'blog'
      }else{
        title = 'Štítky',
        description = 'Štítky',
        type = 'tag'
      }

      const { data: articleData } = await client.query({query: getAllArticles});
      articles = articleData.articles.data.map((item: any) => ({ ...item.attributes }))

    } else {

      const { data: categoryDataReq } = await client.query({
        query: getCategory,
        variables: {
          slug: link,
        },
      });

      if(categoryDataReq.categories.data.length) {
        type = "blog";
        const { data } = await client.query({
          query: getArticlesCategory,
          variables: {
            slug: link,
          },
        });
        
        title = categoryDataReq.categories.data[0]?.attributes.meta.title,
        description = categoryDataReq.categories.data[0]?.attributes.meta.description,
        articles = data.articles.data.map((item: any) => ({ ...item.attributes }))
      }else{
        const { data: tagDataReq } = await client.query({
          query: getTag,
          variables: {
            slug: link,
          },
        });
        if (tagDataReq.labels.data.length) {
          type = "tag";
          title =
            tagDataReq.labels.data[0]?.attributes?.meta?.title ||
            tagDataReq.labels.data[0]?.attributes.title;
          description =
            tagDataReq.labels.data[0]?.attributes?.meta?.description;
          const { data: articlesData } = await client.query({
            query: getArticlesTag,
            variables: {
              slug: link,
            },
          });
          articles = articlesData.articles.data.map((item: any) => ({
            ...item.attributes,
          }));
        }
      }
    }

    dispatch(dataReducer.actions.changeTitle(title));
    dispatch(dataReducer.actions.changeDescription(description));
    dispatch(dataReducer.actions.changeArticles(articles));
    dispatch(dataReducer.actions.changeType(type));

  };

export const fetchCategoryOrArticles =
  (link: string): AppThunk =>
  async (dispatch) => {
    let articles = [],
      articleBase = {},
      dataTitle = "Blog",
      dataDescription = "Blog",
      type = "blog";

    if (link === "blog" || link === "tags") {
      if(link === 'blog') {
        dataTitle = 'Blog',
        dataDescription = 'Blog',
        type = 'blog'
      }else{
        dataTitle = 'Štítky',
        dataDescription = 'Štítky',
        type = 'tag'
      }
      const { data: articleData } = await client.query({
        query: getAllArticles,
      });

      articles = articleData.articles.data.map((item: any) => ({
        ...item.attributes,
      }));
    } else {
      const { data: categoryDataReq } = await client.query({
        query: getCategory,
        variables: {
          slug: link,
        },
      });
      if (categoryDataReq.categories.data.length) {

        dataTitle = categoryDataReq.categories.data[0]?.attributes.meta.title;
        dataDescription = categoryDataReq.categories.data[0]?.attributes.meta.description;

        const { data: articlesData } = await client.query({
          query: getArticlesCategory,
          variables: {
            slug: link,
          },
        });

        articles = articlesData.articles.data.map((item: any) => ({
          ...item.attributes,
        }));

      } else {
        const { data: tagDataReq } = await client.query({
          query: getTag,
          variables: {
            slug: link,
          },
        });
        if (tagDataReq.labels.data.length) {

          type = "tag";
          dataTitle = tagDataReq.labels.data[0]?.attributes?.meta?.title || tagDataReq.labels.data[0]?.attributes.title;
          dataDescription = tagDataReq.labels.data[0]?.attributes?.meta?.description || "";

          const { data: articlesData } = await client.query({
            query: getArticlesTag,
            variables: {
              slug: link,
            },
          });
          articles = articlesData.articles.data.map((item: any) => ({...item.attributes}));
        } else {
          const { data: articleBaseReq } = await client.query({
            query: getArticleBase,
            variables: {
              slug: link,
            },
          });
          articleBase = articleBaseReq.articlesBase.data[0]?.attributes;
        }
      }
    }

    dispatch(dataReducer.actions.changeType(type));
    dispatch(dataReducer.actions.changeTitle(dataTitle));
    dispatch(dataReducer.actions.changeDescription(dataDescription));
    dispatch(dataReducer.actions.changeArticles(articles));
    dispatch(dataReducer.actions.changeArticleBase(articleBase));
  };
