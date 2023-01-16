import { Typography } from "@mui/material"
import Image from "components/Image"
import Label from "components/Label"
import { ArticleTopS } from "./styles"

const ArticleTop = ({
  // @ts-ignore
  article
}) => {
  console.log(article)

  const background = article.background

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
    <ArticleTopS background={convert} color={color}>
      <Image format="&resize=920x920" image={article.image.data} />
      <Typography variant="h1">{article.title}</Typography>
      {!!article?.labels?.data?.length && article.labels.data.map((item: any, index: number) => <Label key={index} data={{
          title: item.attributes.title,
          slug: item.attributes.slug,
          color: item.attributes.color
        }} />)}
    </ArticleTopS>
  )
}

export default ArticleTop