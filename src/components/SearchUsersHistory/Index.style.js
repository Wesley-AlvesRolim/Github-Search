import styled from 'styled-components';
import { primaryBlack, secondaryBlack } from '../../utils/colors';

const Container = styled.section`
  width: 95vw;
  background: ${secondaryBlack};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 14px 1px ${primaryBlack};


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
