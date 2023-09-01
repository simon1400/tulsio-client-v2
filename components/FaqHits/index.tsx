import { Container } from "@mui/material";
import {
  useHits,
  UseHitsProps,
  useSearchBox,
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

  const {query} = useSearchBox()

  return (
    <Container maxWidth="md">
      <FaqHitsS>
        {!hits.length && query.length >= 3 && <NotResult />}
        {query.length >= 3 && hits.map((item: any, idx: number) => <FaqItem key={idx} data={item} />)}
        {query.length < 3 && props.allFaq.map((item: any, idx: number) => <FaqItem key={idx} data={item} />)}
      </FaqHitsS>
    </Container>
  )
}

export default FaqHits