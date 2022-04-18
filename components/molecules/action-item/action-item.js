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
    <StyledActionItem>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={goToAction}
        onClick={goToAction}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={(e) => (item.refId = e)}
        data-value={item.refId}
        className={item.title}
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '1.4rem',
          paddingLeft: '1.333rem',
        }}
      >
        {item.title}
      </div>
    </StyledActionItem>
  );
}

ActionItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ActionItem;
