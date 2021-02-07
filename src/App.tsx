import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import styled from "styled-components";
import Global from "./theme/Global";

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.unifarmPrimary};
`;
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Heading>Using Global Theming Style</Heading>
    </ThemeProvider>
  );
};

export default App;
