import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTokenDetails, TypeInput } from "./action";
import { AppState } from "../index";
import useFetchTokenBalance from "../../hooks/useFetchTokenBalance";
import { IStakeInfo } from "./reducer";
import { useWeb3React } from "@web3-react/core";
import { useSetApplicationStatus } from "../app/hooks";
import useTokenContract, {
  useUnifarmV1Contract,
  useUnifarmV2Contract
} from "../../hooks/useTokenContract";
import {
  SupportedTokens,
  tokenAddressArrayV1,
  tokenAddressArrayV2
} from "../../constants";
import { getExactAddress } from "../../utils";

export const useSetTokenDetails = () => {
  const dispatch = useDispatch();
  const setSelectedTokenDetails = (dispatchArgs: IStakeInfo) => {
    if (!dispatchArgs) return null;
    return dispatch(setTokenDetails(dispatchArgs));
  };

  return { setSelectedTokenDetails };
};

export const useSelectedTokens = () => {
  const state = useSelector((state: AppState) => {
    return state.stakeReducer;
  });
  return state;
};

export const useOnChange = () => {
  const state = useSelectedTokens();

  const {
    setAppError,
    setAppSuccess,
    setApploader
  } = useSetApplicationStatus();

  const { library, account } = useWeb3React();

  const getBalance = useFetchTokenBalance(state.tokenAddress);
  const dispatch = useDispatch();

  const onInputChange = (value: number) => {
    if (!state.isSelected) return null;
    const balance = library.utils.fromWei(getBalance.toString());
    if (value > balance) {
      // set Application here
      return setAppError(true, `Insufficient ${state.name} Tokens`);
    }

    setAppError(false, null);

    dispatch(
      TypeInput({
        stakingAmount: value
      })
    );
  };

  const unifarmV1Instance = useUnifarmV1Contract();

  const unifarmV2Instance = useUnifarmV2Contract();

  const onCalculateRewards = async () => {
    if (state.v1 && state.v2) {
      // calculate for v1 and v2 both
      const selectedTokenV1RewardsTokens = [];

      let totalStaked = await unifarmV1Instance.methods
        .totalStaking(state.tokenAddress)
        .call();

      // tokenRewards for v1
      const etherAmount = library.utils.toWei(state.stakingAmount.toString());

      for (const key in tokenAddressArrayV1) {
        const tokenDailyDistributionForV1 = await unifarmV1Instance.methods
          .tokenDailyDistribution(state.tokenAddress, tokenAddressArrayV1[key])
          .call();

        var tokenRewrads =
          (totalStaked / etherAmount) * tokenDailyDistributionForV1;
        selectedTokenV1RewardsTokens.push(tokenRewrads);
      }

      // token Sequence list for v1
      var tokensSequenceListArray = [];

      for (let i = 0; i < 5; i++) {
        const sequence = await unifarmV1Instance.methods
          .tokensSequenceList(state.tokenAddress, i)
          .call();
        tokensSequenceListArray.push(sequence.toLowerCase());
      }

      console.log(tokensSequenceListArray);
      console.log(selectedTokenV1RewardsTokens);
    }
    return null;
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

  const instance = useTokenContract(state.tokenAddress);

  const onApprove = async (typeFor: string) => {
    const getApprovalAddress = getExactAddress(typeFor);
    const parseTokens = library.utils.toWei(state.stakingAmount.toString());

    try {
      // setApp loader
      setApploader(true);
      await instance.methods.approve(getApprovalAddress, parseTokens).send({
        from: account
      });
      // dispatch applciation success here.
      setAppSuccess(true, "Approve Successfully");
    } catch (err) {
      setAppError(true, err.message);
      setApploader(false);
    }
  };

  const onStake = async (typeFor: string) => {
    const parseTokens = library.utils.toWei(state.stakingAmount.toString());

    let getVersionInstance;

    if (typeFor === "v1") {
      try {
        // setApp loader
        setApploader(true);

        await unifarmV1Instance.methods
          .stake(state.tokenAddress, parseTokens)
          .send({
            from: account
          });
        // dispatch applciation success here.
        setAppSuccess(true, "Approve Successfully");
        setApploader(false);
      } catch (err) {
        setAppError(true, err.message);
      }
    } else {
      try {
        // setApp loader
        setApploader(true);
        const referal = "0xF6C172dd45ABd82E1F067801B309A7fFC4977971";

        await getVersionInstance.methods
          .stake(referal, state.tokenAddress, parseTokens)
          .send({
            from: account
          });
        // dispatch applciation success here.
        setAppSuccess(true, "Approve Successfully");
        setApploader(false);
      } catch (err) {
        setAppError(true, err.message);
      }
    }
  };

  return {
    onInputChange,
    onCalculateRewards,
    onApprove,
    onStake
  };
};
