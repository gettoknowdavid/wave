import React from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

function Logo() {
  const onLogoEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { letterSpacing: '0.8rem', fontWeight: 800 });
  };

  const onLogoLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { letterSpacing: 0, fontWeight: 700 });
  };
  return (
    <Link href="/" passHref>
      <span
        onMouseEnter={onLogoEnter}
        onMouseLeave={onLogoLeave}
        style={{
          position: 'absolute',
          zIndex: 3,
          top: 0,
          left: 0,
          marginTop: '1.33rem',
          marginRight: '1.33rem',
          marginLeft: '1.33rem',
          fontSize: '1.4rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          cursor: 'pointer',
        }}
      >
        Wave
      </span>
    </Link>
  );
}

export default Logo;
