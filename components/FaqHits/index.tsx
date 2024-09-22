import type { IFaqItem } from 'pages/faq'
import type { UseHitsProps } from 'react-instantsearch'

import { Container } from '@mui/material'
import FaqItem from 'components/FaqItem'
import NotResult from 'components/NotResult'
import { useHits, useSearchBox } from 'react-instantsearch'

import { FaqHitsS } from './styles'

const transformItems = (items: any) =>
  items.sort((a: any, b: any) => {
    if (+a.rank < +b.rank) return -1
    if (+a.rank > +b.rank) return 1
    return 0
  })

interface FaqHitsProps extends UseHitsProps {
  allFaq: IFaqItem[]
}

const FaqHits = (props: FaqHitsProps) => {
  const { items } = useHits({
    ...props,
    transformItems,
  })

  const { query } = useSearchBox()

  return (
    <Container maxWidth={'md'}>
      <FaqHitsS>
        {!items.length && query.length >= 3 && <NotResult />}
        {items.length
          ? items.map((item: any) => <FaqItem key={item.title} data={item} />)
          : query.length < 3
            ? props.allFaq.map((item: IFaqItem) => <FaqItem key={item.title} data={item} />)
            : null}
      </FaqHitsS>
    </Container>
  )
}

export default FaqHits
