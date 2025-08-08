import React from 'react';
import {
  SidebarContainer,
  SidebarList,
  SidebarItem,
  SidebarLink,
  HamburgerIcon,
  SidebarContent,
  CloseButton,
} from './styles.ts'; // Certifique-se de que os estilos estão corretos
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getCategories } from '../../Services/Categorias/Listagem/useListagem.ts'; // Certifique-se de que a função está correta

function Sidebar({ isOpen, toggleSidebar }) {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <HamburgerIcon onClick={toggleSidebar}>
        <FaBars />
      </HamburgerIcon>

      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>
          <FaTimes />
        </CloseButton>

        <SidebarContent>
          <SidebarList>
            {/* Exibindo categorias */}
            {categories.length > 0 && (
              <SidebarItem>
                <SidebarLink as={Link} to="/categories" onClick={toggleSidebar}>
                  Categorias
                </SidebarLink>
                <ul>
                  {categories.map(category => (
                    <li key={category.id}>
                      <SidebarLink
                        as={Link}
                        to={`/category/${category.id}`}
                        onClick={toggleSidebar}
                      >
                        {category.attributes.title}
                      </SidebarLink>
                    </li>
                  ))}
                </ul>
              </SidebarItem>
            )}
          </SidebarList>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
