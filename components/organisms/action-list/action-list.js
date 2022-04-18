import React from 'react';
import { useRouter } from 'next/router';
import { NAV_LIST } from '../../../lib/nav-list';
import ActionItem from '../../molecules/action-item/action-item';
import { StyledActionList } from './styled-components';

function ActionList() {
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <StyledActionList $isHome={isHome}>
      {NAV_LIST.filter((item) => item.isAction).map((item) => (
        <ActionItem key={item.id} item={item} />
      ))}
    </StyledActionList>
  );
}

export default ActionList;
