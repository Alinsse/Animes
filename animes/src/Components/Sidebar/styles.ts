import styled from 'styled-components';

export const SidebarContainer = styled.nav`
  width: 200px;
  height: 100vh;
  background-color: #20232a;
  color: white;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  transition: transform 0.3s ease-in-out;

  /* Sidebar inicialmente fechado */
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-200px)')};

  /* Media Query para dispositivos móveis */
  @media (max-width: 768px) {
    width: 100%; /* Sidebar vai ocupar toda a tela em dispositivos móveis */
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')}; /* Barrinha total */
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
  z-index: 20; /* Garantir que o ícone fique acima do conteúdo */
  transition: transform 0.3s ease;

  /* Ajuste para telas pequenas (mobile) */
  @media (max-width: 768px) {
    left: 10px; /* Reposiciona o ícone para mais visibilidade */
    font-size: 25px; /* Ajuste no tamanho do ícone em telas pequenas */
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  z-index: 20;
`;

export const SidebarContent = styled.div`
  margin-top: 60px; /* Para dar espaço para o ícone do menu */
  padding: 20px;
`;
