/* eslint-disable no-return-assign */
import React from 'react';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledActionItem } from './styled-components';
import NavItem from '../../molecules/nav-item/nav-item';
import { NAV_LIST } from '../../../lib/nav-list';
import ActionList from '../action-list/action-list';

function Header() {
  const [css, theme] = useStyletron();
  const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === '/';
  const nl = React.useRef();

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
        <ActionList />
        {NAV_LIST.filter((item) => !item.isAction).map((item) => (
          <NavItem key={item.id} height="100%" item={item} />
        ))}
      </ul>
    </header>
  );
}

export default Header;
