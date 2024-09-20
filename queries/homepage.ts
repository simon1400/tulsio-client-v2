import { gql } from "@apollo/client";

const homepageQuery = gql`
  query Homepage($locale: I18NLocaleCode!) {
    homepage(locale: $locale) {
      data {
        attributes {
          title
          articles (filters: {article: {publishedAt: {notNull: true}}}) {
            article {
              data {
                attributes {
                  title
                  perex
                  slug
                  background
                  showShortImg
                  image {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                  categories {
                    data {
                      attributes {
                        title
                        slug
                      }
                    }
                  }
                  labels {
                    data {
                      attributes {
                        title
                        navTitle
                        slug
                        color
                      }
                    }
                  }
                }
              }
            }
          }
          meta {
            title
            description
            image{
              data{
                attributes{
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

export default homepageQuery