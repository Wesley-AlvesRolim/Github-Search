import styled from 'styled-components';
import { darkGray, primaryBlack } from '../../utils/colors';
import { ButtonComponent } from '../Button/Index';

const Overlay = styled.div`
display: ${(props) => (props.isActive ? 'block' : 'none')};
`;

const Container = styled.div`
width: 25rem;
height: 175px;
margin: 20vh 0 5rem;
background-color: ${darkGray};
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 1px 1px ${primaryBlack};
transition: 0.5s;

&:hover{
  box-shadow: 0 1px 10px ${primaryBlack};
  transform: translateY(-2px);
}

form{
  display: grid;
  justify-items: center;

  label{
    margin-bottom: 0.75rem;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;

    h1{
      text-align: center;
    }
  }

  input{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  button{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  }
}

@media (max-width: 720px){
  height: 15rem;
  width: 95vw;
  padding: 5px;
    form{
      input{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      button{
        margin-top: 0.75rem;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
      }
    }
  }
`;

const Button = styled(ButtonComponent)`

@media (max-width: 720px){

}
`;

export { Overlay, Container, Button };
