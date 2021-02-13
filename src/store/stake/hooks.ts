import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTokenDetails, TypeInput } from './action'
import { AppState } from '../index'
import useFetchTokenBalance from '../../hooks/useFetchTokenBalance'
import { IStakeInfo } from './reducer'
import { useWeb3React } from '@web3-react/core'
import { useSetApplicationStatus } from '../app/hooks'
import useTokenContract, {
  useUnifarmV1Contract,
  useUnifarmV2Contract
} from '../../hooks/useTokenContract'
import { getExactAddress } from '../../utils'
import { useResetData, useResetPool } from '../pools/hooks'

export const useSetTokenDetails = () => {
  const dispatch = useDispatch()
  const setSelectedTokenDetails = (dispatchArgs: IStakeInfo) => {
    if (!dispatchArgs) return null
    return dispatch(setTokenDetails(dispatchArgs))
  }

  return { setSelectedTokenDetails }
}

export const useSelectedTokens = () => {
  const state = useSelector((state: AppState) => {
    return state.stakeReducer
  })
  return state
}

export const useOnChange = () => {
  const state = useSelectedTokens()

  const { setAppError, setAppSuccess, setApploader } = useSetApplicationStatus()

  const { library, account } = useWeb3React()

  const getBalance = useFetchTokenBalance(state.tokenAddress)
  const dispatch = useDispatch()

  const { setResetPool }: any = useResetPool()
  const isFulllied = useResetData()

  const onInputChange = (value: number) => {
    if (!state.isSelected) return null

    setAppError(false, null)

    dispatch(
      TypeInput({
        stakingAmount: value
      })
    )

    if (isFulllied.fullfilled) {
      setResetPool(true)
    }
  }

  const unifarmV1Instance = useUnifarmV1Contract()
  const unifarmV2Instance = useUnifarmV2Contract()

  const instance = useTokenContract(state.tokenAddress)

  const onApprove = async (typeFor: string) => {
    const getApprovalAddress = getExactAddress(typeFor)
    const parseTokens = library.utils.toWei(state.stakingAmount.toString())

    try {
      // setApp loader
      setApploader(true)
      await instance.methods.approve(getApprovalAddress, parseTokens).send({
        from: account
      })
      // dispatch applciation success here.
      setAppSuccess(true, 'Approve Successfully')
    } catch (err) {
      setAppError(true, err.message)
      setApploader(false)
    }
  }

  const onStake = async (typeFor: string) => {
    const parseTokens = library.utils.toWei(state.stakingAmount.toString())

    if (typeFor === 'v1') {
      try {
        // setApp loader
        setApploader(true)
        // check here for user max stake check

        const userMaxStake = await unifarmV1Instance.methods
          .tokensDetails(state.tokenAddress)
          .call()
        const userMax = userMaxStake[2]
        const etherAmount = library.utils.fromWei(userMax)

        if (userMax > parseTokens) {
          setAppError(true, `Maximun token can be staked ${etherAmount} Tokens`)
        }

        await unifarmV1Instance.methods
          .stake(state.tokenAddress, parseTokens)
          .send({
            from: account
          })
        // dispatch applciation success here.
        setAppSuccess(true, 'Stake Successfully')
        setApploader(false)
      } catch (err) {
        setAppError(true, err.message)
      }
    } else {
      try {
        // setApp loader
        setApploader(true)
        const referal = '0xF6C172dd45ABd82E1F067801B309A7fFC4977971'

        const userMaxStake = await unifarmV2Instance.methods
          .tokensDetails(state.tokenAddress)
          .call()
        const userMaxStakeIndex = userMaxStake[2]
        const etherAmount = library.utils.fromWei(userMaxStakeIndex)

        if (userMaxStakeIndex > parseTokens) {
          setAppError(true, `Maximun token can be staked ${etherAmount} Tokens`)
        }

        await unifarmV2Instance.methods
          .stake(referal, state.tokenAddress, parseTokens)
          .send({
            from: account
          })
        // dispatch applciation success here.
        setAppSuccess(true, 'Approve Successfully')
        setApploader(false)
      } catch (err) {
        setAppError(true, err.message)
      }
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
      from: account
    })
  }

  return {
    onInputChange,
    onApprove,
    onStake,
    onUnStake
  }
}
