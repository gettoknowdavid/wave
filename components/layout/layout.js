import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../../utils/seo';
import Header from '../organisms/header/header';

function Layout({ seo, children }) {
  return (
    <>
      <SEO seo={seo} />
      <Header />
      <main style={{ maxWidth: '1440px', margin: '0px auto', minHeight: '100vh' }}>
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  seo: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  seo: {},
};

export default Layout;
