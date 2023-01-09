import { gql } from "@apollo/client";

const getCategory = gql`
  query category($slug:String!) {
    categories(filters: {slug:{eq:$slug}}) {
      data {
        attributes {
          title
          slug
          meta
        }
      }
    }
  }
`

export default getCategory