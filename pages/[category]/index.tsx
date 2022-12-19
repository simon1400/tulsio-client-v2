import {useRouter} from 'next/router'
import Head from 'next/head'
import PageHead from '../../components/PageHead'
import { NextPage } from 'next'
import {InstantSearch} from 'react-instantsearch-hooks-web'
import searchClient from "../../lib/meilisearch";
import InfiniteArticles from '../../components/InfiniteArticles'
import { useEffect, useState } from 'react'

const DOMAIN = process.env.APP_DOMAIN;

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
