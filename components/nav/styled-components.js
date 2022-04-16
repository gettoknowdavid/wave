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
  width: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  paddingBottom: '1.4rem',
  paddingLeft: '1.333rem',
  borderLeftWidth: '0.104rem',
  color: $theme.colors.mono900,
  borderLeftStyle: 'solid',
  borderLeftColor: $theme.colors.mono400,
  borderRightWidth: '0.104rem',
  borderRightStyle: 'solid',
  borderRightColor: $theme.colors.mono400,
  textTransform: 'lowercase',
  fontSize: '1.1rem',
  fontWeight: 600,
  backgroundColor: $theme.colors.mono100,
  borderBottomWidth: '0.208rem',
  borderBottomStyle: 'solid',
  borderBottomColor: $theme.colors.mono400,
  ':last-child::after': {
    borderRightWidth: '0',
    borderRightStyle: 'none',
    borderRightColor: 'transparent',
  },
}));
