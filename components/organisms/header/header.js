/* eslint-disable no-return-assign */
import React from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';
import ActionList from '../action-list/action-list';
import { StyledHeader, StyledHeaderList } from './styled-components';
import Logo from '../../atoms/logo/logo';
import NavList from '../nav-list/nav-list';

function Header() {
  const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === '/';
  const nl = React.useRef();

  React.useEffect(() => {
    gsap.to(nl.current.children, {
      height: isHome ? '20rem' : '8.333rem',
      transformOrigin: 'top',
      duration: 0.5,
      stagger: { each: 0.2, ease: 'sine.inOut', yoyo: true },
    });
  }, [pathname, isHome]);

  return (
    <StyledHeader>
      <Logo />
      <StyledHeaderList ref={nl} className="nav-item">
        <ActionList />
        <NavList />
      </StyledHeaderList>
    </StyledHeader>
  );
}

export default Header;
