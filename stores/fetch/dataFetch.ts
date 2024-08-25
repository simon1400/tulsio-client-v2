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
  (link: string, locale: string): AppThunk =>
  async (dispatch) => {
    let title = 'Blog',
        description = 'Blog',
        categoryTitle = 'Blog',
        articles = [],
        type = 'blog',
        shortTitle = "",
        shortDescription = ""

    if (link === "blog" || link === 'tags') {

      if(link === 'blog') {
        title = 'Blog',
        categoryTitle = 'Blog'
        description = 'Blog',
        type = 'blog'
      }else{
        title = 'Štítky',
        categoryTitle = 'Štítky'
        description = 'Štítky',
        type = 'tag'
      }

      const { data: articleData } = await client.query({query: getAllArticles, variables: {locale: locale}});
      articles = articleData.articles.data.map((item: any) => ({ ...item.attributes }))

    } else {

      const { data: categoryDataReq } = await client.query({
        query: getCategory,
        variables: {
          slug: link,
          locale: locale
        },
      });

      if(categoryDataReq.categories.data.length) {
        type = "blog";
        const { data } = await client.query({
          query: getArticlesCategory,
          variables: {
            slug: link,
            locale: locale
          },
        });
        
        title = categoryDataReq.categories.data[0]?.attributes.meta.title
        categoryTitle = categoryDataReq.categories.data[0]?.attributes.title
        description = categoryDataReq.categories.data[0]?.attributes.meta.description
        shortTitle = categoryDataReq.categories.data[0]?.attributes.shortTitle
        shortDescription = categoryDataReq.categories.data[0]?.attributes.description
        articles = data.articles.data.map((item: any) => ({ ...item.attributes }))
      }else{
        const { data: tagDataReq } = await client.query({
          query: getTag,
          variables: {
            slug: link,
            locale: locale
          },
        });
        if (tagDataReq.labels.data.length) {
          type = "tag";
          title =
            tagDataReq.labels.data[0]?.attributes?.meta?.title ||
            tagDataReq.labels.data[0]?.attributes.title;
          categoryTitle = tagDataReq.labels.data[0]?.attributes.title
          shortTitle = tagDataReq.labels.data[0]?.attributes.shortTitle
          shortDescription = tagDataReq.labels.data[0]?.attributes.description
          description =
            tagDataReq.labels.data[0]?.attributes?.meta?.description;
          const { data: articlesData } = await client.query({
            query: getArticlesTag,
            variables: {
              slug: link,
              locale: locale
            },
          });
          articles = articlesData.articles.data.map((item: any) => ({
            ...item.attributes,
          }));
        }
      }
    }

    dispatch(dataReducer.actions.changeTitle(title));
    dispatch(dataReducer.actions.changeCategoryTitle(categoryTitle));
    dispatch(dataReducer.actions.changeDescription(description));
    dispatch(dataReducer.actions.changeArticles(articles));
    dispatch(dataReducer.actions.changeType(type));
    dispatch(dataReducer.actions.changeShortTitle(shortTitle));
    dispatch(dataReducer.actions.changeShortDescription(shortDescription));

  };

export const fetchCategoryOrArticles =
  (link: string, locale: string): AppThunk =>
  async (dispatch) => {
    let articles = [],
      articleBase = {},
      dataTitle = "Blog",
      categoryTitle = "Blog",
      dataDescription = "Blog",
      shortTitle = "",
      shortDescription = "",
      type = "blog";

    if (link === "blog" || link === "tags") {
      if(link === 'blog') {
        dataTitle = 'Blog',
        categoryTitle = 'Blog',
        dataDescription = 'Blog',
        type = 'blog'
      }else{
        dataTitle = 'Štítky',
        categoryTitle = 'Štítky',
        dataDescription = 'Štítky',
        type = 'tag'
      }
      const { data: articleData } = await client.query({
        query: getAllArticles,
        variables: {
          locale: locale
        }
      });

      articles = articleData.articles.data.map((item: any) => ({
        ...item.attributes,
      }));
    } else {
      const { data: categoryDataReq } = await client.query({
        query: getCategory,
        variables: {
          slug: link,
          locale: locale
        },
      });
      if (categoryDataReq.categories.data.length) {

        dataTitle = categoryDataReq.categories.data[0]?.attributes.meta.title;
        categoryTitle = categoryDataReq.categories.data[0]?.attributes.title;
        dataDescription = categoryDataReq.categories.data[0]?.attributes.meta.description;
        shortTitle = categoryDataReq.categories.data[0]?.attributes.shortTitle
        shortDescription = categoryDataReq.categories.data[0]?.attributes.description

        const { data: articlesData } = await client.query({
          query: getArticlesCategory,
          variables: {
            slug: link,
            locale: locale
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
            locale: locale
          },
        });
        if (tagDataReq.labels.data.length) {

          type = "tag";
          dataTitle = tagDataReq.labels.data[0]?.attributes?.meta?.title || tagDataReq.labels.data[0]?.attributes.title;
          categoryTitle = tagDataReq.labels.data[0]?.attributes?.title;
          dataDescription = tagDataReq.labels.data[0]?.attributes?.meta?.description || "";
          shortTitle = tagDataReq.labels.data[0]?.attributes.shortTitle
          shortDescription = tagDataReq.labels.data[0]?.attributes.description

          const { data: articlesData } = await client.query({
            query: getArticlesTag,
            variables: {
              slug: link,
              locale: locale
            },
          });
          articles = articlesData.articles.data.map((item: any) => ({...item.attributes}));
        } else {
          const { data: articleBaseReq } = await client.query({
            query: getArticleBase,
            variables: {
              slug: link,
              locale: locale
            },
          });
          articleBase = articleBaseReq.articlesBase.data[0]?.attributes;
          dataTitle = articleBaseReq.articlesBase.data[0]?.attributes?.meta?.title || articleBaseReq.articlesBase?.data[0]?.attributes?.title
          dataDescription = articleBaseReq.articlesBase.data[0]?.attributes?.meta?.description || ""
        }
      }
    }

    dispatch(dataReducer.actions.changeType(type));
    dispatch(dataReducer.actions.changeCategoryTitle(categoryTitle));
    dispatch(dataReducer.actions.changeTitle(dataTitle));
    dispatch(dataReducer.actions.changeDescription(dataDescription));
    dispatch(dataReducer.actions.changeArticles(articles));
    dispatch(dataReducer.actions.changeArticleBase(articleBase));

    dispatch(dataReducer.actions.changeShortTitle(shortTitle));
    dispatch(dataReducer.actions.changeShortDescription(shortDescription));
  };
