import { gql } from "@apollo/client";

export const getCategoryNav = gql`
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

export const getCategory = gql`
  query category( $slug: String! ) {
    categories(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          meta{
            title
            description
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
  }
`