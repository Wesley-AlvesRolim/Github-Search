import { createGlobalStyle } from 'styled-components';
import { primaryBlack, secondaryBlack, lightGray } from './colors';

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Roboto' ,sans-serif;
  color: ${lightGray};
}

a{
  text-decoration: none;
}

button , input{
  border: none;
}

li{
  list-style: none;
}

.app{
  height: 100vh;
  width: 100vw;
  background: linear-gradient(0deg, ${secondaryBlack} 50%, ${primaryBlack} 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
`;
