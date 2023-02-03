import { Container } from "@mui/material";
import {
  useHits,
  UseHitsProps,
} from 'react-instantsearch-hooks-web';
import FaqItem from "components/FaqItem";
import { FaqHitsS } from "./styles";
import NotResult from "components/NotResult";

const FaqHits = (props: UseHitsProps) => {

  const { hits } = useHits(props);

  console.log(hits)

  return (
    <Container maxWidth="md">
      <FaqHitsS>
        {!hits.length && <NotResult />}
        {hits.map((item: any, idx: number) => <FaqItem key={idx} data={item} />)}
      </FaqHitsS>
    </Container>
  )
}

export default FaqHits