import { createAction } from "@reduxjs/toolkit";

export const setStakingDetails = createAction<{
  decimals: number;
  tokenAddress?: string;
  name: string;
  icon: string;
  isSelected?: boolean;
}>("stake/setStakingDetails");

export const TypeInput = createAction<{ stakingAmount: number }>(
  "stake/TypeInput"
);
