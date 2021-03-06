<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import AppBody from '../AppBody'
import { ShowMePools } from '../../components/Buttons'
import NumberInput from '../../components/NumberInput'
import { useWeb3React } from '@web3-react/core'
import { Typography } from '../../components/Typo'
import styled from 'styled-components'
import { useSelectedTokens } from '../../store/stake/hooks'
import { usePoolData } from '../../store/pools/hooks'
import { AppState } from '../../store'
import { Connect } from '../../components/Buttons'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import PoolComponent from '../../components/PoolComponent'
import { useResetData } from '../../store/pools/hooks'
=======
import React, { useState, useEffect } from "react";
import AppBody from "../AppBody";
import { ShowMePools } from "../../components/Buttons";
import NumberInput from "../../components/NumberInput";
import { useWeb3React } from "@web3-react/core";
import { Typography } from "../../components/Typo";
import styled from "styled-components";
import { useDerivedStakeInfo } from "../../store/stake/hooks";
import { usePoolData } from "../../store/pools/hooks";
import { AppState } from "../../store";
import { Connect } from "../../components/Buttons";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import PoolComponent from "../../components/PoolComponent";
import { useResetData } from "../../store/pools/hooks";
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

const Wrapper = styled.div`
  width: 550px;
  border: 1px solid #dedede;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
`;

const Stake = () => {
  const { active } = useWeb3React();

  const selectedToken = useDerivedStakeInfo();
  const isFull = useResetData();

  const getPoolInfo = usePoolData();

<<<<<<< HEAD
  const state: any = useSelector<AppState>((state) => state.app)
=======
  const state: any = useSelector<AppState>((state) => state.app);
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

  const poolData: any = useSelector((state: AppState) => {
    return state.poolReducer;
  });

  return (
    <AppBody logo={true}>
      <Typography>Calculate Your Earnings</Typography>
      <Wrapper>
        <NumberInput />

        {active ? (
          <ShowMePools isDisable={false} onClick={() => getPoolInfo()}>
            Show me Available Pools
          </ShowMePools>
        ) : (
<<<<<<< HEAD
          <Connect style={{ width: '100%', marginTop: '10px' }}>
=======
          <Connect style={{ width: "100%", marginTop: "10px" }}>
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
            Connect
          </Connect>
        )}
      </Wrapper>
      {poolData.fullfilled && <PoolComponent showRewards={poolData.poolData} />}
    </AppBody>
  );
};

export default Stake;
