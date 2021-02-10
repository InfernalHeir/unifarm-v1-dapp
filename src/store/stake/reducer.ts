import { createReducer } from "@reduxjs/toolkit";
import { setStakingDetails, TypeInput } from "./action";

export interface IStakeInfo {
  stakingAmount?: number;
  decimals: number | null;
  tokenAddress: string | null;
  icon: string | null;
  name: string | null;
  isSelected?: boolean;
}

const initialStateOfStake: IStakeInfo = {
  stakingAmount: 0,
  decimals: null,
  tokenAddress: null,
  icon: null,
  name: null,
  isSelected: false
};

export const stakeReducer = createReducer<IStakeInfo>(
  initialStateOfStake,
  (builder) => {
    builder.addCase(
      setStakingDetails,
      (
        state,
        { payload: { icon, name, decimals, isSelected, tokenAddress } }
      ) => {
        return {
          ...state,
          icon,
          name,
          decimals,
          isSelected,
          tokenAddress
        };
      }
    ),
      builder.addCase(TypeInput, (state, { payload: { stakingAmount } }) => {
        return {
          ...state,
          stakingAmount
        };
      });
  }
);
