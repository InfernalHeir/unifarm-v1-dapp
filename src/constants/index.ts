import { injected, trustwallet, walletlink } from "../connectors";

import { AbstractConnector } from "@web3-react/abstract-connector";
// connectors logo
import MetamaskLogo from "../assests/images/connectors/metamask.png";
import TrustWalletLogo from "../assests/images/connectors/trustWallet.png";
import CoinbaseWalletLogo from "../assests/images/connectors/coinbasewallet.png";

// Token List Icon can be fetch from there
import OROIcon from "../assests/images/tokens/oro.png";
import NORD from "../assests/images/tokens/Nord.png";
import MATICIcon from "../assests/images/sidechain/matic.png";
import CNTRIcon from "../assests/images/tokens/cntr.png";
import FrontIcon from "../assests/images/tokens/frontier.png";
import ReefIcon from "../assests/images/tokens/reef.png";
import TVKIcon from "../assests/images/tokens/TVK.png";
import RouteICon from "../assests/images/tokens/ROUTE.png";
import ZERO from "../assests/images/tokens/zeroswap.png";

export const ORO = "0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46";

export const DRAWER_WIDTH = 240;

interface IWallet {
  [connetorName: string]: {
    logoUri: string;
    name: string;
    connector: AbstractConnector;
    url?: string;
    description: string;
    isMobileSupported: boolean;
    isMobileSupportOnly: boolean;
  };
}
// you can add further diffrent providers.
export const WALLETS: IWallet = {
  METAMASK: {
    logoUri: MetamaskLogo,
    name: "Metamask",
    connector: injected,
    description: "Chrome Extension Trusted By 10 Million Users.",
    isMobileSupported: true,
    isMobileSupportOnly: false
  },
  TRUSTWALLET: {
    logoUri: TrustWalletLogo,
    name: "Trust Wallet",
    connector: trustwallet,
    description: "Using Trust Wallet & Rainbow Wallet",
    isMobileSupported: true,
    isMobileSupportOnly: false
  },
  COINBASE: {
    logoUri: CoinbaseWalletLogo,
    name: "Coinbase Wallet",
    connector: walletlink,
    description: "Using Coinbase Wallet",
    isMobileSupported: true,
    isMobileSupportOnly: false
  }
};

export const UnifarmV1Address: string =
  "0x18192dcf14ee5a071d0fc79779cdfb3ce98e3f74";

export const UnifarmV2Address: string =
  "0xa906819449f6841c63163f5289469d8b9bdd591c";

type TokenMetaData = {
  name: string;
  key: number;
  address: string;
  icon: string;
  decimals: number;
  type: "select" | "request";
  isV1: boolean;
  isV2: boolean;
};

interface TokenList {
  maintainer: string;
  ipfs: string | null;
  tokenMetaData: TokenMetaData[];
  tags?: string[];
  keywords: string[];
}

export const tokenlist: TokenList = {
  maintainer: "Opendefi by Oropocket",
  ipfs: null,
  tokenMetaData: [
    {
      name: "ORO",
      key: 0,
      address: "0xef67699222EE81F6a6Dcd0a9ba88C24d783c3b46",
      icon: OROIcon,
      decimals: 18,
      type: "select",
      isV1: true,
      isV2: true
    },
    {
      name: "MATIC",
      key: 1,
      address: "0xe98F9b3892229784ccc1Fb9BF7F45C3579354118",
      icon: MATICIcon,
      decimals: 18,
      type: "select",
      isV1: true,
      isV2: true
    },
    {
      name: "CNTR",
      key: 3,
      address: "0xbD43847337b0558828aB6290599b20995b1367A8",
      icon: CNTRIcon,
      decimals: 18,
      type: "select",
      isV1: true,
      isV2: false
    },
    {
      name: "REEF",
      key: 2,
      address: "0xCcC3206CEe685bBD62ABcC37C99404d8eF0f23a7",
      icon: ReefIcon,
      decimals: 18,
      type: "select",
      isV1: true,
      isV2: false
    },
    {
      name: "FRONT",
      key: 4,
      address: "0x5B11390207F723145a47dC4a6B69A2C5773FfB25",
      icon: FrontIcon,
      decimals: 18,
      type: "select",
      isV1: true,
      isV2: false
    },
    {
      name: "TVK",
      key: 5,
      address: "0xbe2845e7520223bfd6ab4e6f6ad4369f6ffa6e0e",
      icon: TVKIcon,
      decimals: 18,
      type: "select",
      isV1: false,
      isV2: true
    },
    {
      name: "ROUTE",
      key: 6,
      address: "0xb47f597260edbf30386aecc28938b25d5f0635b7",
      icon: RouteICon,
      decimals: 18,
      type: "select",
      isV1: false,
      isV2: true
    },
    {
      name: "ZERO",
      key: 7,
      address: "0x3555209ff2933b548ee31646cb3ee201f41a2625",
      icon: ZERO,
      decimals: 18,
      type: "select",
      isV1: false,
      isV2: true
    },
    {
      name: "NORD",
      key: 8,
      address: "0xb596e98821c558860ec5d3d59460ea9e19a44f66",
      icon: NORD,
      decimals: 18,
      type: "select",
      isV1: false,
      isV2: true
    }
  ],
  tags: ["maintained by Oro Pocket"],
  keywords: ["defi", "open defi", "Oro Pocket"]
};

export const Mapping = {
  ORO: {
    name: "ORO",
    image: OROIcon,
    price: 0.33
  },
  MATIC: {
    name: "MATIC",
    image: MATICIcon,
    price: 0.04
  },
  CNTR: {
    name: "CNTR",
    image: CNTRIcon,
    price: 0.004
  },
  REEF: {
    name: "REEF",
    image: ReefIcon,
    price: 0.016
  },
  FRONT: {
    name: "FRONT",
    image: FrontIcon,
    price: 0.68
  },
  TVK: {
    name: "TVK",
    image: TVKIcon,
    price: 0.16
  },
  NORD: {
    name: "NORD",
    image: NORD,
    price: 4.62
  },
  ROUTE: {
    name: "ROUTE",
    image: RouteICon,
    price: 2.4
  },
  ZERO: {
    name: "ZEE",
    image: ZERO,
    price: 0.35
  }
};

export const tokenListV1 = {
  ORO: "0xef67699222EE81F6a6Dcd0a9ba88C24d783c3b46",
  MATIC: "0xe98F9b3892229784ccc1Fb9BF7F45C3579354118",
  CNTR: "0xbD43847337b0558828aB6290599b20995b1367A8",
  REEF: "0xCcC3206CEe685bBD62ABcC37C99404d8eF0f23a7",
  FRONT: "0x5B11390207F723145a47dC4a6B69A2C5773FfB25"
};

export const tokenListV2 = {
  ORO: "0xef67699222EE81F6a6Dcd0a9ba88C24d783c3b46",
  MATIC: "0xe98F9b3892229784ccc1Fb9BF7F45C3579354118",
  NORD: "0xB596E98821C558860ec5d3D59460ea9e19a44F66",
  ROUTE: "0xb47F597260EdBf30386AECC28938B25D5f0635B7",
  TVK: "0xBe2845E7520223BfD6Ab4e6f6ad4369f6FFa6E0E",
  ZERO: "0x3555209Ff2933b548ee31646cB3ee201f41A2625"
};
