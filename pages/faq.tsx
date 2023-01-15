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

const DOMAIN = process.env.APP_DOMAIN;

export async function getServerSideProps() {
  
  const { data } = await client.query({query: getFaq});

  return {
    props: {
      faq: data.faqPage.data.attributes
    }
  }
}

const Faq: NextPage = ({
  // @ts-ignore
  faq
}) => {  

  const router = useRouter()

  return (
    <InstantSearch 
      indexName="faq" 
      searchClient={searchClient}
    >

      <Configure hitsPerPage={50} />

      <Head>
        <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
      </Head>
      
      <PageHead title={faq.title} />

      <Container maxWidth="md">
        <SearchBox />
      </Container>
      
      <FaqHits />
        
    </InstantSearch>
  )
}

export default Faq
