import { gql } from "@apollo/client";

export const getCategoryNav = gql`
  query categoryNav($locale: I18NLocaleCode!) {
    categories(locale: $locale) {
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
  query category( $slug: String!, $locale: I18NLocaleCode! ) {
    categories(filters: { slug: { eq: $slug } }, locale: $locale) {
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

export const getCatalogNav = gql`
  query catalogNav($locale: I18NLocaleCode!) {
    shopCategories(locale: $locale) {
      data {
        attributes {
          navTitle
          slug
        }
      }
    }
  }
`

export const getShopCategory = gql`
  query shopCategory( $slug: String!, $locale: I18NLocaleCode! ) {
    shopCategories(filters: { slug: { eq: $slug } }, locale: $locale) {
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
