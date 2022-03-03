import styled from 'styled-components';

const Container = styled.section`
width: 95vw;
display: flex;
flex-direction: column;
align-items: center;


@media (max-width: 720px){
  width: 95vw;
  ul{
    width: 100%;
  }
}
`;

const Title = styled.h2`
margin-bottom: 1rem;
`;

export { Container, Title };
