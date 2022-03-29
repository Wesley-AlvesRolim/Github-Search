import { createGlobalStyle } from 'styled-components';
import { primaryBlack, lightGray } from './colors';

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
  color: inherit;
}

a:visited{
  color: inherit;
}

button , input{
  border: none;
}

li{
  list-style: none;
}

.app{
  min-height: 100vh;
  width: 100%;
  background: ${primaryBlack};
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;
