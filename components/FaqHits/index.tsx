import { Container } from "@mui/material";
import {
  useHits,
  UseHitsProps,
} from 'react-instantsearch-hooks-web';
import FaqItem from "components/FaqItem";
import { FaqHitsS } from "./styles";
import NotResult from "components/NotResult";


const transformItems = (items: any) => items.sort((a: any, b: any) => {
  if (+a.rank < +b.rank) return -1;
  if (+a.rank > +b.rank) return 1;
  return 0;
});

interface FaqHitsProps extends UseHitsProps {
  allFaq: any
}


const FaqHits = (props: FaqHitsProps) => {

  const { hits, results } = useHits({
    ...props,
    transformItems
  });

  return (
    <Container maxWidth="md">
      <FaqHitsS>
        {!hits.length && <NotResult />}
        {results && results.query.length >= 3 && hits.map((item: any, idx: number) => <FaqItem key={idx} data={item} />)}
        {results && results.query.length < 3 && props.allFaq.map((item: any, idx: number) => <FaqItem key={idx} data={item} />)}
      </FaqHitsS>
    </Container>
  )
}

export default FaqHits