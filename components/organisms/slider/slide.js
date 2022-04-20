import React from 'react';
import PropTypes from 'prop-types';
import { useStyletron } from 'baseui';
import currency from '../../../utils/currency';

function Slide({ product }) {
  const { name, price, image } = product.attributes;
  const { alternativeText, url } = image.data.attributes;
  const [css, theme] = useStyletron();

  return (
    <li className={css({
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'flex-end',
      height: '100%',
      width: '100%',
      backgroundColor: theme.colors.mono100,
      paddingRight: '80px',
    })}
    >
      <div className={css({
        position: 'absolute',
        bottom: '3rem',
        left: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: '20rem',
      })}
      >
        <p className={css({
          ...theme.typography.ParagraphLarge,
          marginTop: 0,
          marginBottom: '1rem',
          textTransform: 'uppercase',
          fontWeight: 500,
          letterSpacing: '0.8px',
          lineHeight: 1.2,
          fontSize: '1.667rem',
          textAlign: 'left',
          width: '100%',
        })}
        >
          {name}
        </p>
        <p className={css({
          ...theme.typography.ParagraphLarge,
          marginTop: 0,
          marginBottom: 0,
          textTransform: 'uppercase',
          fontWeight: 500,
          letterSpacing: '1px',
          lineHeight: 1.2,
          fontSize: '1.5rem',
          textAlign: 'left',
          width: '100%',
        })}
        >
          {currency.format(price).replace(',', ' ')}
        </p>
      </div>
      <img
        src={`http://localhost:1337${url}`}
        alt={alternativeText}
        className={css({
          float: 'right',
          display: 'block',
          width: '720px',
          height: '100%',
          objectFit: 'cover',
          ObjectPosition: 'right',
        })}
      />
    </li>
  );
}

Slide.propTypes = {
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

export default React.memo(Slide);
