import { injected } from "../connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";
import MetamaskLogo from "../assests/images/metamask.png";

export const ORO = "0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46";

export const DRAWER_WIDTH = 240;

interface IWallet {
  [connetorName: string]: {
    logoUri: string;
    name: string;
    connector: AbstractConnector;
    description: string;
    isMobileSupported: boolean;
  };
}
// you can add further diffrent providers.
export const WALLETS: IWallet = {
  METAMASK: {
    logoUri: MetamaskLogo,
    name: "Metamask",
    connector: injected,
    description: "Chrome Extension Trusted By 10 Million Users.",
    isMobileSupported: false
  }
};
