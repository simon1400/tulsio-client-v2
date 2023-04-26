import { Container } from "@mui/material"
import PageHead from "components/PageHead"
import ResultArticles from "components/ResultArticles"
import SearchBox from "components/SearchBox"
import Page from "layout/Page"
import searchClient from "lib/meilisearch"
import Head from "next/head"
import { useRouter } from "next/router"
import { Configure, InstantSearch } from "react-instantsearch-hooks-web"
import { history } from 'instantsearch.js/es/lib/routers';

const DOMAIN = process.env.APP_DOMAIN;
const meilisearchPrefix = process.env.MEILISEARCH_PREFIX

const indexName = meilisearchPrefix+"article";

const SearchPage = () => {

  const router = useRouter()

  return (
    <Page>
      <InstantSearch 
        indexName={indexName}
        routing={true} 
        searchClient={searchClient}
      >

        <Configure hitsPerPage={50} />

        <Head>
          <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
        </Head>
        
        <PageHead title="Vyhledávání" />

        <Container>
          <SearchBox placeholder="Zadejte hledaný text..." />
        </Container>
        
        <ResultArticles />
          
      </InstantSearch>
    </Page>
  )
}

export default SearchPage