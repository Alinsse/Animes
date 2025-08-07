import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
`;

export const Poster = styled.img`
  width: 220px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 600px;
  line-height: 1.6;
`;
