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

const meilisearchPrefix = process.env.MEILISEARCH_PREFIX

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ locale }) => {
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

  return {
    props: {
      faq: faqData,
      allFaq: allFaq.faqs.data.map((item: any) => ({ ...item.attributes })),
    },
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
  return (
    <Page>
      <Container maxWidth={'md'}>
        <PageHead title={faq.title} />
        <InstantSearch
          indexName={`${meilisearchPrefix}faq`}
          searchClient={searchClient.searchClient}
        >
          {/* <Configure hitsPerPage={50} /> */}
          <SearchBox placeholder={'Hledat dotaz...'} />
          <FaqHits allFaq={allFaq} />
        </InstantSearch>
      </Container>
    </Page>
  )
}

export default Faq
