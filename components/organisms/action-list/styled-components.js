import { styled } from 'baseui';

export const StyledActionList = styled('ul', ({ $theme, $isHome }) => ({
  margin: 0,
  padding: 0,
  maxWidth: '35vw',
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  position: 'relative',
  borderRightWidth: $isHome ? '0.208rem' : 0,
  borderRightStyle: $isHome ? 'solid' : 'none',
  borderRightColor: $isHome ? $theme.colors.mono400 : 'transparent',
  borderBottomWidth: '0.208rem',
  borderBottomStyle: 'solid',
  borderBottomColor: $theme.colors.mono400,
}));
