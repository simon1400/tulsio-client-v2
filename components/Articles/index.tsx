import type { FC } from 'react'

import CategoryShort from 'components/CategoryShort'
import React from 'react'
import { GridTop } from 'styles/grid'

import ArticleShort from '../ArticleShort'

interface IArticles {
  data: any
  searchResult?: boolean
  shortInfo?: {
    title: string
    description: string
  }
}

const Articles: FC<IArticles> = ({ data, searchResult = false, shortInfo }) => {
  return (
    <section>
      <GridTop shortInfo={shortInfo}>
        {!!data.length &&
          data.map((item: any, idx: number) => {
            if (idx === 1) {
              return (
                <React.Fragment key={`descriptionCategory_article_${item?.title}`}>
                  {shortInfo && (
                    <div>
                      <CategoryShort data={shortInfo} />
                    </div>
                  )}
                  <div>
                    <ArticleShort
                      title={item?.title}
                      showShortImg={item.showShortImg}
                      link={`/blog/${item.slug}`}
                      background={item.background}
                      image={searchResult ? item?.image : item?.image.data?.attributes}
                      label={
                        item?.labels?.data
                          ? item.labels.data.map((item: any) => item.attributes)
                          : item?.labels
                      }
                    />
                  </div>
                </React.Fragment>
              )
            } else {
              return (
                <div key={`article${item?.title}`} className={`div${idx + 1}`}>
                  <ArticleShort
                    title={item?.title}
                    showShortImg={item.showShortImg}
                    link={`/blog/${item.slug}`}
                    background={item.background}
                    image={searchResult ? item?.image : item?.image.data?.attributes}
                    label={
                      item?.labels?.data
                        ? item.labels?.data.map((item: any) => item.attributes)
                        : item?.labels
                    }
                  />
                </div>
              )
            }
          })}
      </GridTop>
    </section>
  )
}

export default Articles
