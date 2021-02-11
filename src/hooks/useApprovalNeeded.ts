import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { validateAddress } from "../utils";
import useTokenContract, { useUnifarmV2Contract } from "./useTokenContract";
import { UnifarmTokenAddress } from "../constants";
import { formatEther } from "@ethersproject/units";

const useApprovalNeeded = (tokenAddress: string, stakeAmount: number) => {
  const { active, account } = useWeb3React();

  const [isApprovalNeed, setApprove] = useState<boolean | string>(null);

  const isAddress = validateAddress(account);

  const instance: any = useTokenContract(tokenAddress);

  useEffect(() => {
    if (!active || !instance) return null;
    instance
      .allowance(isAddress, UnifarmTokenAddress)
      .then((result) => {
        const approvedTokens: number = parseFloat(formatEther(result));
        if (stakeAmount > approvedTokens) {
          return setApprove(true);
        } else {
          setApprove(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [active, account]);
  return isApprovalNeed;
};

export default useApprovalNeeded;
