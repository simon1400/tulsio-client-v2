import CategoryShort from "components/CategoryShort";
import dynamic from "next/dynamic";
import { FC } from "react";
import { GridTop } from "styles/grid";

const ArticleShort = dynamic(() => import("../ArticleShort"), { ssr: false });

interface IArticles {
  data: any;
  searchResult?: boolean;
  shortInfo?: {
    title: string;
    description: string;
  }
}

const Articles: FC<IArticles> = ({ data, searchResult = false, shortInfo }) => {
  return (
    <section>
      <GridTop shortInfo={shortInfo}>
        {!!data.length &&
          data.map((item: any, idx: number) => {
            if(idx === 1) {
              return <>
                {shortInfo && <div key={'descriptionCategory'+idx}>
                  <CategoryShort data={shortInfo} />
                </div>}
                <div key={'article'+idx}>
                  <ArticleShort
                    title={item?.title}
                    showShortImg={item.showShortImg}
                    link={`/blog/${item.slug}`}
                    background={item.background}
                    image={searchResult ? item?.image : item?.image.data.attributes}
                    label={
                      item?.labels?.data
                        ? item?.labels?.data.map((item: any) => item.attributes)
                        : item?.labels
                    }
                  />
                </div>
              </>
            }else{
              return <div key={'article'+idx} className={`div${idx + 1}`}>
                <ArticleShort
                  title={item?.title}
                  showShortImg={item.showShortImg}
                  link={`/blog/${item.slug}`}
                  background={item.background}
                  image={searchResult ? item?.image : item?.image.data.attributes}
                  label={
                    item?.labels?.data
                      ? item?.labels?.data.map((item: any) => item.attributes)
                      : item?.labels
                  }
                />
              </div>
            }
          })}
      </GridTop>
    </section>
  );
};

export default Articles;
