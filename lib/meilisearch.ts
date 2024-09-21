import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import process from "process";

const SEARCH_API = process.env.MEILISEARCH_DOMAIN as string

const searchClient = instantMeiliSearch(
  SEARCH_API,
  process.env.MEILISEARCH_TOKEN,
  // {
  //   keepZeroFacets: true
  // }
);

export default searchClient