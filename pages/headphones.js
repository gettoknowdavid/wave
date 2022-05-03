import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { useStyletron } from 'baseui';
import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import { initializeApollo } from '../lib/apollo';
import FeaturedList from '../components/organisms/featured-list/featured-list';

function Headphones({ products }) {
  const [css, theme] = useStyletron();

  console.log(products);

  const sideBarProps = {
    overrides: {
      Block: {
        style: ({ $theme }) => ({
          borderRightStyle: 'solid',
          borderRightColor: $theme.colors.mono400,
          borderRightWidth: '0.208rem',
          width: '18rem',
          flexGrow: 0,
          height: 'calc(100vh - 5rem)',
          backgroundColor: 'mono100',
          display: 'grid',
          flexDirection: 'column',
          alignContent: 'stretch',
        }),
      },
    },
  };

  const itemProps = {
    backgroundColor: 'mono100',
    overrides: { Block: { style: ({ height: 'calc(100vh - 5rem)' }) } },
  };

  return (
    <div className={css({ maxWidth: '1440px', height: 'calc(100vh - 5rem)', overflow: 'auto' })}>
      <FlexGrid flexGridColumnCount={2}>
        <FlexGridItem {...sideBarProps}>s</FlexGridItem>
        <FlexGridItem {...itemProps}>
          <FeaturedList products={products} isSliced={false} />
        </FlexGridItem>
      </FlexGrid>
    </div>
  );
}

Headphones.getLayout = function getLayout(page) {
  return (
    <Layout seo={{ title: 'Wave Headphones', description: 'Official Wave Store' }}>
      {page}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const apollo = initializeApollo();
  const { data } = await apollo.query({
    query: gql`
      query HeadphonesQuery {
        products {
          data {
            id
            attributes {
              name
              slug
              price
              image {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
              category {
                data { 
                  id
                  attributes {
                    name
                    slug
                  }
                }                
              }
            }
          }
        }
      }
    `,
  });

  // const products = data.products.data.filter((p) => p.attributes.category.data.attributes.slug === 'headphones');
  return {
    props: { products: data.products.data },
  };
};

Headphones.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      attributes: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.shape({
          data: PropTypes.shape({
            attributes: PropTypes.shape({
              name: PropTypes.string,
              alternativeText: PropTypes.string,
            }),
          }),
        }),
      }),
    }),
  ).isRequired,
};

export default Headphones;
