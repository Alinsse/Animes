import React, { useState, useEffect } from 'react';
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
import { getCategories } from '../../Services/HomeApis/usePopulares';

function Sidebar({ isOpen, toggleSidebar }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories(); 
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []); // O array vazio faz isso rodar apenas uma vez após a renderização do componente

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
            {/* Exibindo as categorias */}
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
