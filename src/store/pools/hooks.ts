import {
  useUnifarmV1Contract,
  useUnifarmV2Contract
} from '../../hooks/useTokenContract'
import { useSelectedTokens } from '../stake/hooks'
import nord from '../../assests/images/Tokens/Nord.png'
import matic from '../../assests/images/Tokens/matic.png'
import tvk from '../../assests/images/Tokens/TVK.png'
import route from '../../assests/images/Tokens/ROUTE.png'
import front from '../../assests/images/Tokens/frontier.png'
import oro from '../../assests/images/Tokens/oro.png'
import reef from '../../assests/images/Tokens/reef.png'
import cntr from '../../assests/images/Tokens/cntr.png'
import zee from '../../assests/images/Tokens/zeroswap.png'

import { useDispatch, useSelector } from 'react-redux'
import { setLoader } from '../app/action'
import { setDailyRewardsDistrubution, setReset } from '../pools/action'
import { formatEther } from '@ethersproject/units'
import { useSetApplicationStatus } from '../app/hooks'
import { useWeb3React } from '@web3-react/core'
import {
  SupportedTokens,
  tokensSequenceListPool,
  tokensSequenceListPoolV2
} from '../../constants'
import { getKeyByValue } from '../../utils'
import { AppState } from '..'

export const useResetPool = () => {
  const dispatch = useDispatch()
  const setResetPool = (bool: any) => {
    return dispatch(setReset(bool))
  }
  return setResetPool
}

export const useResetData = () => {
  return useSelector((state: AppState) => {
    return state.poolReducer
  })
}

const getImagebyIndex = (object: any, address: string) => {
  var key
  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      if (object[prop] === address) key = prop
    }
  }
  return key
}

export const usePoolData = () => {
  // unifarm contract instance.

  const unifarmV1 = useUnifarmV1Contract()
  const unifarmV2 = useUnifarmV2Contract()
  // selected tokens
  const selectedTokens = useSelectedTokens()
  const { library } = useWeb3React()
  const { setAppError, setApploader, setAppSuccess } = useSetApplicationStatus()
  // dispatch
  const dispatch = useDispatch()

  // getPoolInfo function

  const getV1Rewards = async () => {
    try {
      const selectedTokenRewardByOtherV1 = []

      for (const key in tokensSequenceListPool) {
        const tokens = library.utils.toWei(
          selectedTokens.stakingAmount.toString()
        )

        const selectedTokenReward = await unifarmV1.methods
          .getOneDayReward(
            tokens,
            selectedTokens.tokenAddress,
            tokensSequenceListPool[key]
          )
          .call()

        var Rewardvalue
        if (!selectedTokenReward) {
          Rewardvalue = '0.0'
        }
        Rewardvalue = selectedTokenReward

        const tokensReward = library.utils.fromWei(Rewardvalue.toString())
        // do one calc more
        const getDays = await unifarmV1.methods.stakeDuration().call()
        const getOneDay = getDays / 86400

        const perDayTokensRewards = tokensReward
          ? getOneDay * tokensReward
          : '0'

        selectedTokenRewardByOtherV1.push(perDayTokensRewards)
      }
      return { selectedTokenRewardByOtherV1 }
    } catch (err) {
      alert(err.message)
    }
  }

  const getV2Rewards = async () => {
    try {
      const selectedTokenRewardByOtherV1 = []

      for (const key in tokensSequenceListPool) {
        const tokens = library.utils.toWei(
          selectedTokens.stakingAmount.toString()
        )

        const selectedTokenReward = await unifarmV2.methods
          .getOneDayReward(
            tokens,
            selectedTokens.tokenAddress,
            tokensSequenceListPool[key]
          )
          .call()

        var Rewardvalue
        if (!selectedTokenReward) {
          Rewardvalue = '0.0'
        }
        Rewardvalue = selectedTokenReward
        const tokensReward = library.utils.fromWei(Rewardvalue.toString())
        // do one calc more
        const getDays = await unifarmV2.methods.stakeDuration().call()
        const getOneDay = getDays / 86400

        const perDayTokensRewards = tokensReward
          ? getOneDay * tokensReward
          : '0'

        selectedTokenRewardByOtherV1.push(perDayTokensRewards)
      }
      return { selectedTokenRewardByOtherV1 }
    } catch (err) {
      alert(err.message)
    }
  }

  // get the image Sequence V1
  const getSequenceImageSrcV1 = async () => {
    // for v1
    try {
      var tokenSequenceListForV1 = []
      var i

      for (i = 0; i < 5; i++) {
        const tokenSequnence = await unifarmV1.methods
          .tokensSequenceList(selectedTokens.tokenAddress, i)
          .call()
        tokenSequenceListForV1.push(tokenSequnence)
      }

      let k

      const { selectedTokenRewardByOtherV1 } = await getV1Rewards()

      Object.keys(SupportedTokens).map((key, index) => {
        const tokenAddressSequence = tokenSequenceListForV1[index]
        console.log(tokenAddressSequence)
        const getKeyIndex = getKeyByValue(
          tokensSequenceListPool,
          tokenAddressSequence
        )
        console.log(getKeyIndex)
      })

      for (k = 0; k < tokenSequenceListForV1.length; k++) {
        var address = tokenSequenceListForV1[k]
        var support = SupportedTokens[k]
        console.log(support)
      }
      return { selectedTokenRewardByOtherV1 }
    } catch (err) {
      console.log(err.message)
    }
  }
  // get The image
  const getSequenceImageSrcV2 = async () => {
    try {
      var tokenSequenceListForV2 = []
      var i

      for (i = 0; i < 6; i++) {
        const tokenSequnence = await unifarmV1.methods
          .tokensSequenceList(selectedTokens.tokenAddress, i)
          .call()

        tokenSequenceListForV2.push(tokenSequnence)
      }

      let imageSrcArray = []
      let tokenRewardsName = []
      let k

      const { selectedTokenRewardByOtherV1 } = await getV2Rewards()

      Object.keys(SupportedTokens).map((key, index) => {
        const tokenAddressSequence = tokenSequenceListForV2[index]
        const getKeyIndex = getKeyByValue(
          tokensSequenceListPool,
          tokenAddressSequence
        )
        console.log(getKeyIndex)
      })

      for (k = 0; k < tokenSequenceListForV2.length; k++) {
        var address = tokenSequenceListForV2[k]
        var support = SupportedTokens[k]
        console.log(support)
      }
      return { selectedTokenRewardByOtherV1 }
    } catch (err) {
      console.log(err.message)
    }
  }

  const getSequenceListOfV2 = async () => {
    // for v1
    try {
      var tokenSequenceListForV2 = []
      var i
      for (i = 0; i < 6; i++) {
        const tokenSequnence = await unifarmV2.methods
          .tokensSequenceList(selectedTokens.tokenAddress, i)
          .call()
        tokenSequenceListForV2.push(tokenSequnence)
      }

      let imageSrcArray = []
      let k

      for (k = 0; k < tokenSequenceListForV2.length; k++) {
        const imageSrc = SupportedTokens[k].icon
        imageSrcArray.push(imageSrc)
      }

      return imageSrcArray
    } catch (err) {
      console.log(err.message)
    }
  }

  const getPoolV1DataByOnce = async () => {
    try {
      const getV1PoolData = await unifarmV1.methods
        .tokenDetails(selectedTokens.tokenAddress)
        .call()

      const selectedTokenRewardByOtherV1 = await getSequenceImageSrcV1()
      //const getSequence = await getSequenceImageSrc();
      return {
        poolName: selectedTokens.name,
        poolIcon: selectedTokens.icon,
        rewardsSequenceSrc: [oro, matic, reef, front, cntr],
        Apy: '42%',
        maxStakingLimit: library.utils.fromWei(getV1PoolData[2].toString()),
        network: 'Ethereum',
        moreDetailsRoute: '/stake',
        isFired: true,
        typeFor: 'v1',
        rewards: selectedTokenRewardByOtherV1
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getPoolV2DataByOnce = async () => {
    try {
      const getV2PoolData = await unifarmV2.methods
        .tokenDetails(selectedTokens.tokenAddress)
        .call()

      const selectedTokenRewardByOtherV1 = await getSequenceImageSrcV2()

      return {
        poolName: selectedTokens.name,
        poolIcon: selectedTokens.icon,
        rewardsSequenceSrc: [oro, matic, zee, nord, tvk, route],
        Apy: '46%',
        lockIn: getV2PoolData[4],
        maxStakingLimit: library.utils.fromWei(getV2PoolData[2].toString()),
        network: 'Ethereum',
        moreDetailsRoute: '/stake',
        isFired: true,
        typeFor: 'v2',
        rewards: selectedTokenRewardByOtherV1
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const getPoolInfo = async () => {
    // before fire please enable loader
    // show for both pools
    if (!selectedTokens.stakingAmount || !selectedTokens.tokenAddress)
      return null
    setApploader(true)

    if (selectedTokens.v1 && selectedTokens.v2) {
      // fetch the v1 data first

      var globalArray = []
      const fetchPool1Data = await getPoolV1DataByOnce()
      const fetchPool2Data = await getPoolV2DataByOnce()

      globalArray.push(fetchPool1Data, fetchPool2Data)

      dispatch(
        setDailyRewardsDistrubution({
          fullfilled: true,
          poolData: globalArray
        })
      )

      setApploader(false)
    } else if (selectedTokens.v1) {
      var globalArray = []

      const fetchPool1Data = await getPoolV1DataByOnce()

      globalArray.push(fetchPool1Data)

      dispatch(
        setDailyRewardsDistrubution({
          fullfilled: true,
          poolData: globalArray
        })
      )

      setApploader(false)
    } else if (selectedTokens.v2) {
      var globalArray = []

      const fetchPool2Data = await getPoolV2DataByOnce()

      globalArray.push(fetchPool2Data)

      dispatch(
        setDailyRewardsDistrubution({
          fullfilled: true,
          poolData: globalArray
        })
      )

      setApploader(false)
    }
  }
  return { getPoolInfo }
}
