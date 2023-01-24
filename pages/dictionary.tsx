import { NextPage } from 'next'
import DictionaryHits from '../components/DictionaryHits'
import DictionaryHead from '../components/DictionaryHead'
import { client } from '../lib/api'
import {getDictionaryPage, getAllDictionaries} from '../queries/dictionary'
import Head from 'next/head';
import { useRouter } from 'next/router';
import alphabets from 'data/alphabets';
import numbers from 'data/numbers';
import Page from 'layout/Page'

const DOMAIN = process.env.APP_DOMAIN;

export async function getServerSideProps() {
  
  const { data: dataPage } = await client.query({query: getDictionaryPage});
  const { data: allDictionaries } = await client.query({query: getAllDictionaries});

  const transfromDictionaries = allDictionaries.dictionaries.data.map((item: any) => item.attributes)

  const result: string[] = []
  alphabets.map(symbol => {
    const filtered = transfromDictionaries.filter((f: any) => f.title.toUpperCase().startsWith(symbol))
    if(filtered.length) {
      result.push(symbol)
    }
  })
  for(var i = 0; i < numbers.length; i++) {
    const filtered = transfromDictionaries.filter((f: any) => f.title.startsWith(numbers[i]))
    if(filtered.length) {
      result.push('0-9')
      break;
    }
  }

  const resultData: any = {}
  alphabets.map(symbol => {
    const filtered = transfromDictionaries.filter((f: any) => f.title.toUpperCase().startsWith(symbol))
    if(filtered.length) {
      filtered.sort((a: any, b: any) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
      resultData[symbol] = filtered
    }
  })
  numbers.map(number => {
    const filtered = transfromDictionaries.filter((f: any) => f.title.startsWith(number))
    if(filtered.length) {
      filtered.sort((a: any, b: any) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
      resultData['0-9'] = filtered
    }
  })

  return {
    props: {
      dictionaryPage: dataPage.dictionaryPage.data.attributes,
      dictionaries: resultData,
      nav: result
    }
  }
}

interface IDictionaryPage {
  title: string;
}

interface IDictionaries{
  title: string;
}

interface IDictionary {
  dictionaryPage: IDictionaryPage;
  dictionaries: any;
  nav: any
}

const Dictionary: NextPage<IDictionary> = ({
  dictionaryPage, 
  dictionaries,
  nav
}) => {

  const router = useRouter()

  return (
    <Page>
      <Head>
        <link rel="alternate" hrefLang="cs" href={`${DOMAIN}/cs${router.asPath}`} />
      </Head>

      <DictionaryHead title={dictionaryPage.title} data={nav} />

      <DictionaryHits data={dictionaries} />
        
    </Page>
  )
}

export default Dictionary
