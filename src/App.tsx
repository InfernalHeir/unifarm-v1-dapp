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
import Calculator from "./pages/calculator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Web3ReactManager from "./components/Web3ReactManager";
import StakeInfo from "./pages/stakinginfo";

const App = () => {
  const getLibrary = (provider) => {
    return new Web3Provider(provider);
  };

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ReactManager />
            <Switch>
              <Route path="/" component={Stake} exact />
              <Route path="/stake" component={Calculator} />
              <Route path="/staking-info" component={StakeInfo} />
            </Switch>
            <Web3Modal />
          </Web3ReactProvider>
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default App;
