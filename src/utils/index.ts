import { getAddress } from "@ethersproject/address";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";

export const validateAddress = (address: string): string | false => {
  try {
    return getAddress(address);
  } catch (err) {
    return false;
  }
};

export const shortenAddress = (address: string, chars = 4): string => {
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
