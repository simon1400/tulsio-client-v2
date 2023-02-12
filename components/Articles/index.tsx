import dynamic from "next/dynamic";
import { FC } from "react";
import { GridTop } from "styles/grid";

const ArticleShort = dynamic(() => import("../ArticleShort"), { ssr: false });

interface IArticles {
  data: any;
  searchResult?: boolean;
}

const Articles: FC<IArticles> = ({ data, searchResult = false }) => {
  return (
    <section>
      <GridTop>
        {!!data.length &&
          data.map((item: any, idx: number) => (
            <div key={idx} className={`div${idx + 1}`}>
              {searchResult ? (
                <ArticleShort
                  title={item?.title}
                  link={`/blog/${item.slug}`}
                  showShortImg={item.showShortImg}
                  background={item.background}
                  image={item?.image}
                  label={item?.labels?.data.map((item: any) => item.attributes)}
                />
              ) : (
                <ArticleShort
                  title={item?.title}
                  showShortImg={item.showShortImg}
                  link={`/blog/${item.slug}`}
                  background={item.background}
                  image={item?.image.data.attributes}
                  label={item?.labels?.data.map((item: any) => item.attributes)}
                />
              )}
            </div>
          ))}
      </GridTop>
    </section>
  );
};

export default Articles;
