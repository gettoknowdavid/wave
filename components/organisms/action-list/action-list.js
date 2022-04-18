import React from 'react';
import { useStyletron } from 'baseui';
import { useRouter } from 'next/router';
import { NAV_LIST } from '../../../lib/nav-list';
import ActionItem from '../../molecules/action-item/action-item';

function ActionList() {
  const { pathname, push } = useRouter();
  const isHome = pathname === '/';
  const [css, theme] = useStyletron();

  return (
    <ul className={css({
      margin: 0,
      padding: 0,
      maxWidth: '40vw',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      position: 'relative',
      borderRightWidth: isHome ? '0.208rem' : 0,
      borderRightStyle: isHome ? 'solid' : 'none',
      borderRightColor: isHome ? theme.colors.mono400 : 'transparent',
      borderBottomWidth: '0.208rem',
      borderBottomStyle: 'solid',
      borderBottomColor: theme.colors.mono400,
    })}
    >
      {NAV_LIST.filter((item) => item.isAction).map((item) => (
        <ActionItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ActionList;