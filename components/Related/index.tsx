import type { FC } from 'react'

import { Typography } from '@mui/material'
import { choiceBackground } from 'helpers/choiseBackground'
import DOMPurify from 'isomorphic-dompurify'
import dynamic from 'next/dynamic'

import { RelatedS } from './styled'
const Image = dynamic(() => import('../Image'))

interface IReverse {
  reverse: boolean
  title: string
  description: string
  background: string
  image: IImageRoot
}

const Related: FC<IReverse> = ({ reverse, title, description, image, background }) => {
  const { convert, color } = choiceBackground(background)
  return (
    <RelatedS reverse={reverse} background={convert} colorText={color}>
      <div className={'content-wrap'}>
        <Typography variant={'h3'}>{title}</Typography>
        <Typography
          component={'div'}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        />
      </div>
      <div className={'img-wrap'}>
        <Image image={image.data} fill />
      </div>
    </RelatedS>
  )
}

export default Related
