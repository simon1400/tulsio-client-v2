import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider, DefaultOptions } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie'
import { ReactNode } from "react";

export function getStrapiURL(path = "") {
  return `${
    process.env.APP_API || "http://localhost:1311"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

const APP_API = process.env.APP_API

const httpLink = createHttpLink({
  uri: `${APP_API}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
});

export const WithGraphQL = ({ children }: any) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
