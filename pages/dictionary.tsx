import type { NextPage } from 'next'

import { filterDictionaryData } from 'helpers/filterDictionaryData'
import { getSymbAndNum } from 'helpers/getSymbAndNum'
import Page from 'layout/Page'
import { wrapper } from 'stores'
import { changeDescription, changeTitle } from 'stores/slices/dataSlices'
import { changeImage } from 'stores/slices/metaSlices'

import DictionaryHead from '../components/DictionaryHead'
import DictionaryHits from '../components/DictionaryHits'
import { client, getStrapiURL } from '../lib/api'
import { getAllDictionaries, getDictionaryPage } from '../queries/dictionary'

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ locale }) => {
  const { data: dataPage } = await client.query({
    query: getDictionaryPage,
    variables: { locale },
  })
  const { data: allDictionaries } = await client.query({
    query: getAllDictionaries,
    variables: {
      locale,
    },
  })

  const transfromDictionaries = allDictionaries.dictionaries.data.map(
    (item: any) => item.attributes,
  )

  const page = dataPage.dictionaryPage.data.attributes

  store.dispatch(changeTitle(page.meta?.title || page.title))
  store.dispatch(changeDescription(page.meta?.description || ''))
  store.dispatch(
    changeImage(page.meta?.image.data ? getStrapiURL(page.meta.image.data.attributes.url) : ''),
  )

  const navFiltered: string[] = getSymbAndNum(transfromDictionaries)

  const data: any = filterDictionaryData(transfromDictionaries)

  return {
    props: {
      dictionaryPage: page,
      dictionaries: data,
      nav: navFiltered,
    },
  }
})

interface IDictionaryPage {
  title: string
}

interface IDictionary {
  dictionaryPage: IDictionaryPage
  dictionaries: any
  nav: string[]
}

const Dictionary: NextPage<IDictionary> = ({ dictionaryPage, dictionaries, nav }) => {
  return (
    <Page>
      <DictionaryHead title={dictionaryPage.title} data={nav} />
      <DictionaryHits data={dictionaries} />
    </Page>
  )
}

export default Dictionary
