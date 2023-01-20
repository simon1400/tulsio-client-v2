import { FC } from "react"
import Label from "components/Label"
import { ArticleWrap } from "./styles"
import { Typography } from "@mui/material"

const APP_API = process.env.APP_API

export interface ILabel {
  title: string
  slug: string
  color: string
}

interface ArticleShortProps {
  link: string
  image: string
  background?: string
  label?: ILabel | ILabel[]
  title: string
  text?: string
}

const ArticleShort: FC<ArticleShortProps> = ({
  link,
  image,
  title,
  background,
  text = '',
  label = undefined,
}) => {

  let imgUrl = '/assets/placeholder.svg'
  const size = 'resize=1000x1000'

  if(typeof image === 'object') {
    if(image['attributes']) {
      imgUrl = `${APP_API}${image['attributes']['url']}?format=webp&${size}`   
    }else{
      imgUrl = `${APP_API}${image['url']}?format=webp&${size}`   
    }
  }else if(image !== undefined) {
    imgUrl = image+`?format=webp&${size}`
  }

  let convert = "#4545ff", color: string = '#ffffff'

  if(background === 'green') {
    convert = "#9f9"
    color = '#202020'
  }else if(background === 'yellow') {
    convert = "#fff899"
    color = '#202020'
  }else if(background === 'purple') {
    convert = "#a50d5a"
  }else if(background === 'bluePurpleG') {
    convert = "linear-gradient(125deg, #a50d5a, #4545ff)"
  }else if(background === 'greenYellowG') {
    convert = "linear-gradient(to bottom, #fff899, #9f9);"
    color = '#202020'
  }

  return (
    <ArticleWrap background={convert} color={color} href={link} passHref>

      <div className="img-wrap">
        <div className="img-art" style={{backgroundImage: `url(${imgUrl})`}} />
      </div>

      <div className="content-wrap-art">
        <div>
          {text && <Typography variant="h1"><span>{title}</span></Typography>}
          {!text && <Typography variant="h2"><span>{title}</span></Typography>}
          {!!text.length && <Typography variant="body1" component="div" className="article-short-content" dangerouslySetInnerHTML={{__html: text}} />}
        </div>
        <div className="label-wrap">
          {!!label && !Array.isArray(label) && <Label data={label} color={color} />}
          {!!label && Array.isArray(label) && label.map((item, idx) => <Label color={color} key={idx} data={item}/>)}
        </div>
      </div>
      
    </ArticleWrap>
  )
}

export default ArticleShort