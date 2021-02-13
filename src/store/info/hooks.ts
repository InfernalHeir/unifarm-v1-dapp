import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '..'
import {
  useUnifarmV1Contract,
  useUnifarmV2Contract
} from '../../hooks/useTokenContract'
import { setUserStakingDetails } from './actions'
import firebase from '../../firebaseConfig'
import { useWeb3React } from '@web3-react/core'

const getStakingDetailsV1 = async (unifarmV1: any, account: string) => {
  if (!unifarmV1 || !account) return null
  try {
    // tokenNames
    const tokenNames = []
    // render Object Final Output.
    const renderObject = []
    // unifarmV1 view Staking Details.
    const stakeDetails = await unifarmV1.methods
      .viewStakingDetails(account)
      .call()
    // staking details.
    // it also array.
    console.log(stakeDetails)
  } catch (err) {
    console.log(err)
  }
}

export const useStakingDataOnLoadOrPropsReceive = () => {
  // dispatch
  const dispatch = useDispatch()
  // unifarm v1 or v2 both
  const unifarmV1 = useUnifarmV1Contract()
  const { active, account } = useWeb3React()
}

export const useSelectStakingDetails = () => {
  return useSelector((state: AppState) => {
    return state.InfoReducer
  })
}
