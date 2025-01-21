import type { NextPage } from 'next'

import { Container } from '@mui/material'
import FaqHits from 'components/FaqHits'
import PageHead from 'components/PageHead'
import SearchBox from 'components/SearchBox'
import Page from 'layout/Page'
import { InstantSearch } from 'react-instantsearch'
import { wrapper } from 'stores'
import { changeDescription, changeTitle } from 'stores/slices/dataSlices'
import { changeImage } from 'stores/slices/metaSlices'

import { client, getStrapiURL } from '../lib/api'
import searchClient from '../lib/meilisearch'
import { getAllFaqs, getFaq } from '../queries/faq'
import globalQuery from 'queries/global'
import navFooter from 'queries/navFooter'
import navHeader from 'queries/navHeader'

const meilisearchPrefix = process.env.MEILISEARCH_PREFIX || '' // fallback для переменной окружения

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ locale }) => {
  try {
    const { data } = await client.query({ query: getFaq, variables: { locale } })
    const { data: allFaq } = await client.query({ query: getAllFaqs, variables: { locale } })

    const faqData = data.faqPage.data.attributes

    store.dispatch(changeTitle(faqData.meta?.title || faqData.title))
    store.dispatch(changeDescription(faqData.meta?.description || ''))
    store.dispatch(
      changeImage(
        faqData.meta?.image.data ? getStrapiURL(faqData.meta.image.data.attributes.url) : '',
      ),
    )

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
        faq: faqData,
        allFaq: allFaq.faqs.data.map((item: any) => ({
          ...item.attributes,
        })),
        headerData,
        footerData,
        newsletterData
      },
    }
  } catch (error) {
    console.error('Error fetching FAQ data:', error)
    return {
      props: {
        faq: null,
        allFaq: [],
        headerData: null,
        footerData: null,
        newsletterData: null
      },
    }
  }
})

interface IFaqPage {
  faq: {
    title: string
  }
  allFaq: IFaqItem[]
}

export interface IFaqItem {
  answer: string
  title: string
}

const Faq: NextPage<IFaqPage> = ({ faq, allFaq }) => {
  if (!faq) {
    return (
      <Page>
        <Container maxWidth={'md'}>
          <PageHead title="FAQ not found" />
          <p>Sorry, the FAQ page is not available right now.</p>
        </Container>
      </Page>
    )
  }

  return (
    <Page>
      <Container maxWidth={'md'}>
        <PageHead title={faq.title} />
        <InstantSearch
          indexName={`${meilisearchPrefix}faq`}
          searchClient={searchClient.searchClient}
        >
          <SearchBox placeholder={'Hledat dotaz...'} />
          <FaqHits allFaq={allFaq} />
        </InstantSearch>
      </Container>
    </Page>
  )
}

export default Faq