import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  a{
    text-decoration: none;
    color:inherit;
  }
  *{
    box-sizing:border-box;
  }
  #root{
    width:100vw;
    height:100vh;
  }
  body{
    overflow:hidden;
    touch-action:none;
  }
`;
export default GlobalStyles;
