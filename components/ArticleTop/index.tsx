import { Container, IconButton, SvgIcon, Typography } from "@mui/material";
import Image from "components/Image";
import Label from "components/Label";
import { AnimationWrapArticle, ArticleTopS } from "./styles";
import { getPallete } from "helpers/getPallete";
import Breadcrumbs from "components/Breadcrumbs";
// import { useScroll } from "@react-spring/web";

import ArrowDown from "public/icons/arrow-2.svg";
import { useRef } from "react";
import Date from "components/Date";

const ArticleTop = ({
  // @ts-ignore
  article,
}) => {
  const ref = useRef<HTMLDivElement>(null!);

  const handleClick = () => {
    const element = document.getElementById("content-article");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const posElTop = useMemo(
  //   () => ref?.current?.offsetTop,
  //   [ref.current?.offsetTop]
  // );
  // const startHeight = useMemo(() => ref?.current?.clientHeight, [ref.current]);

  // const [scrollY, setScrollY] = useState(0);

  // const [height, setHeight] = useState<number>(startHeight);

  const { convert, color } = getPallete(article.background);

  // useScroll({
  //   onChange: ({ value: { scrollY } }) => setScrollY(scrollY),
  // });

  // useEffect(() => {
  //   if (scrollY >= posElTop - 20) {
  //     setHeight(startHeight - (scrollY - posElTop) - 20);
  //   }
  // }, [scrollY]);

  return (
    <AnimationWrapArticle ref={ref}>
      <ArticleTopS background={convert} color={color}>
        <Image format="&resize=920x920" image={article.image.data} />
        <Container maxWidth="md">
          <Breadcrumbs
            category={article.categories.data[0].attributes}
            color={color}
          />
          <Typography variant="h1">{article.title}</Typography>
          {!!article?.labels?.data?.length &&
            article.labels.data.map((item: any, index: number) => (
              <Label
                color={color}
                key={index}
                data={{
                  title: item.attributes.title,
                  navTitle: item.attributes.navTitle,
                  slug: item.attributes.slug,
                }}
              />
            ))}
          <Date color={color} data={article.updatedAt} />
          <IconButton
            onClick={handleClick}
            aria-label="open drawer"
            edge="start"
          >
            <SvgIcon component={ArrowDown} style={{ fill: color }} />
          </IconButton>
        </Container>
      </ArticleTopS>
    </AnimationWrapArticle>
  );
};

export default ArticleTop;
