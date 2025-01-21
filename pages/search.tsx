import { Container } from '@mui/material'
import PageHead from 'components/PageHead'
import ResultArticles from 'components/ResultArticles'
import SearchBox from 'components/SearchBox'
import Page from 'layout/Page'
import { client } from 'lib/api'
import searchClient from 'lib/meilisearch'
import Head from 'next/head'
import { useRouter } from 'next/router'
import globalQuery from 'queries/global'
import navFooter from 'queries/navFooter'
import navHeader from 'queries/navHeader'
import { Configure, InstantSearch } from 'react-instantsearch'
import { wrapper } from 'stores'

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

const SearchPage = () => {
  const router = useRouter()

  return (
    <Page>
      <InstantSearch indexName={indexName} routing={true} searchClient={searchClient.searchClient}>
        <Configure hitsPerPage={50} />

        <Head>
          <link rel={'alternate'} hrefLang={'cs'} href={`${DOMAIN}/cs${router.asPath}`} />
        </Head>

        <PageHead title={'Vyhledávání'} />

        <Container>
          <SearchBox placeholder={'Zadejte hledaný text...'} />
        </Container>

        <ResultArticles />
      </InstantSearch>
    </Page>
  )
}

export default SearchPage
