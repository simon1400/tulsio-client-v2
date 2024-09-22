import { gql } from '@apollo/client'

const navFooter = gql`
  query NavFooter($locale: I18NLocaleCode!) {
    navigation(locale: $locale) {
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
