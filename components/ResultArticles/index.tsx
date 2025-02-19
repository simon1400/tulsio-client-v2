import type { UseHitsProps } from 'react-instantsearch'

import Articles from 'components/Articles'
import NotResult from 'components/NotResult'
import { useHits } from 'react-instantsearch'
import { Container, Typography } from '@mui/material'
import ResultDictionary from 'components/ResultDictionary'
import { useEffect } from 'react'

const ResultArticles = (props: UseHitsProps & { query: string, onResults: any  }) => {
  const { hits } = useHits(props)
  const limitedHits = hits.slice(0, 15);

  useEffect(() => {
    props.onResults(limitedHits); 
  }, [limitedHits, props.onResults]);
  
  if (limitedHits.length === 0)  {
    return null
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
