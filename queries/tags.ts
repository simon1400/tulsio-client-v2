import { gql } from '@apollo/client'

export const getTagNav = gql`
  query tagNav($locale: I18NLocaleCode!) {
    labels(locale: $locale) {
      data {
        attributes {
          title
          navTitle
          slug
          articles {
            data {
              attributes {
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
  query tag($slug: String!, $locale: I18NLocaleCode!) {
    labels(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        attributes {
          title
          navTitle
          shortTitle
          description
          meta {
            title
            description
            image {
              data {
                attributes {
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
