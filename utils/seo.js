import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

function SEO({ title, description }) {
  const appTitle = title === null ? `${description}` : `${title} • ${description}`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" key="viewport" />
      <meta name="facebook-domain-verification" content="p161jqqpmoklnl5nsem3gdpdt9ww0w" />

      <title>{appTitle}</title>
      <meta property="og:title" content={appTitle} />
      <meta name="twitter:title" content={appTitle} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta name="robots" content="all" />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: 'Wave',
  description: '',
};

export default SEO;
