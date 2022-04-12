import styled from 'styled-components';

const RepositoriesListContainer = styled.ul`
  width: 100%;
  padding: 0 10px;

  display: grid;
  gap: 20px 10px;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 500px));
  justify-items: stretch, center;
  align-items: stretch;

  li{
    display: flex;
    justify-content: center;
  }

  @media (min-width: 720px){
    grid-template-columns: repeat(auto-fill, minmax(475px, 1fr));

    li{
      max-width: none;
    }
  }

`;

const RepositoryNotFound = styled.h1`
  text-align: center;
`;

export { RepositoriesListContainer, RepositoryNotFound };
