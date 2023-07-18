import { gql } from "@apollo/client";

const getLocales = gql`
  query getLocales {
    i18NLocales {
      data {
        attributes {
          name
          code
        }
      }
    }
  }
`

export default getLocales