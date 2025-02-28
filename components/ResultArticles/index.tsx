import type { UseHitsProps } from 'react-instantsearch'

import { Container, Typography } from '@mui/material'
import Articles from 'components/Articles'
import { useEffect } from 'react'
import { useHits } from 'react-instantsearch'

const ResultArticles = (props: UseHitsProps & { query: string; onResults: any }) => {
  const { hits } = useHits(props)
  const limitedHits = hits.slice(0, 15)

  useEffect(() => {
    props.onResults(limitedHits)
  }, [limitedHits, props, props.onResults])

  if (limitedHits.length === 0) {
    return null
  }

  return (
    <>
      <Container>
        {props.query && (
          <Typography variant={'h2'} style={{ marginBottom: '40px' }}>
            {'Články ('}
            {limitedHits.length}
            {')'}
          </Typography>
        )}
      </Container>
      <Articles data={limitedHits} searchResult />
    </>
  )
}

export default ResultArticles
