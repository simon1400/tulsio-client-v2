import { Container } from '@mui/material'
import PageHead from 'components/PageHead'
import ResultArticles from 'components/ResultArticles'
import ResultDictionary from 'components/ResultDictionary'
import SearchBox from 'components/SearchBox'
import Page from 'layout/Page'
import { client } from 'lib/api'
import searchClient from 'lib/meilisearch'
import Head from 'next/head'
import { useRouter } from 'next/router'
import globalQuery from 'queries/global'
import navFooter from 'queries/navFooter'
import navHeader from 'queries/navHeader'
import { Configure, InstantSearch, Index, useSearchBox, UseHitsProps, Hits } from 'react-instantsearch'
import { wrapper } from 'stores'
import { useEffect, useState } from 'react'
import NotResult from 'components/NotResult'

const DOMAIN = process.env.APP_DOMAIN
const meilisearchPrefix = process.env.MEILISEARCH_PREFIX

const indexName = `${meilisearchPrefix}article`

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ locale }) => {
  

  const { data: headerData } = await client.query({query: navHeader, 
    variables: {
      locale: locale,
    },}
  )

  const { data: footerData } = await client.query({query: navFooter,
    variables: {
      locale: locale,
    },
  })

  const { data: newsletterData } = await client.query({query: globalQuery, 
    variables: {
      locale: locale,
    },
  })

  return {
    props: {
      headerData,
      footerData,
      newsletterData
    },
  }
})

const SearchPage = (props: UseHitsProps) => {
  const router = useRouter()
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const onSearch = (query: any) => {
    setSearchQuery(query)
    setIsSearching(query.length >= 3)
  }
  const [noResults1, setNoResults1] = useState<boolean | null>(null); 
  const [noResults2, setNoResults2] = useState<boolean | null>(null); 
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [debouncedResults, setDebouncedResults] = useState<boolean | null>(null);

  const handleResults1 = (results: any[]) => {
    setNoResults1(results.length === 0);
  };

  const handleResults2 = (results: any[]) => {
    setNoResults2(results.length === 0);
  };

  useEffect(() => {
    if (noResults1 !== null && noResults2 !== null) {
      const timer = setTimeout(() => {
        setLoadingComplete(true);
        setDebouncedResults(noResults1 && noResults2); 
      }, 300); 

      return () => clearTimeout(timer); 
    }
  }, [noResults1, noResults2]);

  const shouldShowNoResults = loadingComplete && debouncedResults;


  return (
    <Page>
      <InstantSearch routing={true} searchClient={searchClient.searchClient}>
        <Configure hitsPerPage={50} />

        <Head>
          <link rel={'alternate'} hrefLang={'cs'} href={`${DOMAIN}/cs${router.asPath}`} />
        </Head>

        <PageHead title={'Vyhledávání'} />

        <Container>
          <SearchBox placeholder={'Zadejte hledaný text...'} onSearch={onSearch} />
          
        </Container>

        <Index indexName="dictionary">
          {isSearching && <ResultDictionary query={searchQuery} onResults={handleResults1}/>}
        </Index>
        <Index indexName={`${meilisearchPrefix}article`}>
          <ResultArticles query={searchQuery} onResults={handleResults2}/>
        </Index>
        {shouldShowNoResults && <p>No Results Found</p>}

      {!loadingComplete && <p>Loading...</p>}
      {/*  */}
      </InstantSearch>
    </Page>
  )
}

export default SearchPage
