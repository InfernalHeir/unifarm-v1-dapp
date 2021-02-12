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
      console.log(tokenSequnence);
      tokenSequenceListForV1.push(tokenSequnence);
    }

    let imageSrcArray = [];
    let k;
    for (k = 0; k < tokenSequenceListForV1.length; k++) {
      const imageSrc = SupportedTokens[k].icon;
      imageSrcArray.push(imageSrc);
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
    return tokenSequenceListForV2;
  };

  const getPoolInfo = async () => {
    // before fire please enable loader
    // show for both pools
    setApploader(true);

    const getV1PoolData = await unifarmV1.methods
      .tokenDetails(selectedTokens.tokenAddress)
      .call();

    // get the v2 data then
    const getV2PoolData = await unifarmV2.methods
      .tokenDetails(selectedTokens.tokenAddress)
      .call();

    if (selectedTokens.v1 && selectedTokens.v2) {
      // fetch the v1 data first
      var globalArray = [];

      const getImageSrc = await getSequenceImageSrc();

      var v1 = {};
      v1["poolName"] = selectedTokens.name;
      v1["poolIcon"] = selectedTokens.icon;
      v1["rewardsSequenceSrc"] = getImageSrc;
      v1["Apy"] = 14;
      v1["maxStakingLimit"] = library.utils.fromWei(
        getV1PoolData[3].toString()
      );
      v1["rewardsSequenceSrc"] = getImageSrc;
      v1["network"] = "View on Ethereum";
      v1["moreDetailsRoute"] = "/stake";
      v1["isFired"] = true;

      console.log(v1);

      const v2Object = Object.create({
        poolName: selectedTokens.name,
        poolIcon: selectedTokens.icon,
        rewardsSequenceSrc: [one, two, three, four, five],
        Apy: 14,
        lockIn: getV2PoolData[4],
        maxStakingLimit: library.utils.fromWei(getV2PoolData[2]),
        network: "Ethreum",
        moreDetailsRoute: "/stake",
        isFired: true
      });

      globalArray.push(v1, v2Object);

      dispatch(
        setDailyRewardsDistrubution({
          fullfilled: true,
          poolData: globalArray
        })
      );
      setApploader(false);
    } else if (selectedTokens.v1) {
      var globalArray = [];
      const v1Object = Object.create({
        poolName: selectedTokens.name,
        poolIcon: selectedTokens.icon,
        rewardsSequenceSrc: [one, two, three, four, five],
        Apy: 14,
        lockIn: getV1PoolData[4].toString(),
        maxStakingLimit: library.utils.fromWei(getV1PoolData[2]),
        network: "Ethreum",
        moreDetailsRoute: "/stake",
        isFired: true
      });
      globalArray.push(v1Object);

      dispatch(
        setDailyRewardsDistrubution({
          fullfilled: true,
          poolData: globalArray
        })
      );
      setApploader(false);
    } else if (selectedTokens.v2) {
      var globalArray = [];
      const v2Object = Object.create({
        poolName: selectedTokens.name,
        poolIcon: selectedTokens.icon,
        rewardsSequenceSrc: [one, two, three, four, five],
        Apy: 14,
        lockIn: getV2PoolData[4].toString(),
        maxStakingLimit: library.utils.fromWei(getV2PoolData[2]),
        network: "Ethreum",
        moreDetailsRoute: "/stake",
        isFired: true
      });

      globalArray.push(v2Object);
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
