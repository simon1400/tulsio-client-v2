import type { UseHitsProps } from 'react-instantsearch'

import DictionaryHits from 'components/DictionaryHits'
import NotResult from 'components/NotResult'
import { useHits } from 'react-instantsearch'

const groupByFirstLetter = (items: any[]) => {
  return items.reduce((acc, item) => {
    const letter = item.title?.charAt(0).toUpperCase() || "#"
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(item)
    return acc
  }, {})
}

const ResultDictionary = (props: UseHitsProps) => {
  const { hits } = useHits(props)

  if (!hits.length) {
    return <NotResult />
  } else {
    const groupedData = groupByFirstLetter(hits)
    return <DictionaryHits data={groupedData} />
  }
}

export default ResultDictionary