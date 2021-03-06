import React from 'react';
import PropTypes from 'prop-types';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap';
import currency from '../../../utils/currency';

function ProductItem({ product }) {
  const [css, theme] = useStyletron();

  const imageRef = React.useRef();

  React.useEffect(() => {
    gsap.fromTo(
      '.image',
      { filter: 'blur(100px)', duration: 1 },
      { filter: 'blur(0px)', duration: 1.2 },
    );
  }, []);

  return (
    <div className={css({ position: 'relative', height: 'calc(100vh - 20rem)' })}>
      <img
        ref={imageRef}
        className="image"
        src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
        alt={product.attributes.image.data.attributes.alternativeText}
        style={{
          height: '100%',
          width: '100%',
          display: 'block',
          objectFit: 'fill',
        }}
      />
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
          textDecorationLine: 'line-through',
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
