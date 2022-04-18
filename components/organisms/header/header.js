/* eslint-disable no-return-assign */
import React from 'react';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledActionItem, StyledNavItem } from './styled-components';

const NAV_LIST = [
  {
    id: '0-0', refId: 'ref0-0', title: 'Menu', slug: '/menu', isAction: true, imageUrl: '',
  },
  {
    id: '0-1', refId: 'ref0-1', title: 'Search', slug: '/search', isAction: true, imageUrl: '',
  },
  {
    id: '0-2', refId: 'ref0-2', title: 'Cart', slug: '/cart', isAction: true, imageUrl: '',
  },
  {
    id: '0-3', refId: 'ref0-3', title: 'Headphones', slug: '/headphones', isAction: false, imageUrl: 'ath-adx5000_03.png',
  },
  {
    id: '0-4', refId: 'ref0-4', title: 'Speakers', slug: '/speakers', isAction: false, imageUrl: 'palatial-hero.png',
  },
  {
    id: '0-5', refId: 'ref0-5', title: 'Microphones', slug: '/microphones', isAction: false, imageUrl: 'at2050_02a.png',
  },
];

function Header() {
  const [css, theme] = useStyletron();
  const router = useRouter();
  const { pathname } = router;
  const nl = React.useRef();
  const isHome = pathname === '/';

  React.useEffect(() => {
    gsap.to(nl.current.children, {
      height: isHome ? '25rem' : '8.333rem',
      transformOrigin: 'top',
      duration: 0.65,
      stagger: {
        each: 0.2,
        ease: 'sine.inOut',
        yoyo: true,
      },
    });
  }, [pathname]);

  const onLogoEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { letterSpacing: '0.8rem', fontWeight: 800 });
  };

  const onLogoLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { letterSpacing: 0, fontWeight: 700 });
  };

  return (
    <header
      className={css({
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        position: 'sticky',
        top: 0,
      })}
    >
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
        <Link href="/"><a href="passHref">Wave</a></Link>
      </span>
      <ul
        ref={nl}
        className="nav-item"
        style={{
          margin: 0,
          padding: 0,
          height: '100%',
          maxWidth: '1440px',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          position: 'relative',
          backgroundColor: theme.colors.mono100,
        }}
      >

        <ul className={css({
          margin: 0,
          padding: 0,
          maxWidth: '40vw',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          position: 'relative',
          borderRightWidth: isHome ? '0.208rem' : 0,
          borderRightStyle: isHome ? 'solid' : 'none',
          borderRightColor: isHome ? theme.colors.mono400 : 'transparent',
          borderBottomWidth: '0.208rem',
          borderBottomStyle: 'solid',
          borderBottomColor: theme.colors.mono400,
        })}
        >
          {NAV_LIST.filter((item) => item.isAction).map((item) => (
            <StyledActionItem key={item.id} onClick={() => router.push(item.slug)}>
              {item.title}
            </StyledActionItem>
          ))}
        </ul>
        {NAV_LIST.filter((item) => !item.isAction).map((item) => (
          <NavItem key={item.id} height="100%" item={item} />
        ))}
      </ul>
    </header>
  );
}

export default Header;
