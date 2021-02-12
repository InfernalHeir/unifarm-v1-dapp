import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { validateAddress } from "../utils";
import useTokenContract from "./useTokenContract";
import { UnifarmV2Address, UnifarmV1Address } from "../constants";
import { formatEther } from "@ethersproject/units";

const useApprovalNeeded = (
  contractType: string,
  tokenAddress: string,
  stakeAmount: number
) => {
  const { active, account } = useWeb3React();

  const [isApprovalNeed, setApprove] = useState<boolean | string>(null);

  const isAddress = validateAddress(account);

  const instance: any = useTokenContract(tokenAddress);
  var contractAddress;

  if (contractType === "v1") {
    // you can use v1 instance
    contractAddress = UnifarmV1Address;
  } else {
    contractAddress = UnifarmV2Address;
  }

  useEffect(() => {
    if (!active || !instance) return null;
    instance
      .allowance(isAddress, contractAddress)
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
