import type { UseHitsProps } from 'react-instantsearch'

import { Container, debounce } from '@mui/material'
import NotResult from 'components/NotResult'
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
import { useRef, useState } from 'react'
import { Configure, Index, InstantSearch } from 'react-instantsearch'
import { wrapper } from 'stores'

const DOMAIN = process.env.APP_DOMAIN
const meilisearchPrefix = process.env.MEILISEARCH_PREFIX

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ locale }) => {
  const { data: headerData } = await client.query({
    query: navHeader,
    variables: {
      locale,
    },
  })

  const { data: footerData } = await client.query({
    query: navFooter,
    variables: {
      locale,
    },
  })

  const { data: newsletterData } = await client.query({
    query: globalQuery,
    variables: {
      locale,
    },
  })

  return {
    props: {
      headerData,
      footerData,
      newsletterData,
    },
  }
})

const SearchPage = (props: UseHitsProps) => {
  const router = useRouter()
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const onSearch = (query: any) => {
    setSearchQuery(query)
    setIsSearching(query.length >= 3)
  }
  const [debouncedResults, setDebouncedResults] = useState<boolean | null>(null)

  const lastNoResults = useRef<{ noResults1: boolean | null; noResults2: boolean | null }>({
    noResults1: null,
    noResults2: null,
  })

  const handleDebouncedResults = debounce(() => {
    const combinedNoResults = lastNoResults.current.noResults1 && lastNoResults.current.noResults2
    setDebouncedResults(combinedNoResults)
  }, 300)

  const handleResults1 = (results: any[]) => {
    lastNoResults.current.noResults1 = results.length === 0
    handleDebouncedResults()
  }

  const handleResults2 = (results: any[]) => {
    lastNoResults.current.noResults2 = results.length === 0
    handleDebouncedResults()
  }

  const showNoResults = debouncedResults

  return (
    <Page>
      <InstantSearch routing searchClient={searchClient.searchClient}>
        <Configure hitsPerPage={50} />

        <Head>
          <link rel={'alternate'} hrefLang={'cs'} href={`${DOMAIN}/cs${router.asPath}`} />
        </Head>

        <PageHead title={'Vyhledávání'} />

        <Container>
          <SearchBox placeholder={'Zadejte hledaný text...'} onSearch={onSearch} />
        </Container>

        <Index indexName={'dictionary'}>
          {isSearching && <ResultDictionary query={searchQuery} onResults={handleResults1} />}
        </Index>
        <Index indexName={`${meilisearchPrefix}article`}>
          <ResultArticles query={searchQuery} onResults={handleResults2} />
        </Index>
        {showNoResults && <NotResult />}
      </InstantSearch>
    </Page>
  )
}

export default SearchPage
