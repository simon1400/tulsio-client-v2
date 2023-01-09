import { Container } from "@mui/material";
import dynamic from "next/dynamic";
import { FC } from "react";
import { AlphabetWrap, Box } from "./styles";
import Grid2 from '@mui/material/Unstable_Grid2';

const Image = dynamic(() => import("../Image"), {suspense: true});

const APP_API = process.env.APP_API

const DictionaryHits: FC<{data: any}> = ({data}) => {
  
  return (
    <Container maxWidth="xl">
      {Object.keys(data).map((key, index) => <AlphabetWrap id={key} key={index}>
        <Grid2 container spacing={5}>
          {data[key].map((item: any, indexChild: number) => <Grid2 sm={4} key={indexChild}>
            <Box>
              {item.image && <Image format="&width=440" url={APP_API+item.image} />}
              <h3>{item.title}</h3>
              <div dangerouslySetInnerHTML={{__html: item.content}} />
              {item.textLink && item.link && <a href={item.link}>{item.textLink}</a>}
            </Box>
          </Grid2>)}
        </Grid2>
      </AlphabetWrap>)}
    </Container>
  )
}

export default DictionaryHits