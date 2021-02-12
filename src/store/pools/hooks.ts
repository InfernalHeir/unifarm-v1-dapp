import {
  useUnifarmV1Contract,
  useUnifarmV2Contract
} from "../../hooks/useTokenContract";
import { useSelectedTokens } from "../stake/hooks";
import one from "../../assests/images/Tokens/Nord.png";
import two from "../../assests/images/Tokens/matic.png";
import three from "../../assests/images/Tokens/TVK.png";
import four from "../../assests/images/Tokens/ROUTE.png";
import five from "../../assests/images/Tokens/frontier.png";
import { useDispatch } from "react-redux";
import { setLoader } from "../app/action";
import { setDailyRewardsDistrubution } from "../pools/action";
import { formatEther } from "@ethersproject/units";
import { useSetApplicationStatus } from "../app/hooks";
import { useWeb3React } from "@web3-react/core";
import { tokenAddressArrayV1 } from "../../constants";
import { SupportedTokens } from "../../constants";

export const usePoolData = () => {
  // unifarm contract instance.

  const unifarmV1 = useUnifarmV1Contract();
  const unifarmV2 = useUnifarmV2Contract();
  // selected tokens
  const selectedTokens = useSelectedTokens();
  const { library } = useWeb3React();
  const {
    setAppError,
    setApploader,
    setAppSuccess
  } = useSetApplicationStatus();
  // dispatch
  const dispatch = useDispatch();

  // getPoolInfo function

  const getSequenceImageSrc = async () => {
    // for v1
    var tokenSequenceListForV1 = [];
    var i;

    for (i = 0; i < 5; i++) {
      const tokenSequnence = await unifarmV1.methods
        .tokensSequenceList(selectedTokens.tokenAddress, i)
        .call();
      tokenSequenceListForV1.push(tokenSequnence);
    }

    let imageSrcArray = [];
    let k;

    let create = [];

    Object.keys(SupportedTokens).map((key) => {
      const support = SupportedTokens[key];
      create.push({
        address: support.address,
        icon: support.icon
      });
    });

    for (k = 0; k < create.length; k++) {
      const addresses = tokenSequenceListForV1[k];
      if (addresses === create[i].address) {
        console.log(true);
      }
      console.log(false);
    }

    return imageSrcArray;
  };

  const getSequenceListOfV2 = async () => {
    // for v1
    var tokenSequenceListForV2 = [];
    var i;
    for (i = 0; i < 6; i++) {
      const tokenSequnence = await unifarmV2.methods
        .tokensSequenceList(selectedTokens.tokenAddress, i)
        .call();
      tokenSequenceListForV2.push(tokenSequnence);
    }

    let imageSrcArray = [];
    let k;

    for (k = 0; k < tokenSequenceListForV2.length; k++) {
      const imageSrc = SupportedTokens[k].icon;
      imageSrcArray.push(imageSrc);
    }

    return imageSrcArray;
  };

  const getPoolV1DataByOnce = async () => {
    const getV1PoolData = await unifarmV1.methods
      .tokenDetails(selectedTokens.tokenAddress)
      .call();
    const getSequence = await getSequenceImageSrc();
    return {
      poolName: selectedTokens.name,
      poolIcon: selectedTokens.icon,
      rewardsSequenceSrc: getSequence,
      Apy: "42%",
      maxStakingLimit: library.utils.fromWei(getV1PoolData[3].toString()),
      network: "Ethereum",
      moreDetailsRoute: "/stake",
      isFired: true
    };
  };

  const getPoolV2DataByOnce = async () => {
    const getV2PoolData = await unifarmV2.methods
      .tokenDetails(selectedTokens.tokenAddress)
      .call();

    return {
      poolName: selectedTokens.name,
      poolIcon: selectedTokens.icon,
      rewardsSequenceSrc: [one, two, three, four, five],
      Apy: "42%",
      lockIn: getV2PoolData[4],
      maxStakingLimit: library.utils.fromWei(getV2PoolData[4].toString()),
      network: "Ethereum",
      moreDetailsRoute: "/stake",
      isFired: true
    };
  };

  const getPoolInfo = async () => {
    // before fire please enable loader
    // show for both pools
    setApploader(true);

    if (selectedTokens.v1 && selectedTokens.v2) {
      // fetch the v1 data first
      var globalArray = [];
      const fetchPool1Data = await getPoolV1DataByOnce();
      const fetchPool2Data = await getPoolV2DataByOnce();

      globalArray.push(fetchPool1Data, fetchPool2Data);

      dispatch(
        setDailyRewardsDistrubution({
          fullfilled: true,
          poolData: globalArray
        })
      );

      setApploader(false);
    } else if (selectedTokens.v1) {
      var globalArray = [];

      const fetchPool1Data = await getPoolV1DataByOnce();

      globalArray.push(fetchPool1Data);

      dispatch(
        setDailyRewardsDistrubution({
          fullfilled: true,
          poolData: globalArray
        })
      );

      setApploader(false);
    } else if (selectedTokens.v2) {
      var globalArray = [];

      const fetchPool2Data = await getPoolV2DataByOnce();

      globalArray.push(fetchPool2Data);

      dispatch(
        setDailyRewardsDistrubution({
          fullfilled: true,
          poolData: globalArray
        })
      );

      setApploader(false);
    }
  };
  return { getPoolInfo };
};
