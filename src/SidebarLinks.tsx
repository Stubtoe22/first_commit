import React from 'react';
import { Nav, NavItem } from '@patternfly/react-core';

const SidebarLinks: React.FC = () => {
  return (
    <Nav style={{ flex: '1' }}>
      <NavItem>
        <a href="#">Link 1</a>
      </NavItem>
      <NavItem>
        <a href="#">Link 2</a>
      </NavItem>
      <NavItem>
        <a href="#">Link 3</a>
      </NavItem>
    </Nav>
  );
}

export default SidebarLinks;