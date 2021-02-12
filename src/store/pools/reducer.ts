import { createReducer } from "@reduxjs/toolkit";
import { setDailyRewardsDistrubution } from "./action";

export interface PayloadSize {
  poolName?: string;
  poolIcon?: string;
  rewardsSequenceSrc?: string[];
  Apy?: string | null;
  lockIn?: string;
  maxStakingLimit: number;
  network: string;
  moreDetailsRoute: string;
  isFired: boolean;
  typeFor: string;
}

interface InitialPoolState {
  fullfilled: boolean | null;
  poolData?: PayloadSize[] | null;
}

const poolInitialState: InitialPoolState = {
  fullfilled: null,
  poolData: null
};

export const poolReducer = createReducer<InitialPoolState>(
  poolInitialState,
  (builder) => {
    builder.addCase(
      setDailyRewardsDistrubution,
      (state, { payload: { fullfilled, poolData } }) => {
        return {
          ...state,
          fullfilled,
          poolData
        };
      }
    );
  }
);
