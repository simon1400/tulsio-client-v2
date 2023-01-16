import Articles from "components/Articles";
import { useHits, UseHitsProps } from "react-instantsearch-hooks-web";

const ResultArticles = (props: UseHitsProps) => {

  const { hits } = useHits(props);

  return <Articles data={hits} searchResult />
}

export default ResultArticles