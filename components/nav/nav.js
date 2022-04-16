import React from 'react';
import { useStyletron } from 'baseui';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledActionItem, StyledNavItem } from './styled-components';

const NAV_LIST = [
  { id: '0', title: 'Headphones', slug: '/headphones' },
  { id: '1', title: 'Speakers', slug: '/speakers' },
  { id: '2', title: 'Microphones', slug: '/microphones' },
];

function Nav() {
  const [css, theme] = useStyletron();
  const { pathname } = useRouter();

  const onLogoEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { letterSpacing: '0.8rem', fontWeight: 800 });
  };

  const onLogoLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { letterSpacing: 0, fontWeight: 700 });
  };

  const onLinkEnter = ({ currentTarget }) => gsap.to(currentTarget, { paddingBottom: '2.8rem' });

  const onLinkLeave = ({ currentTarget }) => gsap.to(currentTarget, { paddingBottom: '1.4rem' });

  const el = React.useRef();
  const q = gsap.utils.selector(el);
  const timeline = gsap.timeline();

  React.useEffect(() => {
    timeline.to(q('.nav-item'), {
      height: pathname === '/' ? '25rem' : '8.333rem',
      transformOrigin: 'top',
      stagger: 0.3,
    });

    for (let i = 0; i < NAV_LIST.length; i += 1) {
      if (pathname === NAV_LIST[i].slug) {
        gsap.to(q(`.${NAV_LIST[i].title}-link`), { paddingBottom: '2.8rem' });
        gsap.to(q(`.${NAV_LIST[i].title}-link-a`), { color: theme.colors.mono600 });
      } else {
        gsap.to(q(`.${NAV_LIST[i].title}-link`), { paddingBottom: '1.4rem' });
        gsap.to(q(`.${NAV_LIST[i].title}-link-a`), { color: theme.colors.mono900 });
      }
    }
  }, [pathname, NAV_LIST]);

  return (
    <header
      ref={el}
      className={css({
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        position: 'sticky',
        top: 0,
      })}
    >
      <ul
        className="nav-item"
        style={{
          margin: 0,
          padding: 0,
          maxWidth: '40vw',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          borderLeftWidth: '0.104rem',
          borderLeftStyle: 'solid',
          borderLeftColor: theme.colors.mono400,
          borderRightWidth: '0.104rem',
          borderRightStyle: 'solid',
          borderRightColor: theme.colors.mono400,
          position: 'relative',
          backgroundColor: theme.colors.mono100,
          borderBottomWidth: '0.208rem',
          borderBottomStyle: 'solid',
          borderBottomColor: theme.colors.mono400,
        }}
      >
        <span
          onMouseEnter={onLogoEnter}
          onMouseLeave={onLogoLeave}
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
          <Link href="/"><a href="passHref">Wave</a></Link>
        </span>
        <StyledActionItem>
          <Link href="/">
            <a href="passHref">menu</a>
          </Link>
        </StyledActionItem>
        <StyledActionItem>
          <Link href="/">
            <a href="passHref">search</a>
          </Link>
        </StyledActionItem>
        <StyledActionItem>
          <Link href="/">
            <a href="passHref">cart</a>
          </Link>
        </StyledActionItem>
      </ul>
      <ul className={css({
        margin: 0,
        padding: 0,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      })}
      >
        {NAV_LIST.map((item) => (
          <Link href={item.slug} key={item.id} passHref>
            <StyledNavItem
              className={`nav-item ${item.title}-link`}
              onMouseEnter={pathname === item.slug ? () => {} : onLinkEnter}
              onMouseLeave={pathname === item.slug ? () => {} : onLinkLeave}
            >
              <a href="passHref" className={`${item.title}-link-a`}>{item.title}</a>
            </StyledNavItem>
          </Link>
        ))}
      </ul>
    </header>
  );
}

export default Nav;
