import { getAddress } from "@ethersproject/address";

export const validateAddress = (address: string): string | false => {
  try {
    return getAddress(address);
  } catch (err) {
    return false;
  }
};

export function shortenAddress(address: string, chars = 4): string {
  const parsed = validateAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}
