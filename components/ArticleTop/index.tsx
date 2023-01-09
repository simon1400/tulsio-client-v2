import { Typography } from "@mui/material"
import Image from "components/Image"
import Label from "components/Label"
import { ArticleTopS } from "./styles"

const ArticleTop = ({
  // @ts-ignore
  article
}) => {
  return (
    <ArticleTopS>
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