import { gql } from "@apollo/client";

export const getCategoryNav = gql`
  query categoryNav {
    categories {
      data {
        attributes {
          title
          navTitle
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
          navTitle
          shortTitle
          description
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