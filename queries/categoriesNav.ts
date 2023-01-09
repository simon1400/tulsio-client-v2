import { gql } from "@apollo/client";

const getCategoryNav = gql`
  query categoryNav {
    categories {
      data {
        attributes {
          title
          slug
        }
      }
    }
  }
`

export default getCategoryNav