import { tokenListV1 } from "../constants";

export const fetchUnifarmV1Stake = async (unifarmV1: any, account: string) => {
  if (!unifarmV1 || !account) return null;
  // we can store that stakes info in v1 array.
  const v1 = [];

  // fetch v1 stakes from the ethereum blockchain.
  const v1Stakes = await unifarmV1.methods.viewStakingDetails(account).call();

  // set the constants
  const tokenAddress = v1Stakes[0];
  const isActive = v1Stakes[1];
  const stakeId = v1Stakes[2];
  const stakedAmount = v1Stakes[3];
  const daysStaked = v1Stakes[4];

  // for loop stake id
  for (var k = 0; k < stakeId.length; k++) {
    // get the tokenSequence
    const tokenSequenceList = [];
  }
};
