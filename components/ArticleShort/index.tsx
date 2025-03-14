import type { FC } from 'react'

import { Typography } from '@mui/material'
import Label from 'components/Label'
import { choiceBackground } from 'helpers/choiseBackground'
import { useOnMountUnsafe } from 'helpers/useOnMountUnsaf'
import DOMPurify from 'isomorphic-dompurify'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { ArticleWrap } from './styled'

const APP_API = process.env.APP_API

export interface ILabel {
  title: string
  slug: string
  color: string
}

interface ArticleShortProps {
  link: string
  image: any
  background?: string
  label?: ILabel | ILabel[]
  title: string
  text?: string
  showShortImg?: boolean
}

const ArticleShort: FC<ArticleShortProps> = ({
  link,
  image,
  title,
  background,
  showShortImg = true,
  text = '',
  label = undefined,
}) => {
  const router = useRouter()
  const [imgUrl, setImgUrl] = useState<string>('/assets/placeholder.svg')
  const [size] = useState<string>('resize=1000x1000')

  const { convert, color } = choiceBackground(background)

  useOnMountUnsafe(() => {
    if (typeof image === 'object' && image) {
      if (image.attributes) {
        setImgUrl(`${APP_API}${image.attributes.url}?format=webp&${size}`)
      } else {
        setImgUrl(`${APP_API}${image.url}?format=webp&${size}`)
      }
    } else if (image !== undefined) {
      setImgUrl(`${image}?format=webp&${size}`)
    }
  })

  return (
    <ArticleWrap background={convert} color={color} href={`/${router.locale}${link}`}>
      <span className={'img-wrap'}>
        <span
          className={'img-art'}
          style={showShortImg ? { backgroundImage: `url(${imgUrl})` } : {}}
        />
      </span>

      <span className={'content-wrap-art'}>
        <span>
          <Typography variant={'h2'}>
            <span>{title}</span>
          </Typography>
          {!!text.length && (
            <Typography
              variant={'body1'}
              component={'div'}
              className={'article-short-content'}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
            />
          )}
        </span>
        <span className={'label-wrap'}>
          {!!label && !Array.isArray(label) && <Label data={label} color={color} />}
          {!!label &&
            Array.isArray(label) &&
            label.map((item, idx) => <Label color={color} key={`${item}_${idx}`} data={item} />)}
        </span>
      </span>
    </ArticleWrap>
  )
}

export default ArticleShort
