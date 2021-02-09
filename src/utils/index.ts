import { getAddress } from "@ethersproject/address";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { injected } from "../connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";
import MetamaskLogo from "../assests/images/metamask.png";

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
  }
  return null;
};
