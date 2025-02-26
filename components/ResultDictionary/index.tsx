import type { UseHitsProps } from 'react-instantsearch'

import { Container, Typography } from '@mui/material'
import DictionaryHits from 'components/DictionaryHits'
import { useEffect } from 'react'
import { useHits } from 'react-instantsearch'

const group = (items: any[]) => {
  return { all: items }
}

const ResultDictionary = (props: UseHitsProps & { query: string; onResults: any }) => {
  const { hits } = useHits(props)
  const limitedHits = hits.slice(0, 4)
  const groupedData = group(limitedHits)

  useEffect(() => {
    props.onResults(limitedHits)
  }, [limitedHits, props, props.onResults])

  if (limitedHits.length === 0) {
    return null
  }

  return (
    <>
      <Container>
        <Typography variant={'h2'} style={{ marginBottom: '40px' }}>
          {'Slovník ('}
          {limitedHits.length}
          {')'}
        </Typography>
      </Container>
      <DictionaryHits data={groupedData} />
    </>
  )
}

export default ResultDictionary
