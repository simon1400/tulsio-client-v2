import type { FC } from 'react'

const APP_API = process.env.APP_API

export interface ImageAttr {
  url: string
  alternativeText?: string
  name?: string
}

export interface Attr {
  attributes: ImageAttr
}

export interface IImage {
  attributes: ImageAttr
  data?: Attr
  indexOf?: () => void
}

interface ImageProps {
  image?: IImage
  svg?: boolean
  url?: string
  format?: string
  width?: string
  height?: string
  fill?: boolean
}

const ImageComponent: FC<ImageProps> = ({
  image = undefined,
  url = '/assets/placeholder.svg',
  format = '',
}) => {
  let altText = ''

  if (image) {
    url = APP_API + image.attributes.url
    altText = image.attributes.alternativeText || ''
  }

  if (url.indexOf('.mp4') > 0) {
    return (
      <video loop muted autoPlay>
        <source src={url} type={'video/mp4'} />
        {'Your browser does not support the video tag.'}
      </video>
    )
  }
  return <img src={`${url}?format=webp${format}`} alt={altText} />
}

export default ImageComponent
