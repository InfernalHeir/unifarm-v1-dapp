import { useCallback } from "react";
import {
  useUnifarmV1Contract,
  useUnifarmV2Contract
<<<<<<< HEAD
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
import { useWeb3React } from '@web3-react/core'
import {
  SupportedTokens,
  tokensSequenceListPool,
  tokensSequenceListPoolV2
} from '../../constants'
import { getKeyByValue } from '../../utils'
import { AppState } from '..'
=======
} from "../../hooks/useTokenContract";
import { useDerivedStakeInfo } from "../stake/hooks";
import { useDispatch, useSelector } from "react-redux";
import { setDailyRewardsDistrubution, setReset } from "../pools/action";
import { useWeb3React } from "@web3-react/core";
import { tokenListV1, tokenListV2 } from "../../constants";
import { AppState } from "..";
import { getKeyByValue } from "../../utils";
import { Mapping } from "../../constants/index";
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

export const useResetPool = () => {
  const dispatch = useDispatch();
  const setResetPool = (bool: any) => {
    return dispatch(setReset(bool));
  };
  return setResetPool;
};

export const useResetData = () => {
  return useSelector((state: AppState) => {
    return state.poolReducer;
  });
};

export const usePoolData = () => {
  // unifarm contract instance.
<<<<<<< HEAD

  const unifarmV1 = useUnifarmV1Contract()
  const unifarmV2 = useUnifarmV2Contract()
  // selected tokens
  const selectedTokens = useSelectedTokens()
  const { library } = useWeb3React()
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
=======
  const unifarmV1 = useUnifarmV1Contract();
  const unifarmV2 = useUnifarmV2Contract();
  const selectedTokens = useDerivedStakeInfo();
  const { library } = useWeb3React();
  const dispatch = useDispatch();

  const getV1Pool = async () => {
    const getDays = await unifarmV1.methods.stakeDuration().call();
    const getOneDay = getDays / 86400;

    const tokenSequenceList = [];
    const tokens = library.utils.toWei(selectedTokens.stakingAmount.toString());

    for (var k = 0; k < 5; k++) {
      const tokenSequnence = await unifarmV1.methods
        .tokensSequenceList(selectedTokens.tokenAddress, k)
        .call();
      tokenSequenceList.push(tokenSequnence);
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
    }

    var rewardArray = [];
    var rewardsSequenceSrc = [];
    var APY = [];
    for (var k = 0; k < tokenSequenceList.length; k++) {
      const tokenAddress = tokenSequenceList[k];
      const selectedTokenReward = await unifarmV1.methods
        .getOneDayReward(tokens, selectedTokens.tokenAddress, tokenAddress)
        .call();
      var rewardDiv = {};
      const getKey = getKeyByValue(tokenListV1, tokenAddress);
      const getSnapShot = Mapping[getKey];
      //console.log(getSnapShot);
      const reward = getOneDay * selectedTokenReward;
      const rewarded = library.utils.fromWei(reward.toString());

      rewardDiv["name"] = getSnapShot.name;
      rewardDiv["image"] = getSnapShot.image;
      rewardDiv["rewardsPerDay"] = rewarded;
      rewardArray.push(rewardDiv);
      rewardsSequenceSrc.push(getSnapShot.image);
      APY.push(Number(getSnapShot.price) * Number(rewarded));
    }

    const pool = await unifarmV1.methods
      .tokenDetails(selectedTokens.tokenAddress)
      .call();

    var sum: number = 0;
    for (var u = 0; u < APY.length; u++) {
      sum += parseInt(APY[u]);
    }

    const apyCalculation = (sum * 90 * 4) / 100;

    return {
      poolName: selectedTokens.name,
      poolIcon: selectedTokens.icon,
      Apy: apyCalculation,
      rewardsSequenceSrc: rewardsSequenceSrc,
      maxStakingLimit: library.utils.fromWei(pool[2].toString()),
      network: "Ethereum",
      moreDetailsRoute: "/",
      isFired: true,
      typeFor: "v1",
      rewards: rewardArray
    };
  };

  const getV2Pool = async () => {
    const getDays = await unifarmV2.methods.stakeDuration().call();
    const getOneDay = getDays / 86400;

    const tokenSequenceList = [];
    const tokens = library.utils.toWei(selectedTokens.stakingAmount.toString());

    for (var k = 0; k < 6; k++) {
      const tokenSequnence = await unifarmV2.methods
        .tokensSequenceList(selectedTokens.tokenAddress, k)
        .call();
      tokenSequenceList.push(tokenSequnence);
    }
    console.log(tokenSequenceList);
    var rewardArray = [];
    var rewardsSequenceSrc = [];
    var APY = [];

    for (var k = 0; k < tokenSequenceList.length; k++) {
      const tokenAddress = tokenSequenceList[k];
      const selectedTokenReward = await unifarmV2.methods
        .getOneDayReward(tokens, selectedTokens.tokenAddress, tokenAddress)
        .call();
      const convertReward = library.utils.fromWei(
        selectedTokenReward.toString()
      );
      var rewardDiv = {};
      const getKey = getKeyByValue(tokenListV2, tokenAddress);
      const getSnapShot = Mapping[getKey];

      const reward = getOneDay * convertReward;

      rewardDiv["name"] = getSnapShot.name;
      rewardDiv["image"] = getSnapShot.image;
      rewardDiv["rewardsPerDay"] = reward;
      rewardArray.push(rewardDiv);
      rewardsSequenceSrc.push(getSnapShot.image);
      APY.push(Number(getSnapShot.price) * Number(reward));
    }

    const pool = await unifarmV1.methods
      .tokenDetails(selectedTokens.tokenAddress)
      .call();

    var sum: number = 0;
    for (var u = 0; u < APY.length; u++) {
      sum += parseInt(APY[u]);
    }

    const apyCalculation = (sum * 90 * 4) / 100;

    return {
      poolName: selectedTokens.name,
      poolIcon: selectedTokens.icon,
      Apy: apyCalculation,
      rewardsSequenceSrc: rewardsSequenceSrc,
      maxStakingLimit: library.utils.fromWei(pool[3].toString()),
      network: "Ethereum",
      moreDetailsRoute: "/",
      isFired: true,
      typeFor: "v2",
      rewards: rewardArray
    };
  };

  return useCallback(async () => {
    try {
      const globalArray = [];
      if (selectedTokens.v1 && selectedTokens.v2) {
        const getPoolByOnce = await getV1Pool();
        const getPoolV2 = await getV2Pool();
        globalArray.push(getPoolByOnce, getPoolV2);
        dispatch(
          setDailyRewardsDistrubution({
            fullfilled: true,
            poolData: globalArray
          })
        );
      } else if (selectedTokens.v1) {
        const getPoolByOnce = await getV1Pool();
        globalArray.push(getPoolByOnce);
        dispatch(
          setDailyRewardsDistrubution({
            fullfilled: true,
            poolData: globalArray
          })
        );
      } else if (selectedTokens.v2) {
        const getPoolV2 = await getV2Pool();
        globalArray.push(getPoolV2);
        dispatch(
          setDailyRewardsDistrubution({
            fullfilled: true,
            poolData: globalArray
          })
        );
      }
      return null;
    } catch (err) {
<<<<<<< HEAD
      console.log(err.message)
    }
  }

  const getPoolInfo = async () => {
    // before fire please enable loader
    // show for both pools
    if (!selectedTokens.stakingAmount || !selectedTokens.tokenAddress)
      return null

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
=======
      console.log(err.message);
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
    }
  }, [dispatch, selectedTokens]);
};
