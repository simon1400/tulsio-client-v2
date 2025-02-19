import type { UseHitsProps } from 'react-instantsearch'

import Articles from 'components/Articles'
import NotResult from 'components/NotResult'
import { useHits } from 'react-instantsearch'
import { Container, Typography } from '@mui/material'
import ResultDictionary from 'components/ResultDictionary'

const ResultArticles = (props: UseHitsProps & { query: string }) => {
  const { hits } = useHits(props)
  const limitedHits = hits.slice(0, 15);

  if (limitedHits.length === 0) {
    return <NotResult/>
  }

  return (
    <><Container>
        {props.query && (
        <Typography variant="h2" style={{ marginBottom: '40px' }}>
          Články ({limitedHits.length})
        </Typography>)}
      </Container>
      <Articles data={limitedHits} searchResult />
    </>)
}

export default ResultArticles
