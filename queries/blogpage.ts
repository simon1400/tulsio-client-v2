import { gql } from '@apollo/client'

export const blogpageQuery = gql`
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
export const tagpageQuery = gql`
  query TagsPage {
    tagsPage {
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
