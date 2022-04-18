import { styled } from 'baseui';

export const StyledActionItem = styled('li', () => ({
  height: '100%',
  width: 'calc(40vw / 3)',
  display: 'flex',
  alignItems: 'flex-end',
  paddingBottom: '1.4rem',
  paddingLeft: '1.333rem',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'lowercase',
}));

export const StyledNavItem = styled('li', ({ $height, $isHome, $theme }) => ({
  cursor: 'pointer',
  height: $height,
  width: '100%',
  display: 'block',
  alignItems: 'flex-end',
  position: 'relative',
  color: $theme.colors.mono900,
  textTransform: 'lowercase',
  fontSize: '1.1rem',
  fontWeight: 600,
  backgroundColor: $theme.colors.mono100,
  borderLeftWidth: $isHome ? 0 : '0.208rem',
  borderLeftStyle: $isHome ? 'none' : 'solid',
  borderLeftColor: $isHome ? 'transparent' : $theme.colors.mono400,
  borderRightWidth: $isHome ? '0.208rem' : 0,
  borderRightStyle: $isHome ? 'solid' : 'none',
  borderRightColor: $isHome ? $theme.colors.mono400 : 'transparent',
  borderBottomWidth: '0.208rem',
  borderBottomStyle: 'solid',
  borderBottomColor: $theme.colors.mono400,
  ':last-child::after': {
    borderRightWidth: '0',
    borderRightStyle: 'none',
    borderRightColor: 'transparent',
  },
}));
