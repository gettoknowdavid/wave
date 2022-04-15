import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import styletron from '../styletron';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <Component {...pageProps} />
    </StyletronProvider>
  );
}

export default MyApp;
