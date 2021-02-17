<<<<<<< HEAD
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Provider } from 'react-redux'
import store from './store'
import { Web3ReactProvider } from '@web3-react/core'
import Web3Modal from './components/Web3Modal'
import Stake from './pages/stake'
import './index.css'
//import Calculator from './pages/calculator'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Web3ReactManager from './components/Web3ReactManager'
import StakeInfo from './pages/stakinginfo'
import Web3 from 'web3'
import Claim from './pages/claim'
import SnackBarNotes from './components/SnackBarNotes'
import PendingTransactions from './components/PendingTransactions'
=======
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store";
import { Web3ReactProvider } from "@web3-react/core";
import Web3Modal from "./components/Web3Modal";
import Stake from "./pages/stake/stake";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Web3ReactManager from "./components/Web3ReactManager";
import StakeInfo from "./pages/stakinginfo";
import Web3 from "web3";
import Claim from "./pages/claim";
import SnackBarNotes from "./components/SnackBarNotes";
import PendingTransactions from "./components/PendingTransactions";
import { Header } from "semantic-ui-react";
import Dappbar from "./components/Dappbar";
import Global from "./theme/Global";
import muiTheme from "./theme/material/muitheme";
import { MuiThemeProvider } from "@material-ui/core";
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

const App = () => {
  const getLibrary = (provider) => {
    return new Web3(provider);
  };

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
<<<<<<< HEAD
          <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ReactManager />
            <Switch>
              <Route path="/" component={Stake} exact />
              <Route path="/staking-info" component={StakeInfo} />
              <Route path="/claim-history" component={Claim} />
            </Switch>
            <Web3Modal />
            <SnackBarNotes />
            <PendingTransactions />
          </Web3ReactProvider>
=======
          <MuiThemeProvider theme={muiTheme}>
            <Web3ReactProvider getLibrary={getLibrary}>
              <Web3ReactManager />
              <Global />
              <Dappbar />
              <Switch>
                <Route path="/" component={Stake} exact />
                <Route path="/staking-info" component={StakeInfo} />
                <Route path="/claim-history" component={Claim} />
              </Switch>
              <Web3Modal />
              <SnackBarNotes />
              <PendingTransactions />
            </Web3ReactProvider>
          </MuiThemeProvider>
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default App;
