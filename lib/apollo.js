import { useMemo } from 'react';
import {
  ApolloClient, from, HttpLink, InMemoryCache,
} from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { onError } from '@apollo/client/link/error';

let apolloClient;

const API_URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:1337';

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`, // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({
      path, extensions,
    }) => {
      // eslint-disable-next-line no-console
      console.log(
        `[GraphQL error]:   Extensions: ${extensions}, Path: ${path}`,
      );
      // if (graphQLErrors || networkError) {
      //   cache.writeQuery({
      //     data: {
      //       error: {
      //         __typename: 'error',
      //         message: graphQLErrors[0].extensions.exception.data,
      //         // statusCode: networkError.statusCode,
      //       },
      //     },
      //   });
      // }
      // const { message } = extensions.exception.data;
      // console.log(message[0].messages[0].message);
      // throw new Error(message[0].messages[0]);
    });
  }

  // eslint-disable-next-line no-console
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

function createApolloClient() {
  return new ApolloClient({

    ssrMode: typeof window === 'undefined',
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState = null) {
  // eslint-disable-next-line no-underscore-dangle
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
