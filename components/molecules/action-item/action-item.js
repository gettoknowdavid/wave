/* eslint-disable react/forbid-prop-types,no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import { useStyletron } from 'baseui';
import { StyledActionItem } from './styled-components';

function ActionItem({ item }) {
  const [, theme] = useStyletron();
  const { pathname, push } = useRouter();
  const isCurrent = pathname === item.slug;

  const goToAction = () => push(item.slug);

  React.useEffect(() => {
    if (isCurrent) {
      gsap.to(`.${item.title}`, { paddingBottom: '2.8rem', color: theme.colors.mono600 });
    } else {
      gsap.to(`.${item.title}`, { paddingBottom: '1.4rem', color: theme.colors.mono900 });
    }
  }, [pathname, isCurrent]);

  const onMouseEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { paddingBottom: '2.8rem' });
  };

  const onMouseLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { paddingBottom: '1.4rem' });
  };

  return (
    <StyledActionItem
      className={item.title}
      onClick={goToAction}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={{ display: 'flex' }}>
        {item.title}
        {item.title === 'Cart' ? (
          <sup style={{ fontSize: '10px', alignSelf: 'flex-start', marginLeft: '4px' }}>
            3
          </sup>
        ) : null}
      </div>
    </StyledActionItem>
  );
}

ActionItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ActionItem;
