import type { FC } from 'react'

import { Typography } from '@mui/material'
import DOMPurify from 'isomorphic-dompurify'

import { CategoryDescriptionS } from './styles'

interface ICategoryShort {
  data: any
  staticBlock?: boolean
  removeHover?: boolean
}

const CategoryShort: FC<ICategoryShort> = ({ data, staticBlock = false, removeHover = false }) => {
  return (
    <CategoryDescriptionS removeHover={removeHover} staticBlock={staticBlock}>
      <div className={'img-wrap'} />
      <div className={'content-wrap-art'}>
        <Typography marginBottom={staticBlock ? 5 : 0} variant={staticBlock ? 'h1' : 'h2'}>
          {data.title}
        </Typography>
        <Typography
          variant={'body2'}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.description) }}
        />
      </div>
    </CategoryDescriptionS>
  )
}

export default CategoryShort
