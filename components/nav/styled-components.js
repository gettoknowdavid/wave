import { styled } from 'baseui';

export const StyledActionItem = styled('li', () => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  paddingBottom: '1.4rem',
  paddingLeft: '1.333rem',
  fontSize: '1.1rem',
  fontWeight: 600,
}));

export const StyledNavItem = styled('li', ({ $theme }) => ({
  cursor: 'pointer',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  paddingBottom: '1.4rem',
  paddingLeft: '1.333rem',
  borderRightWidth: '0.208rem',
  borderRightStyle: 'solid',
  fontSize: '1.1rem',
  fontWeight: 600,
  borderRightColor: $theme.colors.mono400,
  ':last-child::after': {
    borderRightWidth: '0',
    borderRightStyle: 'none',
    borderRightColor: 'transparent',
  },
}));
