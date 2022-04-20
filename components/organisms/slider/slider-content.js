import React from 'react';
import PropTypes from 'prop-types';
import { useStyletron } from 'baseui';

function SliderContent({
  children, width, translate, transition,
}) {
  const [css] = useStyletron();

  return (
    <div className={css({
      transform: `translateX(-${translate}px)`,
      transition: `transform ease-out ${transition}s`,
      height: '100%',
      width: '100%',
      display: 'flex',
    })}
    >
      {children}
    </div>
  );
}

SliderContent.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  translate: PropTypes.string.isRequired,
  transition: PropTypes.string.isRequired,
};

export default SliderContent;
