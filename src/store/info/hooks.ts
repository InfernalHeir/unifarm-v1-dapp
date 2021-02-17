import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "..";
import {
  useUnifarmV1Contract,
  useUnifarmV2Contract
} from "../../hooks/useTokenContract";
import { setUserStakingDetails } from "./actions";
import { useWeb3React } from "@web3-react/core";

// fetching details from both pool

const getStakingDetailsV1 = async (unifarmV1: any, account: string) => {
  if (!account || !unifarmV1) return null;
  try {
    var v1PoolData = [];
    // tokenNames
    const tokenNames = [];
    // render Object Final Output.
    const Mystakes = [];
    // unifarmV1 view Staking Details.

    const stakeDetails = await unifarmV1.methods
      .viewStakingDetails(account)
      .call();
    // staking details.
    // it also array.
    const tokenAddress = stakeDetails[0];
    const isActive = stakeDetails[1];
    const stakeIDs = stakeDetails[2];
    const stakedAmount = stakeDetails[3];
    const DaysStaked = stakeDetails[4];

    // this get poolName and Poolimages from token sequnces
    const sequenceListEveryStake = {};
    const rewardEachStake = {};
    const sequenceListImages = {};

    for (let i = 0; i < stakeIDs.length; i++) {
      let sequenceList = [];

      // let the sequnce list
      for (let k = 0; k < 5; k++) {
        const sequence = await unifarmV1.methods
          .tokensSequenceList(tokenAddress[i], k)
          .call();

        sequenceList.push(sequence);
      }
      // debugger
      sequenceListEveryStake[stakeIDs[i]] = sequenceList;

      let myRewards = [];

      for (let item of sequenceListEveryStake[stakeIDs[i]]) {
        if (isActive[i]) {
          const avaliableRewards = await unifarmV1.methods
            .viewAvailableRewards(account, stakeIDs[i], item)
            .call();
          myRewards.push(avaliableRewards);
        } else {
          myRewards = [0.0, 0.0, 0.0, 0.0, 0.0];
        }
      }

      for (let i = 0; i < 5; i++) {
        let obj = {};

        obj["tokenName"] = tokenNames[i];
        obj["isActive"] = isActive[i];
        obj["stakeID"] = stakeIDs[i];
        obj["stakeAmount"] = stakedAmount[i];
        obj["DaysStaked"] = DaysStaked[i];
        // obj['refreshTime'] = refereshTime[i];
        obj["MyRewards"] = myRewards[stakeIDs[i]];
        obj["rewarsTokenSrc"] = sequenceListImages[stakeIDs[i]];
        obj["typeFor"] = "v1";
        obj["isLockIn"] = false;

        v1PoolData.push(obj);
      }

      // console.log('render object', renderObject);

      return v1PoolData;
    }
  } catch (err) {
    alert(err.message);
  }
};

/* const getStakingDetailsV2 = async (unifarmV2: any, account: string) => {
  if (!account || !unifarmV2) return null;
  try {
    // tokenNames
    const tokenNames = [];
    // render Object Final Output.
    const v2PoolData = [];
    // unifarmV1 view Staking Details.
    const stakeDetails = await unifarmV2.methods
      .viewStakingDetails(account)
      .call();
    // staking details.
    // it also array.
    const tokenAddress = stakeDetails[0];
    const isActive = stakeDetails[1];
    const stakeIDs = stakeDetails[2];
    const stakeAmount = stakeDetails[3];
    const startTime = stakeDetails[4];

    // this
    const sequenceListEveryStake = {};
    const rewardEachStake = {};
    const sequenceListImages = {};

    for (let i = 0; i < stakeIDs.length; i++) {
      let sequenceList = [];

      for (let k = 0; k < 6; k++) {
        const sequence = await unifarmV2.methods
          .tokensSequenceList(tokenAddress[i], k)
          .call();
        sequenceList.push(sequence.toLowerCase());
      }
      // debugger
      sequenceListEveryStake[stakeIDs[i]] = sequenceList;

      let rewardsAmt = [];

      for (let item of sequenceListEveryStake[stakeIDs[i]]) {
        if (isActive[i]) {
          const avaliableRewards = await unifarmV2.methods
            .viewAvailableRewards(account, stakeIDs[i], item)
            .call();
          rewardsAmt.push(avaliableRewards);
        } else {
          rewardsAmt = [0.0, 0.0, 0.0, 0.0, 0.0];
        }
      }

      for (let i = 0; i < 6; i++) {
        let obj = {};
        obj["tokenName"] = tokenNames[i];
        obj["isActive"] = isActive[i];
        obj["stakeID"] = stakeIDs[i];
        obj["stakeAmount"] = stakeAmount[i];
        obj["DaysStaked"] = startTime[i];
        // obj['refreshTime'] = refereshTime[i];
        obj["MyRewards"] = rewardEachStake[stakeIDs[i]];
        obj["rewarsTokenSrc"] = sequenceListImages[stakeIDs[i]];
        obj["typeFor"] = "v2";
        obj["isLockIn"] = true;

        v2PoolData.push(obj);
      }
      // console.log('render object', renderObject);

      return { v2PoolData };
    }
  } catch (err) {
    console.log(err);
  }
}; */

export const useStakingDataOnLoadOrPropsReceive = () => {
  // dispatch
  const dispatch = useDispatch();
  // unifarm v1 or v2 both
  const { active, account } = useWeb3React();
  // unifarm v2
  const unifarmV1 = useUnifarmV1Contract();
  const unifarmV2 = useUnifarmV2Contract();

  useEffect(() => {
    // get the token Staking Details for v1
    // set App Loader Here.
    if (!unifarmV1 && !account) return null;

    var globalArray = [];
    getStakingDetailsV1(unifarmV1, account)
      .then((result) => {
        globalArray.push(result);
      })
      .catch((err) => console.log(err));

    dispatch(
      setUserStakingDetails({
        stakingPayload: globalArray
      })
    );
  }, [account]);
};

export const useSelectStakingDetails = () => {
  return useSelector((state: AppState) => {
    return state.info;
  });
};
