<<<<<<< HEAD
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const RINKEBY_NETWORK = process.env.REACT_APP_RPC_URL
const POLLING_INTERVAL = 15000

export const injected = new InjectedConnector({
  supportedChainIds: [4]
})

export const trustwallet = new WalletConnectConnector({
  rpc: { 4: RINKEBY_NETWORK },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})
=======
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const RINKEBY_NETWORK = process.env.REACT_APP_RPC_URL;
const POLLING_INTERVAL = 15000;

export const injected = new InjectedConnector({
  supportedChainIds: [4]
});

export const trustwallet = new WalletConnectConnector({
  rpc: { 4: RINKEBY_NETWORK },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});

export const walletlink = new WalletLinkConnector({
  url: "dev.app.unifarm.co",
  appName: "Unifarm V3"
});
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
