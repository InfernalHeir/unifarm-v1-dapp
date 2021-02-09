import MaticIcon from "../assests/images/Sidechain/matic.png";
//import BSCIcon from "../assets/images/Sidechain/bnb.png";
import ELrondIcon from "../assests/images/Sidechain/Elrond.png";
import PolkaIcon from "../assests/images/Sidechain/polkadot.png";
import TezosIcon from "../assests/images/Sidechain/tezos.png";
import CosmosIcon from "../assests/images/Sidechain/cosmos.png";

interface ITokenList {
  [ChainName: string]: {
    chainName: string;
    chainIcon: string;
    rpc: string | null;
  };
}

const chains: ITokenList = {
  MATIC: {
    chainName: "Matic",
    chainIcon: MaticIcon,
    rpc: "https://testnet2.matic.network"
  },
  POLKA: {
    chainName: "Polkadot",
    chainIcon: PolkaIcon,
    rpc: null
  },
  TEZOS: {
    chainName: "Tezos",
    chainIcon: TezosIcon,
    rpc: null
  },
  COSMOS: {
    chainName: "Cosmos",
    chainIcon: CosmosIcon,
    rpc: null
  },
  ELROND: {
    chainName: "ELrond",
    chainIcon: ELrondIcon,
    rpc: null
  }
};
export default chains;
