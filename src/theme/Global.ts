import { createGlobalStyle } from "styled-components";
import Unifarm from "../assests/images/oropocket-background.png";

const Global = createGlobalStyle`
html {
  margin:0;
  padding:0;
  height:100vh;
}
body {
  margin:0;
  padding:0;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(to right, #ec3e70, #0089ff);  
}
body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${Unifarm});
  background-size: 100%;
  background-position-y: 90%;
  position: fixed;
  opacity: 0.25;
  background-repeat: no-repeat;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default Global;
