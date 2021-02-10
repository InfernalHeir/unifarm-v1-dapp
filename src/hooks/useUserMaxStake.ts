import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { validateAddress } from "../utils";
import { useUnifarmV2Contract } from "./useTokenContract";
import { formatEther } from "@ethersproject/units";

const useUserMaxStake = (tokenAddress: string): any => {
  const [isUserMaxStake, setMaxStakeValue] = useState<string | boolean>(false);

  const { active, account } = useWeb3React();

  const instance = useUnifarmV2Contract();

  useEffect(() => {
    if (!active) return null;
    instance
      .tokenDetails(tokenAddress)
      .then((result) => {
        setMaxStakeValue(formatEther(result[3]));
      })
      .catch((error) => {
        setMaxStakeValue(error.message);
      });
  }, [active]);
  return isUserMaxStake;
};

export default useUserMaxStake;
