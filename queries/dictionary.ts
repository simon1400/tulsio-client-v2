import { gql } from "@apollo/client";

export const getAllDictionaries = gql`
  query getDictionary($locale: I18NLocaleCode!) {
    dictionaries(locale: $locale) {
      data {
        attributes {
          title
          content
          image{
            data{
              attributes{
                url
              }
            }
          }
          button{
            text
            link
          }
        }
      }
    }
  }
`

export const getDictionaryPage = gql`
  query getDictionary($locale: I18NLocaleCode!) {
    dictionaryPage(locale: $locale) {
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