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

export const UnifarmV2Address: string =
  "0xB3f9c22f8961902aa821F69B7624B2dbFD7E63D8";

export const UnifarmV1Address: string =
  "0xC6246A4987564220612c206ca615e1196435e77f";

interface ISupportedTokens {
  [tokenAddress: string]: {
    name: string;
    key: number;
    address?: string;
    icon?: string;
    decimals?: number;
    type?: string;
    v1?: boolean;
    v2?: boolean;
  };
}
export const SupportedTokens: ISupportedTokens = {
  0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46: {
    name: "ORO",
    key: 0,
    address: "0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46",
    icon: OROIcon,
    decimals: 18,
    type: "select",
    v1: true,
    v2: true
  },
  0xe98f9b3892229784ccc1fb9bf7f45c3579354118: {
    name: "MATIC",
    key: 1,
    address: "0xe98f9b3892229784ccc1fb9bf7f45c3579354118",
    icon: MATICIcon,
    decimals: 18,
    type: "select",
    v1: true,
    v2: true
  },
  0xccc3206cee685bbd62abcc37c99404d8ef0f23a7: {
    name: "REEF",
    key: 2,
    address: "0xccc3206cee685bbd62abcc37c99404d8ef0f23a7",
    icon: ReefIcon,
    decimals: 18,
    type: "select",
    v1: true,
    v2: false
  },
  0xbd43847337b0558828ab6290599b20995b1367a8: {
    name: "CNTR",
    key: 3,
    address: "0xbd43847337b0558828ab6290599b20995b1367a8",
    icon: CNTRIcon,
    decimals: 18,
    type: "select",
    v1: true,
    v2: false
  },
  0x5b11390207f723145a47dc4a6b69a2c5773ffb25: {
    name: "FRONT",
    key: 4,
    address: "0x5b11390207f723145a47dc4a6b69a2c5773ffb25",
    icon: FrontIcon,
    decimals: 18,
    type: "select",
    v1: true,
    v2: false
  },
  0x7b2751fa2559ac5322cc38fe2ee306d25546c3f3: {
    name: "TVK",
    key: 5,
    address: "0x7b2751fa2559ac5322cc38fe2ee306d25546c3f3",
    icon: TVKIcon,
    decimals: 18,
    type: "select",
    v1: false,
    v2: true
  },
  0xb710c0edc2b3a2cf7413f31ab281f5c2cd8b4944: {
    name: "ROUTE",
    key: 6,
    address: "0xb710c0edc2b3a2cf7413f31ab281f5c2cd8b4944",
    icon: RouteICon,
    decimals: 18,
    type: "select",
    v1: false,
    v2: true
  },
  0x8c443d30faf3d7ac5bfa04862493f8c07ac76c45: {
    name: "ZERO",
    key: 7,
    address: "0x8c443d30faf3d7ac5bfa04862493f8c07ac76c45",
    icon: ZERO,
    decimals: 18,
    type: "select",
    v1: false,
    v2: true
  },
  0xaeffc06c5660f720c7644664d5e1be7dea41d5ae: {
    name: "NORD",
    key: 8,
    address: "0xaeffc06c5660f720c7644664d5e1be7dea41d5ae",
    icon: NORD,
    decimals: 18,
    type: "select",
    v1: false,
    v2: true
  },
  REQUEST: {
    name: "Request New Token",
    key: 9,
    type: "Request"
  }
};

export const tokenAddressArrayV1 = {
  ORO: "0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46",
  MATIC: "0xe98f9b3892229784ccc1fb9bf7f45c3579354118",
  CNTR: "0xbd43847337b0558828ab6290599b20995b1367a8",
  REEF: "0xccc3206cee685bbd62abcc37c99404d8ef0f23a7",
  FRONT: "0x5b11390207f723145a47dc4a6b69a2c5773ffb25"
};

export const tokenAddressArrayV2 = {
  ORO: "0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46",
  MATIC: "0xe98f9b3892229784ccc1fb9bf7f45c3579354118",
  REEF: "0xccc3206cee685bbd62abcc37c99404d8ef0f23a7",
  CNTR: "0xbd43847337b0558828ab6290599b20995b1367a8",
  FRONT: "0x5b11390207f723145a47dc4a6b69a2c5773ffb25",
  TVK: "0x7b2751fa2559ac5322cc38fe2ee306d25546c3f3",
  ROUTE: "0xb710c0edc2b3a2cf7413f31ab281f5c2cd8b4944",
  ZEROSWAP: "0x8c443d30faf3d7ac5bfa04862493f8c07ac76c45",
  NORD: "0xaeffc06c5660f720c7644664d5e1be7dea41d5ae"
};
