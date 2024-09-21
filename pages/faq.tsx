import { NextPage } from "next";
import { Configure, InstantSearch } from "react-instantsearch";
import searchClient from "../lib/meilisearch";
import { client, getStrapiURL } from "../lib/api";
import {getAllFaqs, getFaq} from "../queries/faq";
import PageHead from "components/PageHead";
import FaqHits from "components/FaqHits";
import SearchBox from "components/SearchBox";
import { Container } from "@mui/material";
import Page from "layout/Page";
import { wrapper } from "stores";
import { changeDescription, changeTitle } from "stores/slices/dataSlices";
import { changeImage } from "stores/slices/metaSlices";

const meilisearchPrefix = process.env.MEILISEARCH_PREFIX;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({locale}) => {
    const { data } = await client.query({ query: getFaq, variables: {locale: locale} });
    const { data: allFaq } = await client.query({ query: getAllFaqs, variables: {locale: locale} });

    const faqData = data.faqPage.data.attributes;

    store.dispatch(changeTitle(faqData.meta?.title || faqData.title));
    store.dispatch(changeDescription(faqData.meta?.description || ""));
    store.dispatch(changeImage(faqData.meta?.image.data ? getStrapiURL(faqData.meta.image.data.attributes.url) : ""));

    return {
      props: {
        faq: faqData,
        allFaq: allFaq.faqs.data.map((item: any) => ({...item.attributes}))
      },
    };
  }
);

const Faq: NextPage = ({
  // @ts-ignore
  faq, allFaq
}) => {
  
  return (
    <Page>
      <InstantSearch
        indexName={meilisearchPrefix + "faq"}
        searchClient={searchClient.searchClient}
      >
        <Configure hitsPerPage={50} />
 
        <Container maxWidth="md">
          <PageHead title={faq.title} />
          <SearchBox placeholder="Hledat dotaz..." />
        </Container>

        <FaqHits allFaq={allFaq} />
      </InstantSearch>
    </Page>
  );
};

export default Faq;
