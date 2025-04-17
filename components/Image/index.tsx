import type { FC } from 'react'

const APP_API = process.env.APP_API

interface ImageProps {
  image?: IImageData
  url?: string
  format?: string
  alt?: string
  width?: number | `${number}`
  height?: number | `${number}`
  fill?: boolean
}

const ImageComponent: FC<ImageProps> = ({
  image = undefined,
  url = '/assets/placeholder.svg',
  format = '',
  alt = 'Placeholder Tulsio',
  fill = false,
  width,
  height,
}) => {
  if (url !== '/assets/placeholder.svg') {
    url = APP_API + url
  }

  if (image) {
    url = APP_API + image.attributes.url
    alt = image.attributes.alternativeText || ''
  }

  if (url.indexOf('.mp4') > 0) {
    return (
      <video loop muted autoPlay>
        <source src={url} type={'video/mp4'} />
        {'Your browser does not support the video tag.'}
      </video>
    )
  }
  return (
    <img
      src={`${url}?format=${url.indexOf('.svg') > 0 ? 'svg' : 'webp'}${format}`}
      className={fill ? 'img-absolute' : ''}
      alt={alt || ''}
      width={width}
      height={height}
    />
  )
}

export default ImageComponent
