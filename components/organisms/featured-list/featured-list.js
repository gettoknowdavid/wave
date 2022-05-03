import React from 'react';
import PropTypes from 'prop-types';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { gsap } from 'gsap';
import ProductItem from '../../molecules/product-item/product-item';

function FeaturedList({ products, isSliced }) {
  const productListRef = React.useRef();

  React.useEffect(() => {
    gsap.fromTo(productListRef.current.children, {
      y: 400,
      transformOrigin: 'top',
      duration: 1,
      stagger: { each: 0.2, ease: 'sine.inOut', yoyo: true },
    }, {
      y: 0,
      transformOrigin: 'top',
      duration: 1,
      stagger: { each: 0.2, ease: 'sine.inOut', yoyo: true },
    });
  }, []);

  const productItemProps = {
    backgroundColor: 'mono100',
    overrides: {
      Block: {
        style: ({ $theme }) => ({
          marginTop: '-0.208rem',
          borderTopStyle: 'solid',
          borderTopColor: $theme.colors.mono400,
          borderTopWidth: '0.208rem',
          borderRightWidth: '0.208rem',
          borderRightStyle: 'solid',
          borderRightColor: $theme.colors.mono400,
          borderBottomStyle: 'solid',
          borderBottomColor: $theme.colors.mono400,
          borderBottomWidth: '0.208rem',
          flexGrow: 0,
        }),
      },
    },
  };

  const productList = isSliced ? products.slice(0, 3) : products;

  return (
    <FlexGrid flexGridColumnCount={3} ref={productListRef}>
      {productList.map((product) => (
        <FlexGridItem key={product.id} {...productItemProps}>
          <ProductItem product={product} />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
}

FeaturedList.propTypes = {
  isSliced: PropTypes.bool,
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

FeaturedList.defaultProps = {
  isSliced: true,
};

export default FeaturedList;
