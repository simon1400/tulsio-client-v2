import { gql } from "@apollo/client";

export const getAllArticles = gql`
  query getAllArticles {
    articles(sort: "publishedAt:desc") {
      data {
        attributes {
          title
          slug
          perex
          background
          showShortImg
          labels {
            data {
              attributes {
                title
                navTitle
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
`;

export const getArticlesCategory = gql`
  query getArticlesCategory($slug: String!) {
    articles(
      filters: { categories: { slug: { eq: $slug } } },
      sort: "publishedAt:desc"
    ) {
      data {
        attributes {
          title
          slug
          perex
          background
          showShortImg
          labels {
            data {
              attributes {
                title
                navTitle
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
`;

export const getArticlesTag = gql`
  query getArticlesTag($slug: String!) {
    articles(
      filters: { labels: { slug: { eq: $slug } } }
      sort: "publishedAt:desc"
    ) {
      data {
        attributes {
          title
          slug
          perex
          background
          showShortImg
          labels {
            data {
              attributes {
                title
                navTitle
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
`;

export const getArticle = gql`
  query getArticle($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          perex
          background
          showShortImg
          updatedAt
          meta {
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          labels {
            data {
              attributes {
                title
                navTitle
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
          chapters(pagination: { pageSize: 50 }) {
            title
            text
            idTarget
            galery {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            banners_static {
              data {
                attributes {
                  link
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
            button {
              link
              text
            }
          }
          authors {
            data {
              attributes {
                name
                description
                image {
                  data {
                    attributes {
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
`;

export const getArticleBase = gql`
  query getArticleBase($slug: String!) {
    articlesBase(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          perex
          meta {
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          chapters(pagination: { pageSize: 50 }) {
            title
            text
            galery {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            banners_static {
              data {
                attributes {
                  link
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
            button {
              link
              text
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
`;
