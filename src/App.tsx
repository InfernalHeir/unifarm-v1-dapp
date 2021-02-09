import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import Web3Modal from "./components/Web3Modal";
import Stake from "./pages/stake";
import "./index.css";
import TokenSearchModal from "./components/TokenSearhModal";

const App = () => {
  const getLibrary = (provider) => {
    return new Web3Provider(provider);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Stake />
          <Web3Modal />
        </Web3ReactProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
