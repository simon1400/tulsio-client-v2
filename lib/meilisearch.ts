import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const SEARCH_API = "https://meilisearch-tulsio-simon1400.koyeb.app/"

const searchClient = instantMeiliSearch(
  SEARCH_API,
  "slukhdfglsjhfgilusng;shufadljnriluhgnsv;ldfijisfdukgjasdjf;gosfg",
  {
    keepZeroFacets: true
  }
);

export default searchClient