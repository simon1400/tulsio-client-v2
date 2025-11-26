import type { FC } from 'react'

import { Typography } from '@mui/material'
import DOMPurify from 'isomorphic-dompurify'

import { ShortContentS } from './styled'

interface IShortContent {
  title: string
  description?: string
}

const ShortContent: FC<IShortContent> = ({ title, description }) => {
  return (
    <ShortContentS>
      <Typography variant={'h2'}>{title}</Typography>
      {!!description && (
        <Typography
          component={'div'}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
          suppressHydrationWarning
        />
      )}
    </ShortContentS>
  )
}

export default ShortContent
