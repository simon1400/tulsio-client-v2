import { gql } from "@apollo/client";

export const getFaq = gql`
  query getFaq($locale: I18NLocaleCode!) {
    faqPage(locale: $locale) {
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
                }
              }
            }
          }
        }
      }
    }
  }
`

export const getAllFaqs = gql`
  query getAllFaq($locale: I18NLocaleCode!) {
    faqs(sort: "rank:asc", locale: $locale) {
      data {
        attributes {
          title
          answer
          rank
        }
      }
    }
  }
`