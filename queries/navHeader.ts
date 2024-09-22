import { gql } from '@apollo/client'

const navHeader = gql`
  query NavHeader($locale: I18NLocaleCode!) {
    navigation(locale: $locale) {
      data {
        attributes {
          topNav {
            item {
              name
              link
            }
          }
        }
      }
    }
  }
`

export default navHeader
