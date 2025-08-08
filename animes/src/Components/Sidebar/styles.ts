import styled from 'styled-components';

interface SidebarContainerProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.nav<SidebarContainerProps>`
  width: 200px;
  height: 100vh;
  background-color: #20232a;
  color: white;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  /* Sidebar inicialmente fechado */
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-200px)')};

  /* Media Query para dispositivos móveis */
  @media (max-width: 768px) {
    width: 100%;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SidebarItem = styled.li`
  margin: 20px 0;
`;

export const SidebarLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const HamburgerIcon = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  z-index: 1100;

  /* Ajuste para telas pequenas */
  @media (max-width: 768px) {
    left: 10px;
    font-size: 25px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  z-index: 1100;
`;

export const SidebarContent = styled.div`
  margin-top: 60px; /* Dá espaço para o ícone do menu */
  padding: 20px;
`;
