import { client } from 'lib/api';
import {
  getAllArticles,
  getArticleBase,
  getArticlesCategory,
  getArticlesTag,
} from 'queries/articles';
import { getCategory } from 'queries/category';
import { getTag } from 'queries/tags';
import { FetchResult } from './dataFetch';

// 🔹 Univerzální funkce pro načítání dat
export const fetchDataByType = async (link: string, locale: string): Promise<FetchResult> => {
  let type: 'blog' | 'tag' = link === 'tags' ? 'tag' : 'blog';

  const defaultMeta = {
    title: link === 'tags' ? 'Štítky' : 'Blog',
    description: link === 'tags' ? 'Štítky' : 'Blog',
  };

  let title = defaultMeta.title;
  let categoryTitle = defaultMeta.title;
  let description = defaultMeta.description;
  let shortTitle = '';
  let shortDescription = '';
  let articles: any[] = [];
  let articleBase = {};

  if (link === 'blog' || link === 'tags') {
    const { data: articleData } = await client.query({
      query: getAllArticles,
      variables: { locale },
    });

    articles = articleData?.articles?.data?.map((item: any) => item.attributes) || [];
  } else {
    // 🔹 Zkontrolujeme, zda existuje kategorie
    const { data: categoryDataReq } = await client.query({
      query: getCategory,
      variables: { slug: link, locale },
    });

    if (categoryDataReq?.categories?.data?.length > 0) {
      const category = categoryDataReq.categories.data[0]?.attributes;
      title = category?.meta?.title || '';
      categoryTitle = category?.title || '';
      description = category?.meta?.description || '';
      shortTitle = category?.shortTitle || '';
      shortDescription = category?.description || '';

      const { data: articlesData } = await client.query({
        query: getArticlesCategory,
        variables: { slug: link, locale },
      });

      articles = articlesData?.articles?.data?.map((item: any) => item.attributes) || [];
    } else {
      // 🔹 Pokud kategorie neexistuje, zkusíme získat štítek
      const { data: tagDataReq } = await client.query({
        query: getTag,
        variables: { slug: link, locale },
      });

      if (tagDataReq?.labels?.data?.length > 0) {
        const tag = tagDataReq.labels.data[0]?.attributes;
        type = 'tag';
        title = tag?.meta?.title || tag?.title || '';
        categoryTitle = tag?.title || '';
        description = tag?.meta?.description || '';
        shortTitle = tag?.shortTitle || '';
        shortDescription = tag?.description || '';

        const { data: articlesData } = await client.query({
          query: getArticlesTag,
          variables: { slug: link, locale },
        });

        articles = articlesData?.articles?.data?.map((item: any) => item.attributes) || [];
      } else {
        // 🔹 Pokud neexistuje ani kategorie, ani štítek, získáme článek
        const { data: articleBaseReq } = await client.query({
          query: getArticleBase,
          variables: { slug: link, locale },
        });

        const base = articleBaseReq?.articlesBase?.data?.[0]?.attributes;
        articleBase = base || {};
        title = base?.meta?.title || base?.title || '';
        description = base?.meta?.description || '';
      }
    }
  }

  return { title, categoryTitle, description, shortTitle, shortDescription, articles, articleBase, type };
};