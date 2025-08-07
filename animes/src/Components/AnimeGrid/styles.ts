import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  padding: 20px;
`;

export const AnimeCard = styled.div`
  cursor: pointer;
  text-align: center;
`;

export const AnimeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const AnimeTitle = styled.h3`
  font-size: 0.9rem;
  margin-top: 8px;
  color: #333;
`;
