import type { FC } from 'react'

import { Typography } from '@mui/material'
import DOMPurify from 'isomorphic-dompurify'
import { useEffect, useState } from 'react'

import { CategoryDescriptionS } from './styles'

interface ICategoryShort {
  data: {
    title?: string
    description?: string
  }
  staticBlock?: boolean
  descriptionBlock?: boolean
  removeHover?: boolean
}

const CategoryShort: FC<ICategoryShort> = ({
  data,
  staticBlock = false,
  removeHover = false,
  descriptionBlock = false,
}) => {
  const [sanitizedDescription, setSanitizedDescription] = useState<string | null>(null)

  useEffect(() => {
    if (data?.description) {
      setSanitizedDescription(DOMPurify.sanitize(data.description))
    }
  }, [data?.description])

  if (!data?.title && !data?.description) return null // Защита от рендера пустого блока

  return (
    <CategoryDescriptionS
      removeHover={!!removeHover}
      staticBlock={!!staticBlock}
      descriptionBlock={!!descriptionBlock}
    >
      <div className={'img-wrap'} />
      <div className={'content-wrap-art'}>
        {data.title && (
          <Typography marginBottom={staticBlock ? 5 : 0} variant={staticBlock ? 'h1' : 'h2'}>
            {data.title}
          </Typography>
        )}

        {sanitizedDescription && (
          <Typography
            variant={'body2'}
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          />
        )}
      </div>
    </CategoryDescriptionS>
  )
}

export default CategoryShort
