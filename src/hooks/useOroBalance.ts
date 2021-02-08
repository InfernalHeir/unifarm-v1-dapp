import { useState } from "react";
import useTokenContract from "./useTokenContract";
import useSwr from "swr";
import { ORO } from "../constants";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";

const useOroBalance = (): number | string => {
  const [balance, setBalance] = useState<number | string>(0);
  const { account } = useWeb3React<Web3Provider>();

  const fetcher = (library: any) => (...args: any[]) => {
    const [method, ...params] = args;
    console.log(method, params);
    const balanceInWei = library[method](...params);
    // set precise
    const balanceInEther = parseFloat(formatEther(balanceInWei)).toPrecision(4);
    // set the state here
    setBalance(balanceInEther);
  };

  const instance = useTokenContract(ORO);
  useSwr(["balanceOf", account], {
    fetcher: fetcher(instance),
  });
  return balance;
};

export default useOroBalance;
