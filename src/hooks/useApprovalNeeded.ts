import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { validateAddress } from "../utils";
import useTokenContract, { useUnifarmV2Contract } from "./useTokenContract";
import { UnifarmTokenAddress } from "../constants";

const useApprovalNeeded = (stakeAmount: string) => {
  const { active, account } = useWeb3React();
  if (!active) return null;

  const [isApprovalNeed, setApprove] = useState<boolean | string>(null);

  const isAddress = validateAddress(account);
  const instance: any = useTokenContract(
    "0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46"
  );

  useEffect(() => {
    instance.allowance(isAddress, UnifarmTokenAddress).then((result) => {
      setApprove(result.toString());
    });
  }, [active, account]);
  return isApprovalNeed;
};

export default useApprovalNeeded;
