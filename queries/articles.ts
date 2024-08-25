import { gql } from "@apollo/client";

export const getAllArticles = gql`
  query getAllArticles($locale: I18NLocaleCode!) {
    articles(sort: "publishedAt:desc", locale: $locale) {
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
  query getArticlesCategory($slug: String!, $locale: I18NLocaleCode!) {
    articles(
      filters: { categories: { slug: { eq: $slug } } },
      sort: "publishedAt:desc",
      locale: $locale
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
  query getArticlesTag($slug: String!, $locale: I18NLocaleCode!) {
    articles(
      filters: { labels: { slug: { eq: $slug } } }
      sort: "publishedAt:desc"
      locale: $locale
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
  query getArticle($slug: String!, $locale: I18NLocaleCode!) {
    articles(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        attributes {
          title
          slug
          perex
          background
          showShortImg
          updatedAt
          audio {
	    data {
	      attributes {
	        url
	      }
       	    }
          }
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
          categories(pagination: {limit: 1}) {
            data {
              attributes {
                articles(pagination: {limit: 4}){
                  data{
		    attributes{
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
  query getArticleBase($slug: String!, $locale: I18NLocaleCode!) {
    articlesBase(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        attributes {
          title
          slug
          perex
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
