import { injected } from "../connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";
import MetamaskLogo from "../assests/Images/metamask.png";

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
  metamask: {
    logoUri: MetamaskLogo,
    name: "Metamask",
    connector: injected,
    description: "Chrome Extension Trusted By 10 Million Users.",
    isMobileSupported: false,
  },
};
