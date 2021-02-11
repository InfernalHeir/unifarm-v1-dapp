import React from "react";
import AppBody from "../AppBody";
import { ShowMePools } from "../../components/Buttons";
import NumberInput from "../../components/NumberInput";
import { useWeb3React } from "@web3-react/core";
import { Typography } from "../../components/Typo";
import styled from "styled-components";
import { useSelectedTokens } from "../../store/stake/hooks";
import { usePoolData } from "../../store/pools/hooks";
import { AppState } from "../../store";
import { useSelector } from "react-redux";
import { Connect } from "../../components/Buttons";
import { useTriggerOpenModal } from "../../store/app/hooks";

const Wrapper = styled.div`
  width: 550px;
  border: 1px solid #dedede;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
`;

const Stake = () => {
  const { active } = useWeb3React();

  const selectedToken = useSelectedTokens();

  const { getPoolInfo }: any = usePoolData();

  const state: any = useSelector<AppState>((state) => state.app);

  const open = useTriggerOpenModal();

  return (
    <AppBody logo={true}>
      <Typography>Calculate Your Earnings</Typography>
      <Wrapper>
        <NumberInput />

        {active ? (
          <ShowMePools
            disabled={
              !active || !state.appStatus || !selectedToken.stakingAmount
            }
            isDisable={
              !active || !state.appStatus || !selectedToken.stakingAmount
            }
            onClick={() => getPoolInfo()}
          >
            {!state.appStatus ? state.message : <>Show me Pools</>}
          </ShowMePools>
        ) : (
          <Connect style={{ width: "100%", marginTop: "10px" }} onClick={open}>
            Connect
          </Connect>
        )}
      </Wrapper>
    </AppBody>
  );
};

export default Stake;
