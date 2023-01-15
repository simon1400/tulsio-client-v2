// import { connectHits } from "react-instantsearch-core";
import { Container } from "@mui/material";
import {
  useHits,
  UseHitsProps,
} from 'react-instantsearch-hooks-web';
import Grid2 from '@mui/material/Unstable_Grid2';
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