import Articles from "components/Articles";
import PageHead from "components/PageHead";
import Page from "layout/Page";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { selectArticles, selectTitle } from 'stores/slices/dataSlices'

const Category: NextPage = () => {

  const title = useSelector(selectTitle);
  const articles = useSelector(selectArticles);
  
  return (
    <Page>
      <PageHead 
        title={title}
        category
      />
        
      {!!articles?.length && <Articles data={articles} />}
    </Page>
  )
}

export default Category