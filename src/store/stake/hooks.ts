import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStakingDetails, TypeInput } from "./action";
import { AppState } from "../index";
import useFetchTokenBalance from "../../hooks/useFetchTokenBalance";
import { setApplicationError } from "../app/action";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";

export const useSetTokenDetails = (dispatchArgs: any | null) => {
  if (dispatchArgs === null) return null;
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(setStakingDetails(dispatchArgs));
  }, [dispatchArgs]);
};

export const useSelectedTokens = () => {
  const state = useSelector((state: AppState) => {
    return state.stakeReducer;
  });
  return state;
};

export const useOnChange = () => {
  const state = useSelectedTokens();

  const getBalance: any = useFetchTokenBalance(state.tokenAddress);

  const dispatch = useDispatch();

  const onInputChange = (value: number) => {
    const etherValue: any = formatEther(getBalance);
    if (value > etherValue) {
      // set Application here
      dispatch(
        setApplicationError({
          appStatus: false,
          message: `Insufficient ${state.name} Tokens`
        })
      );
    }
    dispatch(
      TypeInput({
        stakingAmount: value
      })
    );
  };
  return {
    onInputChange
  };
};
