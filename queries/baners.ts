import { gql } from "@apollo/client";

const getBaners = gql`
  query getBaners($query: [BanerFiltersInput!]!, $locale: I18NLocaleCode!) {
    baners(filters: { or: $query }, locale: $locale) {
      data {
        attributes {
          title
          darkMode
          link
          position
          image{
            data{
              attributes{
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`

export default getBaners