import React from 'react';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledActionItem, StyledNavItem } from './styled-components';

function Nav() {
  const [css, theme] = useStyletron();
  const { pathname } = useRouter();

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { letterSpacing: '0.8rem', fontWeight: 800 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { letterSpacing: 0, fontWeight: 700 });
  };

  return (
    <header
      className={css({
        display: 'flex',
        alignItems: 'flex-end',
        height: pathname === '/' ? '25rem' : '8.333rem',
        width: '100%',
        backgroundColor: 'rgba(225,225,225, 0.7)',
        borderBottomWidth: '0.208rem',
        borderBottomStyle: 'solid',
        borderBottomColor: theme.colors.mono400,
        WebkitTransition: 'height .5s, line-height .5s',
        transition: 'height .5s, line-height .5s',
        position: 'sticky',
        top: 0,
      })}
    >
      <ul className={css({
        margin: 0,
        padding: 0,
        maxWidth: '40vw',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        borderRightWidth: '0.208rem',
        borderRightStyle: 'solid',
        borderRightColor: theme.colors.mono400,
        position: 'relative',
      })}
      >
        <span
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className={css({
            position: 'absolute',
            top: 0,
            left: 0,
            marginTop: '1.33rem',
            marginRight: '1.33rem',
            marginLeft: '1.33rem',
            fontSize: '1.4rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            cursor: 'pointer',
          })}
        >
          <Link href="/"><a href="/">Wave</a></Link>
        </span>
        <StyledActionItem><a href="/">menu</a></StyledActionItem>
        <StyledActionItem><a href="/">search</a></StyledActionItem>
        <StyledActionItem><a href="/">cart</a></StyledActionItem>
      </ul>
      <ul className={css({
        margin: 0,
        padding: 0,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      })}
      >
        <StyledNavItem>
          <Link href="/headphones">
            <a href="/headphones">headphones</a>
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/speakers">
            <a href="/speakers">speakers</a>
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/microphones">
            <a href="/microphones">microphones</a>
          </Link>
        </StyledNavItem>
      </ul>
    </header>
  );
}

export default Nav;
