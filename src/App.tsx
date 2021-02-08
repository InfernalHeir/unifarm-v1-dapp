import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import styled from "styled-components";
import Global from "./theme/Global";
import { Provider } from "react-redux";
import store from "./store";

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.unifarmPrimary};
`;
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Global />
        <Heading>Using Global Theming Style</Heading>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
