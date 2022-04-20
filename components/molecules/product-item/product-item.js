import React from 'react';
import PropTypes from 'prop-types';
import { useStyletron } from 'baseui';
import currency from '../../../utils/currency';

function ProductItem({ product }) {
  const [css, theme] = useStyletron();
  return (
    <div className={css({ position: 'relative' })}>
      <div>
        <img
          src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
          alt={product.attributes.image.data.attributes.alternativeText}
          className={css({
            height: 'calc(100vh - 22rem)',
            width: '100%',
            objectFit: 'contain',
          })}
        />
      </div>
      <div className={css({
        position: 'absolute',
        zIndex: 3,
        left: 0,
        bottom: 0,
        paddingBottom: '1.5rem',
        paddingLeft: '1.5rem',
      })}
      >
        <p className={css({
          ...theme.typography.ParagraphXSmall,
          marginTop: 0,
          marginBottom: '1.5rem',
          fontSize: '0.87rem',
          fontWeight: 600,
          maxWidth: '8rem',
          lineHeight: 1.4,
        })}
        >
          {product.attributes.name}
        </p>
        <p className={css({
          ...theme.typography.ParagraphXSmall,
          marginTop: 0,
          fontSize: '11px',
          fontWeight: 600,
          lineHeight: 1,
          color: theme.colors.mono500,
          textDecoration: 'line-through',
          textDecorationThickness: '2px',
          textDecorationColor: theme.colors.mono600,
        })}
        >
          {currency.format(product.attributes.price).replace(',', ' ')}
        </p>
        <p className={css({
          ...theme.typography.ParagraphLarge,
          marginTop: 0,
          marginBottom: 0,
          fontWeight: 600,
          lineHeight: 1,
        })}
        >
          {currency.format(product.attributes.price).replace(',', ' ')}
        </p>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
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
  }).isRequired,
};

export default ProductItem;
