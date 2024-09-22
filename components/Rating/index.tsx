import type { FC } from 'react'

import StarIcon from '@mui/icons-material/Star'
import { Rating } from '@mui/material'

import { RatingS } from './styled'

const RatingComponent: FC<{ marginBottom?: number }> = ({ marginBottom }) => {
  return (
    <RatingS marginBottom={marginBottom}>
      <div>{'4.2'}</div>
      <Rating
        name={'read-only'}
        value={2}
        readOnly
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize={'inherit'} />}
      />
    </RatingS>
  )
}

export default RatingComponent
