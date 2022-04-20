import React from 'react';
import PropTypes from 'prop-types';
import { useStyletron } from 'baseui';
import Slide from './slide';
import Dots from './dots';

function Slider({ products }) {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
        height: 'calc(100vh - 22rem)',
        maxWidth: '1440px',
        width: '100%',
        textAlign: 'right',
        float: 'right',
      })}
    >
      <div
        className={css({
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
        })}
      >
        {products.map((product) => (<Slide key={product.id} product={product} />))}
      </div>

      <Dots products={products} activeSlide={0} />
    </div>
  );
}

Slider.propTypes = {
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

export default Slider;
