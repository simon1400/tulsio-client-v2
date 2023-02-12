import { Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArticles } from "stores/fetch/dataFetch";
import { selectCategoryNav } from "stores/slices/navSlices";
import { CategoryTop } from "./styles";

import Nav from "components/Nav";
import { selectType } from "stores/slices/dataSlices";

interface PageHeadProps {
  title: string;
  category?: boolean;
  center?: boolean;
  prefix?: string;
}

const PageHead: FC<PageHeadProps> = ({ title, category, center, prefix }) => {
  const [value, setValue] = useState(0);

  const router = useRouter();
  const nav = useSelector(selectCategoryNav);
  const type = useSelector(selectType);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) {
      if (nav.length && router.query.category !== "blog" && router.query.category !== "tags") {
        setValue(
          nav.findIndex((el: any) => el.slug === router.query.category) + 1
        );
      } else {
        setValue(0);
      }
    }
  }, [router.query]);

  const handleMenu = (e: SyntheticEvent, idx: number) => {
    if (idx === 0) {
      router.push(type === 'blog' ? "/blog" : "/tags");
    } else {
      console.log(nav[idx - 1].slug)
      router.push('/'+nav[idx - 1].slug);
      // @ts-ignore
      dispatch(fetchAllArticles(nav[idx - 1].slug));
    }
  };

  return (
    <CategoryTop>
      <Container max-width="xl">
        <Typography textAlign={center ? "center" : "left"} variant="h1">
          {prefix ? <span>{prefix}</span> : ""}
          {title}
        </Typography>

        {category && <Nav data={nav} handle={handleMenu} subMenu category value={value} />}
      </Container>
    </CategoryTop>
  );
};

export default PageHead;
