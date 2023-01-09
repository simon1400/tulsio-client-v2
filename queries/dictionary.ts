import { gql } from "@apollo/client";

export const getAllDictionaries = gql`
  query getDictionary {
    dictionaries {
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
  query getDictionary {
    dictionaryPage {
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