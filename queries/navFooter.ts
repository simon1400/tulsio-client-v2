import { gql } from "@apollo/client";

const navFooter = gql`
  query {
    navigation {
      data {
        attributes {
          footer {
            item {
              name
              link
            }
          }
          socNav {
            item {
              name
              link
              background
              icon {
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
  }
`

export default navFooter