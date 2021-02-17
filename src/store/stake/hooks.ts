import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputMaxButton, setTokenDetails, TypeInput } from "./action";
import { AppState } from "../index";
//import useFetchTokenBalance from "../../hooks/useFetchTokenBalance";
import { IStakeInfo } from "./reducer";
import { useWeb3React } from "@web3-react/core";
import useTokenContract, {
  useUnifarmV1Contract,
  useUnifarmV2Contract
} from "../../hooks/useTokenContract";
import { getExactAddress } from "../../utils";
/* import { useResetData, useResetPool } from "../pools/hooks";
import { useSetTransactionStatus } from "../transactions/hooks";
import { TXSTATUS } from "../transactions/reducer";
import { useOpenPendingTxModal, useCloseModal } from "../app/hooks";
import { ModalTypes } from "../app/reducer"; */

export const useSetTokenDetails = () => {
  const dispatch = useDispatch();

  const setSelectedTokenDetails = (dispatchArgs: IStakeInfo) => {
    if (!dispatchArgs) return null;
    return dispatch(setTokenDetails(dispatchArgs));
  };

  return { setSelectedTokenDetails };
};

export const useDerivedStakeInfo = () => {
  const state = useSelector((state: AppState) => {
    return state.stakeReducer;
  });
  return state;
};

export const useStakeActions = () => {
  const { stakingAmount, tokenAddress } = useDerivedStakeInfo();
  const { library, account } = useWeb3React();
  const dispatch = useDispatch();
  const instance = useTokenContract(tokenAddress);
  const unifarmv1 = useUnifarmV1Contract();
  const unifarmv2 = useUnifarmV2Contract();

  const onInputChange = useCallback(
    (value: number) => {
      if (!library && !account) return null;
      dispatch(
        TypeInput({
          stakingAmount: value
        })
      );
    },
    [stakingAmount]
  );

  const onMaxButton = useCallback(async () => {
    if (tokenAddress) return null;
    const balance = await instance.methods.balanceOf(account).call();
    const parseBalance = library.utils.fromWei(balance);
    dispatch(
      InputMaxButton({
        stakingAmount: parseBalance
      })
    );
  }, [tokenAddress]);

  const onApprove = useCallback(
    async (typeFor: string) => {
      const approvalAddress = getExactAddress(typeFor);
      const parseTokens = library.utils.toWei(stakingAmount);
      await instance.methods.approve(approvalAddress, parseTokens).send({
        from: account
      });
    },
    [tokenAddress]
  );

  const onV1Stake = useCallback(async () => {
    const parseTokens = library.utils.toWei(stakingAmount);
    if (!tokenAddress || !stakingAmount) return null;
    await unifarmv1.methods.stake(tokenAddress, parseTokens).send({
      from: account
    });
  }, [stakingAmount]);

  const onV2Stake = useCallback(async () => {
    const parseTokens = library.utils.toWei(stakingAmount);
    if (!tokenAddress || !stakingAmount) return null;
    const refferalAddress = "0xF6C172dd45ABd82E1F067801B309A7fFC4977971";
    await unifarmv2.methods
      .stake(refferalAddress, tokenAddress, parseTokens)
      .send({
        from: account
      });
  }, [stakingAmount]);

  return {
    onInputChange,
    onMaxButton,
    onApprove,
    onV1Stake,
    onV2Stake
  };
};
