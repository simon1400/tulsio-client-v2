import { Typography, useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";
import { AlphabetWrap, Box, DictionaryHitsS } from "./styles";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Content from "components/Content";
import { useTheme } from "@emotion/react";

const Image = dynamic(() => import("../Image"), {suspense: true});

const APP_API = process.env.APP_API

const DictionaryHits: FC<{data: any}> = ({data}) => {

  const theme = useTheme()

  const [gutter, setGutter] = useState(theme.globalGap['xxl'])

  const xl = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const lg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const md = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (xl) {
      setGutter(theme.globalGap['xl'])
    } else if (lg) {
      setGutter(theme.globalGap['lg'])
    } else if (md) {
      setGutter(theme.globalGap['md'])
    } else if (sm) {
      setGutter(theme.globalGap['sm'])
    }
  }, [xl, lg, md, sm])
  
  return (
    <DictionaryHitsS>
      {Object.keys(data).map((key, index) => <AlphabetWrap id={key} key={index}>
        <ResponsiveMasonry columnsCountBreakPoints={{320: 2, 980: 3, 1280: 4}}>
          <Masonry gutter={gutter}>
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
    </DictionaryHitsS>
  )
}

export default DictionaryHits