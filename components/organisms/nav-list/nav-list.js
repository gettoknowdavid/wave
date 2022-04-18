import React from 'react';
import { NAV_LIST } from '../../../lib/nav-list';
import NavItem from '../../molecules/nav-item/nav-item';

function NavList() {
  return (
    <>
      {NAV_LIST.filter((item) => !item.isAction).map((item) => (
        <NavItem key={item.id} height="100%" item={item} />
      ))}
    </>
  );
}

export default NavList;
