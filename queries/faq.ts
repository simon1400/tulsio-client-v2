import { gql } from "@apollo/client";

const getFaq = gql`
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

export default getFaq