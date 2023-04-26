import React from 'react';
import { Nav, NavItem } from '@patternfly/react-core';

interface SidebarLinksProps {
  onLinkClick: (link: string) => void;
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({ onLinkClick }) => {
  const handleLinkClick = (link: string) => {
    onLinkClick(link);
  };

  return (
    <Nav style={{ flex: '1' }}>
      <NavItem onClick={() => handleLinkClick('userList')}>
        <a href="#">User List</a>
      </NavItem>
      <NavItem onClick={() => handleLinkClick('todoList')}>
        <a href="#">Post List</a>
      </NavItem>
      <NavItem onClick={() => handleLinkClick('commentList')}>
        <a href="#">Comment List</a>
      </NavItem>
    </Nav>
  );
};

export default SidebarLinks;
