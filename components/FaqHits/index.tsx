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
    <Container>
      <Grid2 container spacing={5}>
        <Grid2 xs={6}>
          {hits.slice(0, hits.length / 2).map((item: any, idx: number) => <FaqItem key={idx} data={item} />)}
        </Grid2>
        <Grid2 xs={6}>
          {hits.slice(hits.length / 2, hits.length).map((item: any, idx: number) => <FaqItem key={idx} data={item} />)}
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default FaqHits