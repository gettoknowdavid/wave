import { styled } from 'baseui';

export const StyledActionItem = styled('li', () => ({
  height: '100%',
  width: 'calc(40vw / 3)',
  display: 'flex',
  alignItems: 'flex-end',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'lowercase',
  cursor: 'pointer',
}));
