import type { NextPage } from 'next'

import { Container } from '@mui/material'
import FaqHits from 'components/FaqHits'
import PageHead from 'components/PageHead'
import SearchBox from 'components/SearchBox'
import Page from 'layout/Page'
import { Configure, InstantSearch } from 'react-instantsearch'
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

const Faq: NextPage = ({
  // @ts-expect-error: some problem
  faq,
  // @ts-expect-error: some problem
  allFaq,
}) => {
  return (
    <Page>
      <InstantSearch indexName={`${meilisearchPrefix}faq`} searchClient={searchClient.searchClient}>
        <Configure hitsPerPage={50} />

        <Container maxWidth={'md'}>
          <PageHead title={faq.title} />
          <SearchBox placeholder={'Hledat dotaz...'} />
        </Container>

        <FaqHits allFaq={allFaq} />
      </InstantSearch>
    </Page>
  )
}

export default Faq
