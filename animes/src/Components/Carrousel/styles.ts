import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export const Card = styled.div`
  flex: 1 1 180px;
  max-width: 180px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 8px;
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const AnimeTitle = styled.p`
  margin-top: 10px;
  font-weight: 600;
  color: #333;
`;
