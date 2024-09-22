import type { NextPage } from 'next'

import Articles from 'components/Articles'
import PageHead from 'components/PageHead'
import Page from 'layout/Page'
import { useSelector } from 'react-redux'
import {
  selectArticles,
  selectCategoryTitle,
  selectShortDescription,
  selectShortTitle,
} from 'stores/slices/dataSlices'

const Category: NextPage = () => {
  const title = useSelector(selectCategoryTitle)
  const articles = useSelector(selectArticles)
  const shortTitle = useSelector(selectShortTitle)
  const shortDescription = useSelector(selectShortDescription)

  return (
    <Page>
      <PageHead title={title} category />

      {!!articles?.length && (
        <Articles
          data={articles}
          shortInfo={
            shortDescription ? { title: shortTitle, description: shortDescription } : undefined
          }
        />
      )}
    </Page>
  )
}

export default Category
