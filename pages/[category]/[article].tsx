import {getArticle} from '../../queries/articles';
import { client } from '../../lib/api'
import { NextPage } from 'next'
import Article from 'views/Article';
// import { DataStateContext } from '../../context/dataStateContext'
// import getBaners from '../../queries/baners'


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

  // const { data: banersData } = await client.query({
  //   query: getBaners,
  //   variables: {
  //     query: [
  //       { position: {eq: "Post"} }
  //     ]
  //   }
  // });
  // const baners = banersData.baners.data.map((item: any) => item.attributes)
  // const baner = baners[Math.floor(Math.random() * baners.length)]

  if(!data.articles.data.length) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      article: data.articles.data[0].attributes,
      // baner: baner || null
    }
  }
}

const ArticlePage: NextPage = ({
  // @ts-ignore
  article, 
  // baner
}) => {

  return <Article article={article} />
}

export default ArticlePage
