/* eslint-disable react/prop-types */
import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { ApolloProvider } from '@apollo/client';
import styletron from '../styletron';
import WaveTheme from '../theme';
import { useApollo } from '../lib/apollo';
import '../styles/globals.css';

function WaveApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <StyletronProvider value={styletron}>
        <BaseProvider theme={WaveTheme}>
          {getLayout(<Component {...pageProps} />)}
        </BaseProvider>
      </StyletronProvider>
    </ApolloProvider>
  );
}

export default WaveApp;
