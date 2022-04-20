import React from 'react';
import PropTypes from 'prop-types';
import { useStyletron } from 'baseui';

function Dot({ active }) {
  const [css, theme] = useStyletron();
  return (
    <span className={css({
      height: '7px',
      width: '7px',
      marginLeft: '10px',
      cursor: 'pointer',
      borderRadius: '50%',
      backgroundColor: active ? theme.colors.mono700 : theme.colors.mono300,
    })}
    />
  );
}

Dot.propTypes = {
  active: PropTypes.bool.isRequired,
};

const MemoDot = React.memo(Dot);

function Dots({ products, activeSlide }) {
  const [css] = useStyletron();

  return (
    <div className={css({
      position: 'absolute',
      bottom: '3rem',
      right: '2rem',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    })}
    >
      {products.map((product, index) => (
        <MemoDot key={product.id} active={activeSlide === index} />
      ))}
    </div>
  );
}

Dots.propTypes = {
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
  activeSlide: PropTypes.number.isRequired,
};

export default Dots;
