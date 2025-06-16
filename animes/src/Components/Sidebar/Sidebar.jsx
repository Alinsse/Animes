import React, { useState } from 'react';
import { SidebarContainer, SidebarList, SidebarItem, SidebarLink, HamburgerIcon, SidebarContent, CloseButton } from './styles';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

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
            <SidebarItem><SidebarLink href="#home">Início</SidebarLink></SidebarItem>
            <SidebarItem><SidebarLink href="#about">Sobre</SidebarLink></SidebarItem>
            <SidebarItem><SidebarLink href="#contact">Contato</SidebarLink></SidebarItem>
          </SidebarList>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
