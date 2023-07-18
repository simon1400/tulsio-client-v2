import ArticleShort from "components/ArticleShort";
import { FC } from "react";
import { client, getStrapiURL } from "../lib/api";
import getBaners from "../queries/baners";
import homepageQuery from "../queries/homepage";
import { GridTop } from "styles/grid";
import Banner from "components/Baner";
import GridButton from "components/GridButton";
import Page from "layout/Page";
import { wrapper } from "stores";
import { changeDescription, changeTitle } from "stores/slices/dataSlices";
import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

enum BANER_POSITION {
  POSITION_1 = "Home_1",
  POSITION_2 = "Home_2",
}

const gridButtonData = [
  {
    title: " - CBD slovník - CBD slovník ",
    link: "/dictionary",
  },
  {
    title: " –⁠⁠ FAQ –⁠⁠ FAQ –⁠⁠ FAQ",
    link: "/faq",
  },
];

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    ctx.res.setHeader(
      "Cache-Control",
      "public, s-maxage=31536000, stale-while-revalidate=59"
    );

    const { data: banersData } = await client.query({
      query: getBaners,
      variables: {
        query: [{ position: { eq: "Home_1" } }, { position: { eq: "Home_2" } }],
        locale: ctx.locale,
      },
    });

    const { data: homepageData } = await client.query({
      query: homepageQuery,
      variables: {
        locale: ctx.locale,
      },
    });

    const homepage = homepageData.homepage.data?.attributes;
    const meta = homepage?.meta;
    const articles = homepage.articles.map(
      (item: any) => item.article.data?.attributes
    );
    const baners = banersData.baners.data.map((item: any) => item.attributes);

    const filterBaners1 = baners.filter(
      (item: any) => item.position === BANER_POSITION.POSITION_1
    );
    const filterBaners2 = baners.filter(
      (item: any) => item.position === BANER_POSITION.POSITION_2
    );

    const baner1 =
      filterBaners1[Math.floor(Math.random() * filterBaners1.length)];
    const baner2 =
      filterBaners2[Math.floor(Math.random() * filterBaners2.length)];

    store.dispatch(changeTitle(meta?.title || "Úvod"));
    store.dispatch(changeDescription(meta?.description || ""));

    return {
      props: {
        title: homepage.title,
        baner1: baner1 || null,
        baner2: baner2 || null,
        articles,
        image: meta?.image ? getStrapiURL(meta.image) : null,
      },
    };
  }
);

interface IHomepage {
  title: string;
  baner1: any;
  baner2: any;
  articles: any;
}

const Homepage: FC<IHomepage> = ({ title, baner1, baner2, articles }) => {
  return (
    <Page>
      <section>
        <Container sx={{ mb: 10 }}>
          <HomeHead variant="h1">{title}</HomeHead>
        </Container>
        <GridTop>
          {!!articles?.length &&
            articles.map((item: any, idx: number) => {
              if (idx === 2) {
                return (
                  <>
                    <div key={"banner" + idx}>
                      <Banner data={baner1} />
                    </div>
                    <div key={"gridButton" + idx}>
                      <GridButton data={gridButtonData[0]} />
                    </div>
                    <div key={"article" + idx}>
                      <ArticleShort
                        title={item.title}
                        showShortImg={item.showShortImg}
                        link={`/blog/${item?.slug}`}
                        image={item.image.data}
                        background={item.background}
                        label={item?.labels?.data.map(
                          (item: any) => item.attributes
                        )}
                      />
                    </div>
                    <div key={"gridButton" + idx + 1}>
                      <GridButton data={gridButtonData[1]} />
                    </div>
                  </>
                );
              } else if (idx === 5) {
                return (
                  <>
                    <div key={"banner" + idx}>
                      <Banner data={baner2} />
                    </div>
                    <div key={"article" + idx}>
                      <ArticleShort
                        title={item.title}
                        showShortImg={item.showShortImg}
                        link={`/blog/${item?.slug}`}
                        image={item.image.data}
                        background={item.background}
                        label={item?.labels?.data.map(
                          (item: any) => item.attributes
                        )}
                      />
                    </div>
                  </>
                );
              } else {
                return (
                  <div key={"article" + idx}>
                    <ArticleShort
                      title={item.title}
                      showShortImg={item.showShortImg}
                      link={`/blog/${item?.slug}`}
                      image={item.image.data}
                      background={item.background}
                      label={item?.labels?.data.map(
                        (item: any) => item.attributes
                      )}
                    />
                  </div>
                );
              }
            })}
        </GridTop>
      </section>
    </Page>
  );
};

export default Homepage;

const HomeHead = styled(Typography)`
  font-size: 50px;
`;
