import {getArticle} from '../../queries/articles';
import { client } from '../../lib/api'
import { NextPage } from 'next'
import Article from 'views/Article';

export async function getServerSideProps(context: any) {

  if(!context.query.article) {
    return {
      notFound: true
    }
  }

  const { data } = await client.query({
    query: getArticle,
    variables: {
      slug: context.query.article
    }
  });

  if(!data.articles.data.length) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      article: data.articles.data[0].attributes
    }
  }
}

const ArticlePage: NextPage = ({
  // @ts-ignore
  article, 
}) => {
  return <Article article={article} />
}

export default ArticlePage
