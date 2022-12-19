
import dynamic from "next/dynamic";
import {
  useInfiniteHits,
  UseInfiniteHitsProps,
} from 'react-instantsearch-hooks-web';
import { GridTop } from "styles/grid";

const ArticleShort = dynamic(() => import("../ArticleShort"), {ssr: false}) 

const InfiniteArticle = (props: UseInfiniteHitsProps) => {

  const { hits } = useInfiniteHits(props);
  
  return (
    <section>
      <GridTop>
        {!!hits.length && hits.map((item: any, idx: number) => <div key={idx} className={`div${idx+1}`}>
          <ArticleShort 
            title={item?.title}
            alt={item?.image.alternativeText}
            link={`/blog/${item.slug}`}
            background={item.background}
            image={item?.image}
            label={item.labels[0] ? {
              title: item.labels[0].title,
              slug: item.labels[0].slug,
              color: item.labels[0].color
            } : undefined}
          />
        </div>)}
      </GridTop>
    </section>
  )
}

export default InfiniteArticle