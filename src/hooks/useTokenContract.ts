import TokenABI from "../constants/ABI/ERC20.json";
import { useWeb3React } from "@web3-react/core";
import { UnifarmV1Address, UnifarmV2Address } from "../constants";
import UnifarmV2ABI from "../constants/ABI/UNIFARMV2.json";
import UnifarmV1ABI from "../constants/ABI/UNIFARMV1.json";

const useTokenContract = (address: string) => {
  const { library } = useWeb3React();
  if (!address || !library) return null;
  return new library.eth.Contract(TokenABI, address);
};

export const useUnifarmV2Contract = () => {
  const { library, active } = useWeb3React();
  if (!active && !library) return null;
  return new library.eth.Contract(UnifarmV2ABI, UnifarmV2Address);
};

export const useUnifarmV1Contract = () => {
  const { library, active } = useWeb3React();
  if (!active && !library) return null;
  return new library.eth.Contract(UnifarmV1ABI, UnifarmV1Address);
};

export default useTokenContract;
