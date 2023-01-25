import Articles from "components/Articles";
import NotResult from "components/NotResult";
import { useHits, UseHitsProps } from "react-instantsearch-hooks-web";

const ResultArticles = (props: UseHitsProps) => {

  const { hits } = useHits(props);

  if(!hits.length) {
    return <NotResult />
  }else{
    return <Articles data={hits} searchResult />
  }
  
}

export default ResultArticles