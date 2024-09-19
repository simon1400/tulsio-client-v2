import { gql } from "@apollo/client";

export const sellerQuery = gql`
  query seller($slug: String!, $locale: I18NLocaleCode!) {
    sellers(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        id
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
          web
          shopCategories {
            data {
              attributes {
                title
                slug
              }
            }
          }
          galery {
            data {
              attributes {
                url
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
              }
            }
          }
        }
      }
    }
  }
`;

export const sellersQuery = gql`
  query seller {
    sellers {
      data {
        id
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
          web
          shopCategories {
            data {
              attributes {
                title
                slug
              }
            }
          }
          galery {
            data {
              attributes {
                url
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
              }
            }
          }
        }
      }
    }
  }
`;
