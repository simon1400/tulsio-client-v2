import type { UseHitsProps } from 'react-instantsearch'

import Articles from 'components/Articles'
import NotResult from 'components/NotResult'
import { useHits } from 'react-instantsearch'

const ResultArticles = (props: UseHitsProps) => {
  const { hits } = useHits(props)

  if (!hits.length) {
    return <NotResult />
  } else {
    return <Articles data={hits} searchResult />
  }
}

export default ResultArticles
