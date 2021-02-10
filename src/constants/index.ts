import { injected } from "../connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";
import MetamaskLogo from "../assests/images/metamask.png";
import OROIcon from "../assests/images/oro.png";
import NORD from "../assests/images/nord.png";
import MATICIcon from "../assests/images/Sidechain/matic.png";
import CNTRIcon from "../assests/images/Tokens/cntr.png";
import FrontIcon from "../assests/images/Tokens/frontier.png";
import ReefIcon from "../assests/images/Tokens/reef.png";
import TVKIcon from "../assests/images/Tokens/TVK.png";
import RouteICon from "../assests/images/Tokens/ROUTE.png";
import ZERO from "../assests/images/Tokens/zeroswap.png";

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

export const UnifarmTokenAddress: string =
  "0x28c03e2fa7a10a92fcbea41e779804e2929fa81d";

interface ISupportedTokens {
  [tokenName: string]: {
    name: string;
    address?: string;
    icon?: string;
  };
}
export const SupportedTokens: ISupportedTokens = {
  ORO: {
    name: "ORO",
    address: "0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46",
    icon: OROIcon
  },
  MATIC: {
    name: "MATIC",
    address: "0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46",
    icon: MATICIcon
  },
  REEF: {
    name: "REEF",
    icon: ReefIcon
  },
  CNTR: {
    name: "CNTR",
    icon: CNTRIcon
  },
  FRONT: {
    name: "FRONT",
    icon: FrontIcon
  },
  TVK: {
    name: "TVK",
    icon: TVKIcon
  },
  ROUTE: {
    name: "ROUTE",
    icon: RouteICon
  },
  ZEROSWAP: {
    name: "ZERO",
    icon: ZERO
  },
  NORDS: {
    name: "NORD",
    icon: NORD
  },
  REQUEST: {
    name: "Request New Token"
  }
};
