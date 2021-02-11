import { useUnifarmV2Contract } from "../../hooks/useTokenContract";
import { useSelectedTokens } from "../stake/hooks";

export const usePoolData = () => {
  const unifarm = useUnifarmV2Contract();
  const selectedTokens = useSelectedTokens();
  const getPoolInfo = async () => {
    const getTokenDetails = await unifarm.tokenDetails(
      selectedTokens.tokenAddress
    );
    console.log(getTokenDetails);
  };
  return getPoolInfo;
};
