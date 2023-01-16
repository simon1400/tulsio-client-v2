import { Container } from "@mui/material";
import {
  useHits,
  UseHitsProps,
} from 'react-instantsearch-hooks-web';
import FaqItem from "components/FaqItem";
import { FaqHitsS } from "./styles";

const FaqHits = (props: UseHitsProps) => {

  const { hits } = useHits(props);

  return (
    <Container maxWidth="md">
      <FaqHitsS>
        {hits.map((item: any, idx: number) => <FaqItem key={idx} data={item} />)}
      </FaqHitsS>
    </Container>
  )
}

export default FaqHits