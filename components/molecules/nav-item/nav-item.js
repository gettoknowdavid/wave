/* eslint-disable @next/next/no-img-element,no-return-assign,react/forbid-prop-types */
import React from 'react';
import { useStyletron } from 'baseui';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import { StyledNavItem } from './styled-components';

function NavItem({ item, height }) {
  const [, theme] = useStyletron();
  const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === '/';
  const isCurrent = pathname === item.slug;

  let imageRf = React.useRef();

  React.useEffect(() => {
    gsap.set(imageRf, { display: 'none' });

    if (isCurrent) {
      gsap.to(`.${item.title}`, { paddingBottom: '2.8rem', color: theme.colors.mono600 });
    } else {
      gsap.to(`.${item.title}`, { paddingBottom: '1.4rem', color: theme.colors.mono900 });
    }
  });

  const onLinkEnter = () => {
    gsap.to(`.${item.title}`, { paddingBottom: '2.8rem' });
    if (isHome) {
      gsap.fromTo(
        imageRf,
        {
          filter: 'blur(4px)', opacity: 0, display: '', scale: 1.5, x: 200,
        },
        {
          filter: 'blur(0px)', opacity: 1, display: 'block', scale: 1, x: 0,
        },
      );
    }
  };

  const onLinkLeave = () => {
    gsap.to(`.${item.title}`, { paddingBottom: '1.4rem' });
    if (isHome) {
      gsap.to(imageRf, {
        filter: 'blur(10px)', opacity: 0, display: '', scale: 1, x: 0,
      });
    }
  };

  return (
    <StyledNavItem
      $isHome={isHome}
      $height={height}
      className="link"
      onClick={() => router.push(`${item.slug}`)}
      onMouseEnter={isCurrent ? () => {} : onLinkEnter}
      onMouseLeave={isCurrent ? () => {} : onLinkLeave}
    >
      <span
        className={item.title}
        style={{
          position: 'absolute',
          zIndex: 4,
          bottom: 0,
          paddingBottom: '1.4rem',
          paddingLeft: '1.333rem',
        }}
      >
        {item.title}
      </span>
      <div style={{ overflow: 'hidden', height: '100%', width: '100%' }}>
        <img
          alt={item.title}
          src={item.imageUrl}
          ref={(e) => (imageRf = e)}
          prefix="/"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            overflow: 'hidden',
            objectPosition: 'right',
            opacity: 0,
          }}
        />
      </div>
    </StyledNavItem>
  );
}

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  height: PropTypes.string.isRequired,
};

export default NavItem;
