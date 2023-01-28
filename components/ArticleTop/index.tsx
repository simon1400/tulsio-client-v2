import { Container, IconButton, SvgIcon, Typography } from "@mui/material"
import Image from "components/Image"
import Label from "components/Label"
import { ArticleTopS } from "./styles"
import { getPallete } from "helpers/getPallete";
import Breadcrumbs from "components/Breadcrumbs";

import ArrowDown from 'public/icons/arrow-2.svg'

const ArticleTop = ({
  // @ts-ignore
  article
}) => {

  const handleClick = () => {
    const element = document.getElementById("content-article");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const {convert, color} = getPallete(article.background)

  return (
    <ArticleTopS background={convert} color={color}>
      <Image format="&resize=920x920" image={article.image.data} />
      <Container maxWidth="md">
        <Breadcrumbs category={article.categories.data[0].attributes} />
        <Typography variant="h1">{article.title}</Typography>
        {!!article?.labels?.data?.length && article.labels.data.map((item: any, index: number) => <Label color={color} key={index} data={{
            title: item.attributes.title,
            slug: item.attributes.slug,
            color: item.attributes.color
          }} />)}
        <IconButton onClick={handleClick} aria-label="open drawer" edge="start">
          <SvgIcon component={ArrowDown} />
        </IconButton>
      </Container>
    </ArticleTopS>
  )
}

export default ArticleTop