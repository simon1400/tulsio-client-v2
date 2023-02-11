import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const SEARCH_API = "http://localhost:7700"

const searchClient = instantMeiliSearch(
  SEARCH_API,
  process.env.MEILISEARCH_TOKEN,
  {
    keepZeroFacets: true
  }
);

export default searchClient