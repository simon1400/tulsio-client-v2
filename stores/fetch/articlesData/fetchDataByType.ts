import type { FetchResult } from './dataFetch'

import { client } from 'lib/api'
import {
  getAllArticles,
  getArticleBase,
  getArticlesCategory,
  getArticlesTag,
} from 'queries/articles'
import { blogpageQuery, tagpageQuery } from 'queries/blogpage'
import { getCategory } from 'queries/category'
import { getTag } from 'queries/tags'

// 🔹 Функция загрузки данных для "blog" и "tags"
const fetchBlogOrTagsData = async (link: string, locale: string): Promise<FetchResult> => {
  const isTags = link === 'tags'
  const query = isTags ? tagpageQuery : blogpageQuery

  const { data: pageData } = await client.query({ query })
  const page = isTags ? pageData.tagsPage : pageData.blogPage

  const { data: articleData } = await client.query({
    query: getAllArticles,
    variables: { locale },
  })

  return {
    title: page.data.attributes.meta.title,
    categoryTitle: page.data.attributes.title,
    description: page.data.attributes.meta.description,
    shortTitle: '',
    shortDescription: '',
    articles: articleData?.articles?.data?.map((item: any) => item.attributes) || [],
    articleBase: {},
    type: isTags ? 'tag' : 'blog',
  }
}

// 🔹 Функция загрузки данных категории
const fetchCategoryData = async (link: string, locale: string): Promise<FetchResult | null> => {
  const { data: categoryDataReq } = await client.query({
    query: getCategory,
    variables: { slug: link, locale },
  })

  if (categoryDataReq?.categories?.data?.length === 0) return null

  const category = categoryDataReq.categories.data[0]?.attributes

  const { data: articlesData } = await client.query({
    query: getArticlesCategory,
    variables: { slug: link, locale },
  })

  return {
    title: category?.meta?.title || '',
    categoryTitle: category?.title || '',
    description: category?.meta?.description || '',
    shortTitle: category?.shortTitle || '',
    shortDescription: category?.description || '',
    articles: articlesData?.articles?.data?.map((item: any) => item.attributes) || [],
    articleBase: {},
    type: 'blog',
  }
}

// 🔹 Функция загрузки данных тега
const fetchTagData = async (link: string, locale: string): Promise<FetchResult | null> => {
  const { data: tagDataReq } = await client.query({
    query: getTag,
    variables: { slug: link, locale },
  })

  if (tagDataReq?.labels?.data?.length === 0) return null

  const tag = tagDataReq.labels.data[0]?.attributes

  const { data: articlesData } = await client.query({
    query: getArticlesTag,
    variables: { slug: link, locale },
  })

  return {
    title: tag?.meta?.title || tag?.title || '',
    categoryTitle: tag?.title || '',
    description: tag?.meta?.description || '',
    shortTitle: tag?.shortTitle || '',
    shortDescription: tag?.description || '',
    articles: articlesData?.articles?.data?.map((item: any) => item.attributes) || [],
    articleBase: {},
    type: 'tag',
  }
}

// 🔹 Функция загрузки базовой информации о статье
const fetchArticleBase = async (link: string, locale: string): Promise<FetchResult> => {
  const { data: articleBaseReq } = await client.query({
    query: getArticleBase,
    variables: { slug: link, locale },
  })

  const base = articleBaseReq?.articlesBase?.data?.[0]?.attributes || {}

  return {
    title: base?.meta?.title || base?.title || '',
    categoryTitle: '',
    description: base?.meta?.description || '',
    shortTitle: '',
    shortDescription: '',
    articles: [],
    articleBase: base,
    type: 'blog',
  }
}

// 🔹 Основная функция
export const fetchDataByType = async (link: string, locale: string): Promise<FetchResult> => {
  if (link === 'blog' || link === 'tags') {
    return await fetchBlogOrTagsData(link, locale)
  }

  const categoryData = await fetchCategoryData(link, locale)
  if (categoryData) return categoryData

  const tagData = await fetchTagData(link, locale)
  if (tagData) return tagData

  return await fetchArticleBase(link, locale)
}
