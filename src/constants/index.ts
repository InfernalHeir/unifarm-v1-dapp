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
  "0xB3f9c22f8961902aa821F69B7624B2dbFD7E63D8";

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
    address: "0x0bccb061326b81606854eDF4b28C12f230EEDf6A",
    icon: OROIcon
  },
  MATIC: {
    name: "MATIC",
    address: "0xa8fef48ff77d7bae59f3c088cbf5a8fc3797adf9",
    icon: MATICIcon
  },
  REEF: {
    name: "REEF",
    address: "0xc6af69450a31ed411f7efe9c43549d4711570ade",
    icon: ReefIcon
  },
  CNTR: {
    name: "CNTR",
    address: "0xcd63eee5bdfdee70a1454cd984f5776dd26fd452",
    icon: CNTRIcon
  },
  FRONT: {
    name: "FRONT",
    address: "0x40512cb90f56babcc1a52283e17fbd7682c984a3",
    icon: FrontIcon
  },
  TVK: {
    name: "TVK",
    address: "0x7b2751fa2559ac5322cc38fe2ee306d25546c3f3",
    icon: TVKIcon
  },
  ROUTE: {
    name: "ROUTE",
    address: "0xb710c0edc2b3a2cf7413f31ab281f5c2cd8b4944",
    icon: RouteICon
  },
  ZEROSWAP: {
    name: "ZERO",
    address: "0x8c443d30faf3d7ac5bfa04862493f8c07ac76c45",
    icon: ZERO
  },
  NORDS: {
    name: "NORD",
    address: "0xaeffc06c5660f720c7644664d5e1be7dea41d5ae",
    icon: NORD
  },
  REQUEST: {
    name: "Request New Token"
  }
};

export const tokenAddressArray = {
  ORO: "0x0bccb061326b81606854eDF4b28C12f230EEDf6A",
  MATIC: "0xa8fef48ff77d7bae59f3c088cbf5a8fc3797adf9",
  REEF: "0xc6af69450a31ed411f7efe9c43549d4711570ade",
  CNTR: "0xcd63eee5bdfdee70a1454cd984f5776dd26fd452",
  FRONT: "0x40512cb90f56babcc1a52283e17fbd7682c984a3",
  TVK: "0x7b2751fa2559ac5322cc38fe2ee306d25546c3f3",
  ROUTE: "0xb710c0edc2b3a2cf7413f31ab281f5c2cd8b4944",
  ZEROSWAP: "0x8c443d30faf3d7ac5bfa04862493f8c07ac76c45",
  NORD: "0xaeffc06c5660f720c7644664d5e1be7dea41d5ae"
};
