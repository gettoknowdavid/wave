import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Wave by David</title>
      </Head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
