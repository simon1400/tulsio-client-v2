import { gql } from '@apollo/client'

export const productQuery = gql`
  query product($slug: String!, $locale: I18NLocaleCode!) {
    products(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        id
        attributes {
          title
          slug
          description
          images {
            data {
              attributes {
                url
              }
            }
          }
          link
          shopCategories {
            data {
              attributes {
                title
                slug
              }
            }
          }
          sellers {
            data {
              attributes {
                title
                slug
                logo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                description
                rating
              }
            }
          }
          customId
          availability
          brand
          gtin
          mpn
          price
          labels {
            data {
              id
              attributes {
                title
                color
              }
            }
          }
          products {
            data {
              attributes {
                title
                slug
                images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                price
                labels {
                  data {
                    attributes {
                      color
                      title
                    }
                  }
                }
                sellers {
                  data {
                    attributes {
                      rating
                    }
                  }
                }
                shopCategories {
                  data {
                    attributes {
                      title
                      slug
                      description
                    }
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

export const productsQuery = gql`
  query product {
    products {
      data {
        attributes {
          title
          slug
          images {
            data {
              attributes {
                url
              }
            }
          }
          price
          labels {
            data {
              attributes {
                color
                title
              }
            }
          }
          shopCategories {
            data {
              attributes {
                title
                slug
                description
              }
            }
          }
          sellers {
            data {
              attributes {
                rating
              }
            }
          }
        }
      }
    }
  }
`
