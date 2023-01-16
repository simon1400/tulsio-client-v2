
import dynamic from "next/dynamic";
import { FC } from "react";
import { GridTop } from "styles/grid";

const ArticleShort = dynamic(() => import("../ArticleShort"), {ssr: false}) 

interface IArticles {
  data: any;
  searchResult?: boolean
}

const Articles: FC<IArticles> = ({data, searchResult = false}) => {
  
  return (
    <section>
      <GridTop>
        {!!data.length && data.map((item: any, idx: number) => <div key={idx} className={`div${idx+1}`}>
          {searchResult 
            ? <ArticleShort 
                title={item?.title}
                link={`/blog/${item.slug}`}
                background={item.background}
                image={item?.image}
                label={item.labels[0] ? {
                  title: item.labels[0].title,
                  slug: item.labels[0].slug,
                  color: item.labels[0].color
                } : undefined}
              />
            : <ArticleShort 
              title={item?.title}
              link={`/blog/${item.slug}`}
              background={item.background}
              image={item?.image.data.attributes}
              label={item.labels.data[0] ? {
                title: item.labels.data[0].attributes.title,
                slug: item.labels.data[0].attributes.slug,
                color: item.labels.data[0].attributes.color
              } : undefined}
            />
          }
          
        </div>)}
      </GridTop>
    </section>
  )
}

export default Articles