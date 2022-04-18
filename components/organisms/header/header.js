/* eslint-disable no-return-assign */
import React from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';
import NavItem from '../../molecules/nav-item/nav-item';
import { NAV_LIST } from '../../../lib/nav-list';
import ActionList from '../action-list/action-list';
import { StyledHeader, StyledHeaderList } from './styled-components';
import Logo from '../../atoms/logo/logo';

function Header() {
  const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === '/';
  const nl = React.useRef();

  React.useEffect(() => {
    gsap.to(nl.current.children, {
      height: isHome ? '25rem' : '8.333rem',
      transformOrigin: 'top',
      duration: 0.5,
      stagger: { each: 0.2, ease: 'sine.inOut', yoyo: true },
    });
  }, [pathname]);

  return (
    <StyledHeader>
      <Logo />
      <StyledHeaderList ref={nl} className="nav-item">
        <ActionList />
        {NAV_LIST.filter((item) => !item.isAction).map((item) => (
          <NavItem key={item.id} height="100%" item={item} />
        ))}
      </StyledHeaderList>
    </StyledHeader>
  );
}

export default Header;
