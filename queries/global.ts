import { gql } from '@apollo/client'

const globalQuery = gql`
  query getGlobal($locale: I18NLocaleCode!) {
    global(locale: $locale) {
      data {
        attributes {
          newsletter {
            title
            cta {
              link
              text
            }
          }
          additionalContent
        }
      }
    }
  }
`

export default globalQuery
