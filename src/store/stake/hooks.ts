<<<<<<< HEAD
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputMaxButton, setTokenDetails, TypeInput } from './action'
import { AppState } from '../index'
import useFetchTokenBalance from '../../hooks/useFetchTokenBalance'
import { IStakeInfo } from './reducer'
import { useWeb3React } from '@web3-react/core'
import useTokenContract, {
  useUnifarmV1Contract,
  useUnifarmV2Contract
} from '../../hooks/useTokenContract'
import { getExactAddress } from '../../utils'
import { useResetData, useResetPool } from '../pools/hooks'
import { useSetTransactionStatus } from '../transactions/hooks'
import { TXSTATUS } from '../transactions/reducer'
import { useOpenPendingTxModal, useCloseModal } from '../app/hooks'
import { ModalTypes } from '../app/reducer'

export const useSetTokenDetails = () => {
  const dispatch = useDispatch()
=======
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
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

  const setSelectedTokenDetails = (dispatchArgs: IStakeInfo) => {
    if (!dispatchArgs) return null;
    return dispatch(setTokenDetails(dispatchArgs));
  };

  return { setSelectedTokenDetails };
};

export const useDerivedStakeInfo = () => {
  const state = useSelector((state: AppState) => {
<<<<<<< HEAD
    return state.stakeReducer
  })
  return state
}

export const useOnChange = () => {
  const state = useSelectedTokens()
  const close = useCloseModal()

  const { library, account } = useWeb3React()

  const getBalance = useFetchTokenBalance(state.tokenAddress)
  const getTokenInstance = useTokenContract(state.tokenAddress)
  const setPending: any = useOpenPendingTxModal()
  // console.log(getTokenInstance)
  const dispatch = useDispatch()

  const { setResetPool }: any = useResetPool()
  const isFulllied = useResetData()

  const onInputChange = (value: number) => {
    if (!state.isSelected) return null

=======
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
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
    dispatch(
      InputMaxButton({
        stakingAmount: parseBalance
      })
<<<<<<< HEAD
    )

    if (isFulllied.fullfilled) {
      setResetPool(true)
    }
  }

  const onMaxButton = async () => {
    // by clicking user will fetch the token balance
    if (!state.tokenAddress) return null
    const balance = await getTokenInstance.methods.balanceOf(account).call()
    const convertIntoEther = library.utils.fromWei(balance)
    // update the input state.
    // it will show the staking Amount Automatically.
    dispatch(
      InputMaxButton({
        stakingAmount: convertIntoEther
      })
    )
  }

  const unifarmV1Instance = useUnifarmV1Contract()
  const unifarmV2Instance = useUnifarmV2Contract()

  const instance = useTokenContract(state.tokenAddress)
  const setTrasactionStatus = useSetTransactionStatus()

  const onApprove = async (typeFor: string) => {
    const getApprovalAddress = getExactAddress(typeFor)
    const parseTokens = library.utils.toWei(state.stakingAmount.toString())

    try {
      // setPending transaction status
      setPending()
      setTrasactionStatus(TXSTATUS.PENDING, state.stakingAmount)

      await instance.methods.approve(getApprovalAddress, parseTokens).send({
        from: account
      })
      // dispatch applciation success here.
    } catch (err) {
      close()
    }
  }

  const onStake = async (typeFor: string) => {
    const parseTokens = library.utils.toWei(state.stakingAmount.toString())
    if (!state.tokenAddress || !state.stakingAmount) return null
    if (typeFor === 'v1') {
      try {
        // setApp loader
        // check here for user max stake check
        const userMaxStake = await unifarmV1Instance.methods
          .tokenDetails(state.tokenAddress)
          .call()
        const userMax = userMaxStake[2]
        const etherAmount = library.utils.fromWei(userMax)

        if (userMax > parseTokens) {
          //setAppError(true, `Maximun token can be staked ${etherAmount} Tokens`)
          console.log('error')
        }

        await unifarmV1Instance.methods
          .stake(state.tokenAddress, parseTokens)
          .send({
            from: account
          })
        // dispatch applciation success here.
      } catch (err) {}
    } else {
      try {
        // setApp loader
        const referal = '0xF6C172dd45ABd82E1F067801B309A7fFC4977971'

        const userMaxStake = await unifarmV2Instance.methods
          .tokensDetails(state.tokenAddress)
          .call()
        const userMaxStakeIndex = userMaxStake[2]
        const etherAmount = library.utils.fromWei(userMaxStakeIndex)

        if (userMaxStakeIndex > parseTokens) {
        }

        await unifarmV2Instance.methods
          .stake(referal, state.tokenAddress, parseTokens)
          .send({
            from: account
          })
        // dispatch applciation success here.
      } catch (err) {}
    }
  }

  const onUnStake = async (typeFor?: string, stakeId?: string) => {
    // check first is it for v1 for v2
    var unifarmInstance
    if (typeFor === 'v1') {
      unifarmInstance = unifarmV1Instance
    } else {
      unifarmInstance = unifarmV2Instance
    }
    // call unstake method
    // first set the modal open the call this function
    await unifarmInstance.methods.unStake(stakeId).send({
=======
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
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
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
<<<<<<< HEAD
    onStake,
    onUnStake,
    onMaxButton
  }
}
=======
    onV1Stake,
    onV2Stake
  };
};
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
