import { FC } from "react";

const APP_API = process.env.APP_API

export interface ImageAttr {
  url: string,
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
}

const ImageComponent: FC<ImageProps> = ({ 
  image = undefined, 
  url = '/assets/placeholder.svg', 
  format = ''
}) => {

  let altText = '', caption = ''
  
  if(image){
    url = APP_API+image.attributes.url
    altText = image.attributes.alternativeText || ''
  }
  
  return <img src={url+'?format=webp'+format} alt={altText} />
};

export default ImageComponent;
