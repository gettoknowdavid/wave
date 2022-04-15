import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../../utils/seo';

function Layout({ seo, children }) {
  return (
    <>
      <SEO seo={seo} />
      <main>
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
