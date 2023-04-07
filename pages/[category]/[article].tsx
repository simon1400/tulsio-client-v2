import {getArticle} from '../../queries/articles';
import { client } from '../../lib/api'
import { NextPage } from 'next'
import Article from 'views/Article';
import { wrapper } from 'stores';
import { changeDescription, changeTitle } from 'stores/slices/dataSlices';

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  async ({params}) => {

  if(!params?.article || params?.category !== 'blog') {
    return {
      notFound: true
    }
  }

  const { data, error } = await client.query({
    query: getArticle,
    variables: {
      slug: params.article
    }
  });

  if(!data.articles.data.length) {
    return {
      notFound: true
    }
  }

  const article = data.articles.data[0].attributes

  store.dispatch(changeTitle(article.meta?.title || article.title))
  store.dispatch(changeDescription(article.meta?.description || ""))

  return {
    props: {
      article: article
    }
  }
})

const ArticlePage: NextPage = ({
  // @ts-ignore
  article, 
}) => {
  return <Article article={article} />
}

export default ArticlePage
