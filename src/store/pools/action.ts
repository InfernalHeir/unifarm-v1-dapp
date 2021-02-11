import { createAction } from "@reduxjs/toolkit";
import { PayloadSize } from "../pools/reducer";

export const setDailyRewardsDistrubution = createAction<{
  fullfilled: boolean;
  poolData: PayloadSize[];
}>("pools/setDailyRewardsDistrubution");
