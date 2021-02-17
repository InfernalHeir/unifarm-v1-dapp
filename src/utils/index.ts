import { getAddress } from "@ethersproject/address";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { injected, trustwallet } from "../connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";
import MetamaskLogo from "../assests/images/connectors/metamask.png";
import TrustWalletLogo from "../assests/images/connectors/trustWallet.png";
import { tokenListV1, UnifarmV1Address, UnifarmV2Address } from "../constants";
import { Mapping } from "../constants";

export const validateAddress = (address: string): string | false => {
  try {
    return getAddress(address);
  } catch (err) {
    return false;
  }
};

export const shortenAddress = (address: any, chars = 4): string => {
  const parsed = validateAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
};

export const getTokenInstance = (
  tokenAddress: string,
  TokenABI: any,
  library: Web3Provider
) => {
  return new Contract(tokenAddress, TokenABI, library);
};

export const getConnectorLogo = (connector: AbstractConnector): string => {
  if (connector === injected) {
    return MetamaskLogo;
  } else if (connector === trustwallet) {
    return TrustWalletLogo;
  }
  return null;
};

export const getExactAddress = (TypeFor: string) => {
  if (TypeFor === "v1") return UnifarmV1Address;
  else if (TypeFor === "v2") return UnifarmV2Address;
  else return null;
};

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

export const getImages = (tokensSequence: string[]) => {
  var imagesArray = [];
  if (!tokensSequence.length) return null;
  for (var k = 0; k < tokensSequence.length; k++) {
    const address = tokensSequence[k];
  }
};

export const getTokenNameByAddress = (tokenAddress: string) => {
  const getKey = getKeyByValue(tokenListV1, tokenAddress);
  return Mapping[getKey].name;
};
