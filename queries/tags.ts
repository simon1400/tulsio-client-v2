import { gql } from "@apollo/client";

export const getTagNav = gql`
  query tagNav {
    labels {
      data {
        attributes {
          title
          slug
          articles{
            data{
              attributes{
                publishedAt
              }
            }
          }
        }
      }
    }
  }
`

export const getTag = gql`
  query tag( $slug: String! ) {
    labels(filters: { slug: { eq: $slug } }) {
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