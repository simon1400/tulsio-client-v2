import type { UseHitsProps } from 'react-instantsearch'

import DictionaryHits from 'components/DictionaryHits'
import NotResult from 'components/NotResult'
import { useHits } from 'react-instantsearch'
import { Container, Typography } from '@mui/material'

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
  const limitedHits = hits.slice(0, 4);
  const groupedData = groupByFirstLetter(limitedHits);
  
  return (
    <>
    <Container>
      <Typography
        variant={'h2'}
        style={{ marginBottom: '40px' }}
        >Slovník: {limitedHits.length} výsledky</Typography>
    </Container>
      <DictionaryHits data={groupedData} />
    </>)

}

export default ResultDictionary