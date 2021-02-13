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
import { useSetApplicationStatus } from '../app/hooks'

const getStakingDetailsV1 = async (unifarmV1: any, account: string) => {
  if (!account || !unifarmV1) return null

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
    const tokenAddress = stakeDetails[0]
    const isActive = stakeDetails[1]
    const stakeIDs = stakeDetails[2]
    const stakeAmount = stakeDetails[3]
    const startTime = stakeDetails[4]

    // this
    const sequenceListEveryStake = {}
    const rewardEachStake = {}
    const sequenceListImages = {}

    for (let i = 0; i < stakeIDs.length; i++) {
      let sequenceList = []

      for (let k = 0; k < 5; k++) {
        const sequence = await unifarmV1.methods
          .tokensSequenceList(tokenAddress[i], k)
          .call()
        sequenceList.push(sequence.toLowerCase())
      }
      // debugger
      sequenceListEveryStake[stakeIDs[i]] = sequenceList

      let rewardsAmt = []

      for (let item of sequenceListEveryStake[stakeIDs[i]]) {
        if (isActive[i]) {
          const avaliableRewards = await unifarmV1.methods
            .viewAvailableRewards(account, stakeIDs[i], item)
            .call()
          rewardsAmt.push(avaliableRewards)
        } else {
          rewardsAmt = [0.0, 0.0, 0.0, 0.0, 0.0]
        }
      }

      for (let i = 0; i < 5; i++) {
        let obj = {}
        obj['tokenName'] = tokenNames[i]
        obj['isActive'] = isActive[i]
        obj['stakeID'] = stakeIDs[i]
        obj['stakeAmount'] = stakeAmount[i]
        obj['DaysStaked'] = startTime[i]
        // obj['refreshTime'] = refereshTime[i];
        obj['MyRewards'] = rewardEachStake[stakeIDs[i]]
        obj['rewarsTokenSrc'] = sequenceListImages[stakeIDs[i]]
        obj['typeFor'] = 'v1'
        obj['isLockIn'] = false

        renderObject.push(obj)
      }

      // console.log('render object', renderObject);
      const unStakeData = []

      const ref = firebase.database().ref('blockHashTable')
      ref.on('value', (snapshot) => {
        // console.log('firebase response here', snapshot);
        if (snapshot && snapshot.exists()) {
          const obj = snapshot.val()
          for (let id in obj) {
            unStakeData.push(obj[id])
          }
        }
      })
      console.log({
        renderObject,
        unStakeData
      })
    }
  } catch (err) {
    console.log(err.message)
  }
}

const getStakingDetailsV2 = async (unifarmV2: any, account: string) => {
  if (!account || !unifarmV2) return null

  try {
    // tokenNames
    const tokenNames = []
    // render Object Final Output.
    const renderObject = []
    // unifarmV1 view Staking Details.
    const stakeDetails = await unifarmV2.methods
      .viewStakingDetails(account)
      .call()
    // staking details.
    // it also array.
    const tokenAddress = stakeDetails[0]
    const isActive = stakeDetails[1]
    const stakeIDs = stakeDetails[2]
    const stakeAmount = stakeDetails[3]
    const startTime = stakeDetails[4]

    // this
    const sequenceListEveryStake = {}
    const rewardEachStake = {}
    const sequenceListImages = {}

    for (let i = 0; i < stakeIDs.length; i++) {
      let sequenceList = []

      for (let k = 0; k < 6; k++) {
        const sequence = await unifarmV2.methods
          .tokensSequenceList(tokenAddress[i], k)
          .call()
        sequenceList.push(sequence.toLowerCase())
      }
      // debugger
      sequenceListEveryStake[stakeIDs[i]] = sequenceList

      let rewardsAmt = []

      for (let item of sequenceListEveryStake[stakeIDs[i]]) {
        if (isActive[i]) {
          const avaliableRewards = await unifarmV2.methods
            .viewAvailableRewards(account, stakeIDs[i], item)
            .call()
          rewardsAmt.push(avaliableRewards)
        } else {
          rewardsAmt = [0.0, 0.0, 0.0, 0.0, 0.0]
        }
      }

      for (let i = 0; i < 6; i++) {
        let obj = {}
        obj['tokenName'] = tokenNames[i]
        obj['isActive'] = isActive[i]
        obj['stakeID'] = stakeIDs[i]
        obj['stakeAmount'] = stakeAmount[i]
        obj['DaysStaked'] = startTime[i]
        // obj['refreshTime'] = refereshTime[i];
        obj['MyRewards'] = rewardEachStake[stakeIDs[i]]
        obj['rewarsTokenSrc'] = sequenceListImages[stakeIDs[i]]
        obj['typeFor'] = 'v2'
        obj['isLockIn'] = true

        renderObject.push(obj)
      }
      // console.log('render object', renderObject);
      const unStakeDataForV2 = []

      const ref = firebase.database().ref('blockHashTable')
      ref.on('value', (snapshot) => {
        // console.log('firebase response here', snapshot);
        if (snapshot && snapshot.exists()) {
          const obj = snapshot.val()
          for (let id in obj) {
            unStakeDataForV2.push(obj[id])
          }
        }
      })

      console.log({
        renderObject,
        unStakeDataForV2
      })
    }
  } catch (err) {
    console.log(err)
  }
}

export const useStakingDataOnLoadOrPropsReceive = () => {
  // dispatch
  const dispatch = useDispatch()
  // unifarm v1 or v2 both
  const { active, account } = useWeb3React()
  // unifarm v2
  const unifarmV1 = useUnifarmV1Contract()
  const unifarmV2 = useUnifarmV2Contract()

  const { setApploader } = useSetApplicationStatus()

  useEffect(() => {
    // get the token Staking Details for v1
    // set App Loader Here.
    if (!unifarmV1 && !account) return null
    setApploader(true)

    var globalArray = []
    getStakingDetailsV1(unifarmV1, account)
      .then((result) => {
        globalArray.push(result)
      })
      .catch((err) => console.log(err))
    // get the tokenDetails for v2 as well
    getStakingDetailsV2(unifarmV2, account)
      .then((result) => {
        globalArray.push(result)
      })
      .catch((err) => {
        console.log(err)
      })

    dispatch(
      setUserStakingDetails({
        stakeLoader: false,
        stakingPayload: globalArray
      })
    )

    setApploader(false)
  }, [account])
}

export const useSelectStakingDetails = () => {
  return useSelector((state: AppState) => {
    return state.InfoReducer
  })
}
