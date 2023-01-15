// import { connectHits } from "react-instantsearch-core";
import { Container } from "@mui/material";
import {
  useHits,
  UseHitsProps,
} from 'react-instantsearch-hooks-web';
import Grid2 from '@mui/material/Unstable_Grid2';
import FaqItem from "components/FaqItem";

const FaqHits = (props: UseHitsProps) => {

  const { hits } = useHits(props);

  return (
    <Container maxWidth="md">
      {hits.map((item: any, idx: number) => <FaqItem key={idx} data={item} />)}
    </Container>
  )
}

export default FaqHits