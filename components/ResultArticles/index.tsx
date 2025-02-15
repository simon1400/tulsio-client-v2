import type { UseHitsProps } from 'react-instantsearch'

import Articles from 'components/Articles'
import NotResult from 'components/NotResult'
import { useHits } from 'react-instantsearch'
import { Container, Typography } from '@mui/material'
import ResultDictionary from 'components/ResultDictionary'

const ResultArticles = (props: UseHitsProps) => {
  const { hits } = useHits(props)
  const limitedHits = hits.slice(0, 15);

  if (!hits.length && ResultDictionary == null){
    return <NotResult />
  } else {
    return (
      <><Container>
          <Typography
            variant={'h2'}
            style={{ marginBottom: '40px' }}
            >Články: {limitedHits.length} výsledky</Typography>
        </Container>
        <Articles data={limitedHits} searchResult />
      </>)
  }
}

export default ResultArticles
