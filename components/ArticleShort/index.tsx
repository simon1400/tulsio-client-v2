import { FC } from "react"
import Label from "components/Label"
import { ArticleWrap } from "./styles"

const APP_API = process.env.APP_API

export interface ILabel {
  title: string
  slug: string
  color: string
}

interface ArticleShortProps {
  link: string,
  image: string,
  background?: string;
  label?: ILabel | ILabel[],
  title: string
  horizontal?: boolean,
  text?: string,
  alt?: string,
  sticky?: string
}

const ArticleShort: FC<ArticleShortProps> = ({
  link,
  image,
  title,
  background,
  alt = '',
  text = '',
  label = undefined,
  horizontal = false,
  sticky = '',
}) => {

  let imgUrl = '/assets/placeholder.svg'
  const size = horizontal ? 'resize=221x221' : 'height=720'

  if(typeof image === 'object') {
    if(image['attributes']) {
      imgUrl = `${APP_API}${image['attributes']['url']}?format=webp&${size}`   
    }else{
      imgUrl = `${APP_API}${image['url']}?format=webp&${size}`   
    }
  }else if(image !== undefined) {
    imgUrl = image+`?format=webp&${size}`
  }

  let convert = "#4545ff", color: string = '#fff'

  if(background === 'green') {
    convert = "#9f9"
    color = '#202020'
  }else if(background === 'yellow') {
    convert = "#fff899"
    color = '#202020'
  }else if(background === 'purple') {
    convert = "#a50d5935"
  }else if(background === 'bluePurpleG') {
    convert = "linear-gradient(125deg, #a50d5a, #4545ff)"
  }else if(background === 'greenYellowG') {
    convert = "linear-gradient(to bottom, #fff899, #9f9);"
    color = '#202020'
  }

  return (
    <ArticleWrap background={convert} color={color} href={link} passHref>

      <div className="img-wrap-back" style={{backgroundImage: `url(${imgUrl})`}}></div>
      <div className="content-wrap-art">
        <div>
          {text && <h2><span>{title}</span></h2>}
          {!text && <h3><span>{title}</span></h3>}
          {!!text.length && <div className="article-short-content" dangerouslySetInnerHTML={{__html: text}}></div>}
        </div>
        
        <div className="label-wrap">
          {!!label && !Array.isArray(label) && <Label data={label}/>}
          {!!label && Array.isArray(label) && label.map((item, idx) => <Label key={idx} data={item}/>)}
        </div>
      </div>
      
    </ArticleWrap>
  )
}

export default ArticleShort