import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { validateAddress } from "../utils";
import useTokenContract from "./useTokenContract";

const useFetchTokenBalance = (tokenAddress: string) => {
  const { active, account, library } = useWeb3React();
  const [isApprovalNeed, setApprove] = useState<boolean | number>(null);

  const isAddress = validateAddress(account);
  const instance: any = useTokenContract(tokenAddress);

  useEffect(() => {
    if (!active || !account || !library || !instance) return null;
    instance
      .balanceOf(isAddress)
      .then((result) => {
        setApprove(result.toString());
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [active, instance]);
  return isApprovalNeed;
};

export default useFetchTokenBalance;
