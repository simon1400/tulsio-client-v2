import { Container } from "@mui/material"
import PageHead from "components/PageHead"
import ResultArticles from "components/ResultArticles"
import SearchBox from "components/SearchBox"
import searchClient from "lib/meilisearch"
import Head from "next/head"
import { useRouter } from "next/router"
import { Configure, InstantSearch } from "react-instantsearch-hooks-web"

const DOMAIN = process.env.APP_DOMAIN;

const SearchPage = () => {

  const router = useRouter()

  return (
    <InstantSearch 
      indexName="article" 
      searchClient={searchClient}
    >

      <Configure hitsPerPage={50} />

      <Head>
        <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
      </Head>
      
      <PageHead prefix={"Hledat"} title={"Some Result"} />

      <Container>
        <SearchBox />
      </Container>
      
      <ResultArticles />
        
    </InstantSearch>
  )
}

export default SearchPage