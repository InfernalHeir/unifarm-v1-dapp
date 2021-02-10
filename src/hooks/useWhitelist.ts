// this hook use for whitelist
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { validateAddress } from "../utils";
import { useUnifarmV2Contract } from "./useTokenContract";

const useWhiteList = (address: string) => {
  const { active, library } = useWeb3React();
  if (!active && !library) return null;
  const instance = useUnifarmV2Contract();
  const [isWhitelist, setWhitelist] = useState<boolean | null>(null);
  const isAddress = validateAddress(address);
  useEffect(() => {
    instance
      .whiteList(isAddress)
      .then((result) => {
        setWhitelist(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [active]);

  return isWhitelist;
};

export default useWhiteList;
