import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStakingDetails, TypeInput } from "./action";
import { AppState } from "../index";
import useFetchTokenBalance from "../../hooks/useFetchTokenBalance";
import { setApplicationError } from "../app/action";
import { parseUnits, formatEther } from "@ethersproject/units";
import { useUnifarmV2Contract } from "../../hooks/useTokenContract";
import { tokenAddressArray } from "../../constants";
import useApprovalNeeded from "../../hooks/useApprovalNeeded";

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
    if (value * 10 * 10 ** 18 > getBalance) {
      // set Application here
      return dispatch(
        setApplicationError({
          appStatus: false,
          message: `Insufficient ${state.name} Tokens`
        })
      );
    }
    dispatch(
      setApplicationError({
        appStatus: true
      })
    );

    dispatch(
      TypeInput({
        stakingAmount: value
      })
    );
  };

  const onCalculateRewards = async () => {
    /* let totalStaked = await contract.totalStaking(state.tokenAddress);

    const selectedTokenRewardByOther = [];

    for (const key in tokenAddressArray) {
      const tokenDailyDistribution = await contract.tokenDailyDistribution(
        state.tokenAddress,
        tokenAddressArray[key]
      );

      const selectedTokenReward =
        (state.stakingAmount * tokenDailyDistribution) / (10 * 10 ** 18);

      selectedTokenRewardByOther.push(selectedTokenReward);
      // console.log('selectedTokenReward', selectedTokenReward);
    }
    const dsequenceList = [];
    var i: number;
    for (let i = 0; i < 9; i++) {
      const sequence = await contract.tokensSequenceList(state.tokenAddress, i);
      dsequenceList.push(sequence.toLowerCase());
    }

    const sequenceList = [];
    for (let i = 0; i < 9; i++) {
      let key = getKeyByValue(tokenAddressArray, dsequenceList[i]);
      sequenceList.push(key);
    }
    function getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    }
  }; */
  };

  return {
    onInputChange,
    onCalculateRewards
  };
};
