import { styled } from 'baseui';

export const StyledHeader = styled('header', ({
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  maxWidth: '1440px',
  margin: '0px auto',
}));

export const StyledHeaderList = styled('ul', ({ $theme }) => ({
  margin: 0,
  padding: 0,
  height: '100%',
  maxWidth: '1440px',
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  position: 'relative',
  backgroundColor: $theme.colors.mono100,
}));
