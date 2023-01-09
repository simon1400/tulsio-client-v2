import { gql } from "@apollo/client";

export const getAllArticles = gql`
  query getAllArticles {
    articles {
      data {
        attributes {
          title
          slug
          perex
          background
          labels{
            data{
              attributes{
                title
                slug
              }
            }
          }
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`

export const getArticlesCategory = gql`
  query getArticlesCategory($slug: String!) {
    articles(filters: { 
      categories: {
        slug: { 
          eq: $slug 
        }
      }
    }) {
      data {
        attributes {
          title
          slug
          perex
          background
          labels{
            data{
              attributes{
                title
                slug
                color
              }
            }
          }
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`

export const getArticle = gql`
  query getArticle($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          perex
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
          labels{
            data{
              attributes{
                title
                slug
                color
              }
            }
          }
          categories {
            data {
              attributes {
                slug
                title
              }
            }
          }
          chapters(pagination: { pageSize: 50 }){
            title
            text
            galery{
              data{
                attributes{
                  url
                  alternativeText
                }
              }
            }
            button{
              link
              text
            }
            baner
          }
          authors{
            data{
              attributes{
                name
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
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`