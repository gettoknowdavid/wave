import React from 'react';
import { useStyletron } from 'baseui';
import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import Image from 'next/image';
import Layout from '../components/layout/layout';
import { initializeApollo } from '../lib/apollo';
import FeaturedList from '../components/organisms/featured-list/featured-list';

function Home({ products }) {
  const [css, theme] = useStyletron();

  const sideBarProps = {
    overrides: {
      Block: {
        style: ({ $theme }) => ({
          borderRightStyle: 'solid',
          borderRightColor: $theme.colors.mono400,
          borderRightWidth: '0.208rem',
          width: $theme.sizing.scale3200,
          flexGrow: 0,
          height: 'calc(100vh - 20rem)',
          backgroundColor: 'mono100',
          display: 'grid',
          flexDirection: 'column',
          // alignItems: 'flex-end',
          alignContent: 'stretch',
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
      <FlexGrid flexGridColumnCount={2}>
        <FlexGridItem {...sideBarProps}>
          <div className={css({ display: 'flex', flexDirection: 'column' })}>
            <ul className={css({
              display: 'flex',
              flexDirection: 'column',
              padding: '3rem 1.3rem',
              height: '50%',
            })}
            >
              <li className={css({
                textTransform: 'lowercase',
                fontWeight: 700,
                marginBottom: '3rem',
                cursor: 'pointer',
                transitionProperty: 'all',
                transitionDuration: theme.animation.timing800,
                ':hover': { color: theme.colors.mono500 },
              })}
              >
                Sale
              </li>
              <li className={css({
                textTransform: 'lowercase',
                fontWeight: 700,
                marginBottom: '3rem',
                cursor: 'pointer',
                transitionProperty: 'all',
                transitionDuration: theme.animation.timing800,
                ':hover': { color: theme.colors.mono500 },
              })}
              >
                New
              </li>
            </ul>
            <ul className={css({
              margin: 0,
              padding: '1.6rem 3rem',
              justifyContent: 'space-between',
              height: '50%',
              display: 'flex',
              alignItems: 'flex-end',
            })}
            >
              <li className={css({
                cursor: 'pointer',
                transitionProperty: 'all',
                transitionDuration: theme.animation.timing800,
                ':hover': { opacity: 0.3 },
              })}
              >
                <Image src="/back.png" alt="Back Arrow" height="18px" width="18px" />
              </li>
              <li className={css({
                cursor: 'pointer',
                transitionProperty: 'all',
                transitionDuration: theme.animation.timing800,
                ':hover': { opacity: 0.3 },
              })}
              >
                <Image src="/forward.png" alt="Next Arrow" height="18px" width="18px" />
              </li>
            </ul>
          </div>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
          <FeaturedList products={products} />
        </FlexGridItem>
      </FlexGrid>
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
