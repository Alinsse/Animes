import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;

  nav {
    margin-top: 20px;
  }

  a {
    color: #61dafb;
    margin: 0 15px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Alinhando a busca à direita */
  .search-wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end; /* Alinha os elementos à direita */
    align-items: center;
    width: 100%;
    position: relative; /* Para posicionar o ícone dentro do input */
  }

  .search-input {
    padding: 8px 35px 8px 10px;  /* Ajuste do padding para o ícone e texto */
    font-size: 16px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    width: 200px;
  }

  .search-icon {
    position: absolute;
    right: 10px; /* Posição do ícone dentro do input */
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
  }

  /* Media query para telas menores que 768px */
  @media (max-width: 768px) {
    nav {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    a {
      margin: 10px;
    }

    .search-wrapper {
      flex-direction: row;
      margin-top: 10px;
    }

    .search-input {
      margin-right: 10px;
    }
  }
`;
