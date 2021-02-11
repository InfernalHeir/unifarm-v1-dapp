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
import { Connect } from "../../components/Buttons";
import { useTriggerOpenModal } from "../../store/app/hooks";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import PoolComponent from "../../components/PoolComponent";

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

  const loading = useSelector((state: AppState) => {
    return state.app.loading;
  });

  const poolData: any = useSelector((state: AppState) => {
    return state.poolReducer;
  });

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
            {!state.appStatus ? (
              state.message
            ) : (
              <>
                {loading ? (
                  <CircularProgress style={{ width: "24px", color: "#fff" }} />
                ) : (
                  <>Show me Pools</>
                )}
              </>
            )}
          </ShowMePools>
        ) : (
          <Connect style={{ width: "100%", marginTop: "10px" }} onClick={open}>
            Connect
          </Connect>
        )}
      </Wrapper>
      {poolData.fullfilled && <PoolComponent showRewards={poolData.poolData} />}
    </AppBody>
  );
};

export default Stake;
