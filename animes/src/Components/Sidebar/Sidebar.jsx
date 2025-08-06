import React from 'react';
import {
  SidebarContainer,
  SidebarList,
  SidebarItem,
  SidebarLink,
  HamburgerIcon,
  SidebarContent,
  CloseButton
} from './styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {!isOpen && (
        <HamburgerIcon onClick={toggleSidebar} aria-label="Abrir Menu">
          <FaBars />
        </HamburgerIcon>
      )}

      <SidebarContainer isOpen={isOpen}>
        {isOpen && (
          <CloseButton onClick={toggleSidebar}>
            <FaTimes />
          </CloseButton>
        )}

        <SidebarContent>
          <SidebarList>
            <SidebarItem>
              <SidebarLink as={Link} to="/" onClick={toggleSidebar}>
                Início
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink as={Link} to="/about" onClick={toggleSidebar}>
                Sobre
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink as={Link} to="/contact" onClick={toggleSidebar}>
                Contato
              </SidebarLink>
            </SidebarItem>
          </SidebarList>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
