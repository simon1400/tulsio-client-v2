import { gql } from "@apollo/client";

const calculatorQuery = gql`
  query Calculator($locale: I18NLocaleCode!) {
    calculator(locale: $locale) {
      data {
        attributes {
          title
          description
          tutorial {
            title
            description
          }
          tutorialItem{
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
          commonlyUsed {
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
          alert {
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

export default calculatorQuery