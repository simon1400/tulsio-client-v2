import { gql } from '@apollo/client'

const blogpageQuery = gql`
  query BlogPage {
    blogPage {
      data {
        attributes {
          title
          meta {
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export default blogpageQuery
