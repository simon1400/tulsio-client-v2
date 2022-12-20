import {useRouter} from 'next/router'
import Head from 'next/head'
import PageHead from '../../components/PageHead'
import { NextPage } from 'next'
import {InstantSearch} from 'react-instantsearch-hooks-web'
import searchClient from "../../lib/meilisearch";
import InfiniteArticles from '../../components/InfiniteArticles'
import { useEffect, useState } from 'react'
import axios from 'axios'
import qs from 'qs'

const APP_API = process.env.APP_API;
const DOMAIN = process.env.APP_DOMAIN;

const controlQs = (router: any) => {
  return qs.stringify({
    filters: {
      slug: {
        $eq: router.query.category,
      }
    },
    fields: ['slug']
  })
}

export async function getServerSideProps(context: any) {

  if(!context.query.category) {
    return {
      notFound: true
    }
  }

  const res = await axios.get(`${APP_API}/api/categories?${controlQs(context)}`)

  if(!res.data.data.length && context.query.category !== 'blog') {
    return {
      notFound: true
    }
  }

  return {
    props: {}
  }
}

const Category: NextPage = () => {

  const router = useRouter()

  const [title, setTitle] = useState('Blog')
  const [description, setDescription] = useState('')

  useEffect(() => {
    return () => {
      setTitle('Blog')
    }
  }, [])

  return (
    <InstantSearch 
      indexName="article"
      searchClient={searchClient}
    >
        <Head>
          <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
        </Head>
        
        <PageHead 
          title={title}
          setTitle={setTitle}
          setDescription={setDescription}
          category />
          
        <InfiniteArticles />
        
    </InstantSearch>
  )
}

export default Category
