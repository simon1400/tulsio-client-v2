import { NextPage } from "next";
import Category from "views/Category";
import Article from "views/Article";
import { wrapper } from "stores";
import { fetchCategoryOrArticles } from "stores/fetch/dataFetch";
import { ICategoryPage } from "types/category";
import { fetchNavCategory, fetchNavTag } from "stores/fetch/navFetch";
import { useSelector } from "react-redux";
import { selectArticleBase, selectArticles } from "stores/slices/dataSlices";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      if (!params?.category || params?.category === "favicon.ico") {
        return {
          notFound: true,
        };
      }

      await store.dispatch(fetchCategoryOrArticles(params.category as string));

      const state = store.getState().data;

      if (!state.articles?.length && !state.articleBase?.title?.length) {
        return {
          notFound: true,
        };
      }

      if (state.articles.length) {
        if (state.type === "blog") await store.dispatch(fetchNavCategory());
        if (state.type === "tag") await store.dispatch(fetchNavTag());
      }

      return {
        props: {},
      };
    }
);

const CategoryPage: NextPage<ICategoryPage> = ({}) => {
  const articles = useSelector(selectArticles);
  const articleBase = useSelector(selectArticleBase);

  if (articles.length) {
    return <Category />;
  } else {
    return <Article article={articleBase} />;
  }
};

export default CategoryPage;
