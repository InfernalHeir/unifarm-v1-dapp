import { useMemo, useCallback } from "react";
import TokenABI from "../constants/ABI/ERC20.json";
import { useWeb3React } from "@web3-react/core";
import { getTokenInstance } from "../utils";
import { UnifarmTokenAddress } from "../constants";
import UnifarmABI from "../constants/ABI/UNIFARMV2.json";

const useTokenContract = (address: string) => {
  const { library } = useWeb3React();
  if (!address) return null;
  return getTokenInstance(address, TokenABI, library);
};

export const useUnifarmV2Contract = () => {
  const { library, active } = useWeb3React();
  if (!active && !library) return null;
  return getTokenInstance(UnifarmTokenAddress, UnifarmABI, library);
};
export default useTokenContract;
