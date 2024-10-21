import type { FC } from 'react'

import StarIcon from '@mui/icons-material/Star'
import { Rating } from '@mui/material'

import { RatingS } from './styled'

const RatingComponent: FC<{ rating: number; showNumber?: boolean }> = ({
  rating,
  showNumber = true,
}) => {
  return (
    <RatingS>
      {showNumber && <div style={{ color: '#2B2B2B' }}>{rating}</div>}
      <Rating
        name={'read-only'}
        value={rating}
        readOnly
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize={'inherit'} />}
      />
    </RatingS>
  )
}

export default RatingComponent
