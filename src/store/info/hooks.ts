import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "..";
import {
  useUnifarmV1Contract,
  useUnifarmV2Contract
} from "../../hooks/useTokenContract";
import { setUserStakingDetails } from "./actions";
import { useWeb3React } from "@web3-react/core";
import { getKeyByValue, getTokenNameByAddress } from "../../utils";
import { Mapping, tokenListV1 } from "../../constants";
import dayjs from "dayjs";
import { useSetGlobalLoader } from "../app/hooks";

// fetching details from both pool
const getStakingDetailsV1 = async (unifarmV1: any, account: string) => {
  if (!account || !unifarmV1) return null;
  try {
    var v1PoolData = [];
    // tokenNames
    const tokenNames = [];

    const stakeDetails = await unifarmV1.methods
      .viewStakingDetails(account)
      .call();

    const tokenAddress = stakeDetails[0];
    const isActive = stakeDetails[1];
    const stakeIDs = stakeDetails[2];
    const stakedAmount = stakeDetails[3];
    const DaysStaked = stakeDetails[4];

    // get TokenName by address
    for (var k = 0; k < tokenAddress.length; k++) {
      const address = tokenAddress[k];
      const tokenName = getTokenNameByAddress(address);
      tokenNames.push(tokenName);
    }

    for (var s = 0; s < stakeIDs.length; s++) {
      if (isActive[s]) {
        // get the tokenSeqence list
        const tokensSequence = [];
        for (var k = 0; k < 5; k++) {
          const getTokenSequence = await unifarmV1.methods
            .tokensSequenceList(tokenAddress[s], k)
            .call();
          tokensSequence.push(getTokenSequence);
        }

        // tokenImageSequence For every stake
        const tokensSequnceSrc = [];
        const tokensRewards = [];
        const rewardedTokenNames = [];

        for (var e = 0; e < tokensSequence.length; e++) {
          const tokenAddress = tokensSequence[e];
          const getKey = getKeyByValue(tokenListV1, tokenAddress);
          const getImage = Mapping[getKey].image;
          const getRewardedToken = Mapping[getKey].name;
          tokensSequnceSrc.push(getImage);
          rewardedTokenNames.push(getRewardedToken);

          // getToken Reward
          const avaliableRewards = await unifarmV1.methods
            .viewAvailableRewards(account, stakeIDs[s], tokenAddress)
            .call();
          tokensRewards.push(avaliableRewards);
        }

        /* let isDisabled: boolean;
        const date: any = dayjs.unix(DaysStaked[s]);

        const day = dayjs(date.$d).add(lockable, "days");
        console.log(day); */

        const obj = {};
        obj["tokenName"] = tokenNames[s];
        obj["isActive"] = isActive[s];
        obj["stakeID"] = stakeIDs[s];
        obj["stakeAmount"] = stakedAmount[s];
        obj["DaysStaked"] = DaysStaked[s];
        obj["MyRewards"] = tokensRewards;
        obj["rewarsTokenSrc"] = tokensSequnceSrc;
        obj["typeFor"] = "v1";
        obj["isLockIn"] = false;
        v1PoolData.push(obj);
      }
    }
    return v1PoolData;
  } catch (err) {
    alert(err.message);
  }
};

export const useStakingDataOnLoadOrPropsReceive = () => {
  // dispatch
  const dispatch = useDispatch();
  // unifarm v1 or v2 both
  const { account } = useWeb3React();
  // unifarm v2
  const unifarmV1 = useUnifarmV1Contract();
  //const unifarmV2 = useUnifarmV2Contract();
  const setLoader = useSetGlobalLoader();
  useEffect(() => {
    // get the token Staking Details for v1
    // set App Loader Here.
    if (!unifarmV1 && !account) return null;
    setLoader(true);
    getStakingDetailsV1(unifarmV1, account)
      .then((result) => {
        dispatch(
          setUserStakingDetails({
            stakingPayload: result
          })
        );
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, [account]);
};

export const useSelectStakingDetails = () => {
  return useSelector((state: AppState) => {
    return state.info;
  });
};
