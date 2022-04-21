import React from 'react';
import { useStyletron } from 'baseui';
import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import Layout from '../components/layout/layout';
import { initializeApollo } from '../lib/apollo';
import FeaturedList from '../components/organisms/featured-list/featured-list';

function Home({ products }) {
  const [css, theme] = useStyletron();

  const sideBarProps = {
    backgroundColor: 'mono100',
    overrides: {
      Block: {
        style: ({ $theme }) => ({
          borderRightStyle: 'solid',
          borderRightColor: $theme.colors.mono400,
          borderRightWidth: '0.208rem',
          width: $theme.sizing.scale3200,
          flexGrow: 0,
          height: 'calc(100vh - 20rem)',
        }),
      },
    },
  };

  const itemProps = {
    backgroundColor: 'mono100',
    overrides: { Block: { style: ({ height: 'calc(100vh - 20rem)' }) } },
  };

  return (
    <div className={css({ maxWidth: '1440px', height: 'calc(100vh - 20rem)', overflow: 'hidden' })}>
      {/* <Slider products={products} /> */}
      <div className={css({ height: '100%' })}>
        <FlexGrid flexGridColumnCount={2}>
          <FlexGridItem {...sideBarProps}>S</FlexGridItem>
          <FlexGridItem {...itemProps}>
            <FeaturedList products={products} />
          </FlexGridItem>
        </FlexGrid>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout seo={{ title: 'Wave', description: 'Official Wave Store' }}>
      {page}
    </Layout>
  );
};

export async function getStaticProps() {
  const apollo = initializeApollo();
  const { data } = await apollo.query({
    query: gql`
      query SlideShowQuery {
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
            }
          }
        }
      }
    `,
  });

  return {
    props: { products: data.products.data },
  };
}

Home.propTypes = {
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

export default Home;
