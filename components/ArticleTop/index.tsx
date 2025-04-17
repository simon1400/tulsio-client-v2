import { Container, IconButton, SvgIcon, Typography } from '@mui/material'
import Breadcrumbs from 'components/Breadcrumbs'
import Date from 'components/Date'
import Image from 'components/Image'
import Label from 'components/Label'
import { getPallete } from 'helpers/getPallete'
import ArrowDown from 'public/icons/arrow-2.svg'
import { useRef } from 'react'

import { AnimationWrapArticle, ArticleTopS } from './styles'

const ArticleTop = ({
  // @ts-expect-error: some code
  article,
}) => {
  const ref = useRef<HTMLDivElement>(null!)

  const handleClick = () => {
    const element = document.getElementById('content-article')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const { convert, color } = getPallete(article.background)

  return (
    <AnimationWrapArticle ref={ref}>
      <ArticleTopS background={convert} color={color}>
        {article?.image?.data && (
          <Image format={'&resize=920x920'} fill image={article.image.data} />
        )}
        <Container maxWidth={'md'}>
          {!!article.categories?.data.length && (
            <Breadcrumbs category={article.categories.data[0]?.attributes} color={color} />
          )}
          <Typography variant={'h1'}>{article.title}</Typography>
          {!!article?.labels?.data?.length &&
            article.labels.data.map((item: any, index: number) => (
              <Label
                color={color}
                key={item.attributes.title}
                data={{
                  title: item.attributes.title,
                  navTitle: item.attributes.navTitle,
                  slug: item.attributes.slug,
                }}
              />
            ))}
          <Date color={color} data={article.updatedAt} />
          <IconButton onClick={handleClick} aria-label={'open drawer'} edge={'start'}>
            <SvgIcon component={ArrowDown} style={{ fill: color }} />
          </IconButton>
        </Container>
      </ArticleTopS>
    </AnimationWrapArticle>
  )
}

export default ArticleTop
