import { Typography, useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";
import { AlphabetWrap, Box, DictionaryHitsS } from "./styles";
import { MasonryProps } from 'react-responsive-masonry';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import _Masonry from 'react-responsive-masonry/lib/Masonry';
import Content from "components/Content";
import { useTheme } from "@emotion/react";

const Masonry: React.FC<MasonryProps> = (props) => <_Masonry {...props} />;

const Image = dynamic(() => import("../Image"), { suspense: true });

const DictionaryHits: FC<{ data: any }> = ({ data }) => {
  const theme = useTheme();

  const [gutter, setGutter] = useState(theme.globalGap["xxl"]);
  const [columnsCount, setColumnsCount] = useState(4);

  const xl = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const lg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const md = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (xl) {
      setGutter(theme.globalGap["xl"]);
      setColumnsCount(4);
    } else if (lg) {
      setGutter(theme.globalGap["lg"]);
      setColumnsCount(3);
    } else if (md) {
      setGutter(theme.globalGap["md"]);
      setColumnsCount(2);
    } else if (sm) {
      setGutter(theme.globalGap["sm"]);
      setColumnsCount(1);
    }
  }, [xl, lg, md, sm]);

  return (
    <DictionaryHitsS>
      {Object.keys(data).map((key, index) => (
        <AlphabetWrap id={key} key={index}>
          <Masonry gutter={gutter} columnsCount={columnsCount}>
            {data[key].map((item: any, indexChild: number) => (
              <div key={indexChild}>
                <Box>
                  {item.image?.data && (
                    <div className="img-wrap">
                      <Image image={item.image.data} fill format="&width=620" />
                    </div>
                  )}
                  <Content removePadding>
                    <Typography component="h2" variant="h3">
                      {item.title}
                    </Typography>
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
        </AlphabetWrap>
      ))}
    </DictionaryHitsS>
  );
};

export default DictionaryHits;