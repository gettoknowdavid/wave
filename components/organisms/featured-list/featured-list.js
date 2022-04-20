import React from 'react';
import PropTypes from 'prop-types';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import ProductItem from '../../molecules/product-item/product-item';

function FeaturedList({ products }) {
  const productItemProps = {
    backgroundColor: 'mono100',
    overrides: {
      Block: {
        style: ({ $theme }) => ({
          // borderRightStyle: 'solid',
          // borderRightColor: $theme.colors.mono400,
          // borderRightWidth: '0.208rem',
          borderLeftStyle: 'solid',
          borderLeftColor: $theme.colors.mono400,
          borderLeftWidth: '0.208rem',
          flexGrow: 0,
        }),
      },
    },
  };

  return (
    <FlexGrid flexGridColumnCount={3}>
      {products.slice(0, 3).map((product) => (
        <FlexGridItem key={product.id} {...productItemProps}>
          <ProductItem product={product} />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
}

FeaturedList.propTypes = {
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
              url: PropTypes.string,
              alternativeText: PropTypes.string,
            }),
          }),
        }),
      }),
    }),
  ).isRequired,
};

export default FeaturedList;
