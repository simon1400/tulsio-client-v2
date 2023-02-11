import { gql } from "@apollo/client";

export const getFaq = gql`
  query getFaq {
    faqPage {
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
  query getAllFaq {
    faqs(sort: "rank:asc") {
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