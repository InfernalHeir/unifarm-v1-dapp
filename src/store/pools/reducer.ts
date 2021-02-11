import { createReducer } from "@reduxjs/toolkit";
import { setDailyRewardsDistrubution } from "./action";

interface InitialPoolState {
  [index: number]: {
    poolName?: string;
    poolIcon?: string;
    rewardsSequenceSrc?: string[];
    Apy?: string | null;
    lockIn?: string;
    maxStakingLimit: number;
    network: string;
    moreDetailsRoute: string;
    isFired: boolean;
  };
}

const poolState: InitialPoolState = {
  0: null
};
export const poolReducer = createReducer<InitialPoolState>(
  poolState,
  (builder) => {
    builder.addCase(setDailyRewardsDistrubution, (state, { payload }) => {
      return payload;
    });
  }
);
