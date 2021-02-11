import { UnifarmTokenAddress } from "../constants";
import { SupportedTokens } from "../constants";

export const getTokenBalance = async (
  contract: any,
  account: string
): Promise<string | number> => {
  try {
    const balance = await contract.balanceOf(account);
    return balance;
  } catch (err) {
    return err.message;
  }
};

export const isApprovalNeeded = async (
  contract: any,
  account: string,
  stakingAmount: number
) => {
  // check allowance
  try {
    const allowance = await contract.allowance(account, UnifarmTokenAddress);
    if (stakingAmount > allowance) {
      return true;
    }
    return false;
  } catch (err) {
    return err.message;
  }
};

export const getTokenSequenceList = (
  contract: any,
  tokenAddress: string
): any[] => {
  var arr = [];
  if (!contract) return null;
  Object.keys(SupportedTokens).map(async (key, index) => {
    const tokenSequence = await contract.tokensSequenceList(
      tokenAddress,
      index
    );
    arr.push(tokenSequence[index]);
  });
  return arr;
};
