import {useRouter} from 'next/router'
import { NextPage } from 'next'
import {Configure, InstantSearch} from 'react-instantsearch-hooks-web'
import searchClient from "../lib/meilisearch";
import { client } from '../lib/api'
import getFaq from '../queries/faq'
import PageHead from 'components/PageHead';
import FaqHits from 'components/FaqHits';
import SearchBox from 'components/SearchBox';
import { Container } from '@mui/material';
import Head from 'next/head';
import Page from 'layout/Page';
import { wrapper } from 'stores';
import { changeDescription, changeTitle } from 'stores/slices/dataSlices';

const DOMAIN = process.env.APP_DOMAIN;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  async () => {
  
    const { data } = await client.query({query: getFaq});

    const faqData = data.faqPage.data.attributes

    store.dispatch(changeTitle(faqData.meta?.title || faqData.title))
    store.dispatch(changeDescription(faqData.meta?.description || ""))

    return {
      props: {
        faq: faqData
      }
    }
  }
)

const Faq: NextPage = ({
  // @ts-ignore
  faq
}) => {  

  const router = useRouter()

  return (
    <Page>
      <InstantSearch 
        indexName="faq" 
        searchClient={searchClient}
      >

        <Configure hitsPerPage={50} />

        <Head>
          <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
        </Head>
        
        <Container maxWidth="md">
          <PageHead title={faq.title} />
          <SearchBox placeholder="Hledat dotaz..." />
        </Container>
        
        <FaqHits transformItems={(items) => {
          return items.sort((a: any, b: any) => {
            if (a.rank < b.rank) {
              return -1;
            }
            if (a.rank > b.rank) {
              return 1;
            }

            return 0
          })
        }} />
          
      </InstantSearch>
    </Page>
  )
}

export default Faq
