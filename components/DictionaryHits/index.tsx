import { Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { FC } from "react";
import { AlphabetWrap, Box } from "./styles";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Content from "components/Content";

const Image = dynamic(() => import("../Image"), {suspense: true});

const APP_API = process.env.APP_API

const DictionaryHits: FC<{data: any}> = ({data}) => {
  
  return (
    <>
      {Object.keys(data).map((key, index) => <AlphabetWrap id={key} key={index}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{320: 2, 980: 3, 1280: 4}}
        >
          <Masonry gutter="30px">
            {data[key].map((item: any, indexChild: number) => <div key={indexChild}>
              <Box>
                <Content removePadding>
                  {item.image?.data && <Image format="&width=440" url={APP_API+item.image.data.attributes} />}
                  <Typography variant="h2">{item.title}</Typography>
                  <Typography component="div" variant="body1" dangerouslySetInnerHTML={{__html: item.content}} />
                  {item.textLink && item.link && <a href={item.link}>{item.textLink}</a>}
                </Content>
              </Box>
            </div>)}
          </Masonry>
        </ResponsiveMasonry>
      </AlphabetWrap>)}
    </>
  )
}

export default DictionaryHits