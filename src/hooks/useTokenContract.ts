import { useMemo } from "react";
import TokenABI from "../constants/ABI/ERC20.json";
import { useWeb3React } from "@web3-react/core";
import { getTokenInstance } from "../utils";

const useTokenContract = (address: string) => {
  const { library, active } = useWeb3React();
  if (!active && !library) return null;
  return useMemo(() => {
    getTokenInstance(address, TokenABI, library);
  }, [library, active]);
};

export default useTokenContract;
