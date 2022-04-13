import styled from 'styled-components';

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div{
    margin-top: 0.5rem;
    font-size: 1.5rem;
    button{
      margin-top: 0.5rem;
    }
  }
`;

export { Container };
