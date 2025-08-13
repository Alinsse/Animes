import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-image: url('/banner.png'); /* Imagem no /public */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;

  /* Altura responsiva do header */
  height: 40vh;
  max-height: 50vh;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;

  color: white;

  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }

  .search-wrapper {
    position: relative;
    max-width: 220px;
    width: 100%;
    align-self: flex-end;
  }

  .search-input {
    width: 100%;
    padding: 8px 35px 8px 12px;
    font-size: 14px;
    border-radius: 20px;
    border: none;
    outline: none;
    box-sizing: border-box; /* Importante para evitar overflow */
  }

  .search-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
  }

  @media (max-width: 768px) {
    height: 30vh;
    max-height: 40vh;
    min-height: 180px;

    h1 {
      font-size: 1.5rem;
    }

    .search-wrapper {
      max-width: 180px;
    }

    .search-input {
      font-size: 13px;
      padding: 6px 30px 6px 10px;
    }
  }

  @media (max-width: 480px) {
    height: 25vh;
    min-height: 150px;

    h1 {
      font-size: 1.2rem;
    }

    .search-wrapper {
      max-width: 140px;
      align-self: center;
    }

    .search-input {
      font-size: 12px;
      padding: 5px 25px 5px 8px;
    }
  }
`;
