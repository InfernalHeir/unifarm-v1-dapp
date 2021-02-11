import { useUnifarmV2Contract } from "../../hooks/useTokenContract";
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

export const usePoolData = () => {
  // unifarm contract instance.
  const unifarm = useUnifarmV2Contract();
  // selected tokens
  const selectedTokens = useSelectedTokens();

  // dispatch
  const dispatch = useDispatch();

  // getPoolInfo function
  const getPoolInfo = async () => {
    // before fire please enable loader

    dispatch(
      setLoader({
        loading: true
      })
    );

    const getTokenDetails = await unifarm.methods
      .tokenDetails(selectedTokens.tokenAddress)
      .call();
    console.log(getTokenDetails);

    var obj = {};

    const userMaxStake = getTokenDetails[2];
    const lockableDays = getTokenDetails[4];

    obj["poolName"] = selectedTokens.name;
    obj["poolIcon"] = selectedTokens.icon;
    obj["rewardsSequenceSrc"] = [one, two, three, four, five];
    obj["Apy"] = "49%";
    obj["lockIn"] = lockableDays.toString();
    obj["maxStakingLimit"] = formatEther(userMaxStake);
    obj["network"] = "Ethereum";
    obj["moreDetailsRoute"] = "/stake";
    obj["isFired"] = true;

    // after fetching that
    const arr = [];
    arr.push(obj);
    dispatch(
      setDailyRewardsDistrubution({
        fullfilled: true,
        poolData: arr
      })
    );

    dispatch(
      setLoader({
        loading: false
      })
    );
  };
  return { getPoolInfo };
};
