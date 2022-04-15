/* eslint-disable react/prop-types */
import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, LightTheme } from 'baseui';
import styletron from '../styletron';
import '../styles/globals.css';

function WaveApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        {getLayout(<Component {...pageProps} />)}
      </BaseProvider>
    </StyletronProvider>
  );
}

export default WaveApp;
