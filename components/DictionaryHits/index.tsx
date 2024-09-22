import { Typography, useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";
import { AlphabetWrap, Box, DictionaryHitsS } from "./styles";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Content from "components/Content";
import { useTheme } from "@emotion/react";

const Image = dynamic(() => import("../Image"), { suspense: true });

const DictionaryHits: FC<{ data: any }> = ({ data }) => {
  const theme = useTheme();

  const [gutter, setGutter] = useState(theme.globalGap["xxl"]);

  const xl = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const lg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const md = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (xl) {
      setGutter(theme.globalGap["xl"]);
    } else if (lg) {
      setGutter(theme.globalGap["lg"]);
    } else if (md) {
      setGutter(theme.globalGap["md"]);
    } else if (sm) {
      setGutter(theme.globalGap["sm"]);
    }
  }, [xl, lg, md, sm]);

  return (
    <DictionaryHitsS>
      {Object.keys(data).map((key, index) => (
        <AlphabetWrap id={key} key={index}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 320: 1, 760: 2, 980: 3, 1280: 4 }}
          >
            <Masonry gutter={gutter}>
              {data[key].map((item: any, indexChild: number) => (
                <div key={indexChild}>
                  <Box>
                    {item.image?.data && (
                      <div className="img-wrap">
                        <Image image={item.image.data} fill format="&width=620" />
                      </div>
                    )}
                    <Content removePadding>
                      <Typography component="h2" variant="h3">{item.title}</Typography>
                      <Typography
                        component="div"
                        variant="body2"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                      {item.textLink && item.link && (
                        <a href={item.link}>{item.textLink}</a>
                      )}
                    </Content>
                  </Box>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </AlphabetWrap>
      ))}
    </DictionaryHitsS>
  );
};

export default DictionaryHits;
