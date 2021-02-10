import React from "react";
import AppBody from "../AppBody";
import { ShowMePools } from "../../components/Buttons";
import NumberInput from "../../components/NumberInput";
import { useWeb3React } from "@web3-react/core";
import { Typography } from "../../components/Typo";

const Stake = () => {
  const { active } = useWeb3React();

  return (
    <AppBody logo={true}>
      <Typography>Calculate Your Earnings</Typography>
      <NumberInput />
      <ShowMePools isDisable={!active}>Show Me Pools</ShowMePools>
    </AppBody>
  );
};

export default Stake;
