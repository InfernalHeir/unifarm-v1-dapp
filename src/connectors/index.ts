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
