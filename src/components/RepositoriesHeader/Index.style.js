import styled from 'styled-components';
import { secondaryBlack } from '../../utils/colors';

const Header = styled.header`
  height: 10rem;
  width: 100%;
  padding: 1rem 5rem 4rem;
  margin-bottom: 2rem;
  background-color: ${secondaryBlack};
  position: sticky;
  top: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a{
    width: 2.25em;
  }

  form{
    height: 50px;
    width: 100%;
    max-width: 450px;
    margin: 1rem auto 0;
    position: relative;
    svg{
      position: absolute;
      top: 32.5%;
      left: 0.75rem;
    }
    input{
      width: 100%;
      padding: 1rem 1rem 1rem 2.75rem;
      border-radius: 1rem;
      background-color: #fff;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 720px){
    padding: 1rem 1rem 4rem;
  }
`;

export { Header };
