import React, { useEffect, useState } from "react";
import ReefIcon from "../../../assests/images/tokens/reef.png";
import CNTR from "../../../assests/images/tokens/cntr.png";
import Matic from "../../../assests/images/tokens/matic.png";
import OROIcon from "../../../assests/images/tokens/oro.png";
import FrontIcon from "../../../assests/images/tokens/frontier.png";
import { useWeb3React } from "@web3-react/core";
import { useUnifarmV2Contract } from "../../../hooks/useTokenContract";
import { useStakingDataOnLoadOrPropsReceive } from "../../../store/info/hooks";
import NotConnected from "../../NotConnected";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 767px;
  background: white;
  margin: auto;
  margin-top: 60px;
  padding: 20px;
  border-radius: 20px;
`;

const PageHeading = styled.h4`
  color: #222;
  font-weight: 800;
`;

const StakingWrapper = styled.div`
  border: 1px solid #dedede;
  border-radius: 20px;
  padding: 1rem;
`;

const StakePool = styled.div`
  padding: 10px;
  max-width: 140px;
  background: #bed1d8;
  border-radius: 8px;
`;

const StakedDetails = () => {
  //useStakingDataOnLoadOrPropsReceive();

  return (
    <GridContainer>
      <PageHeading>My Stakes</PageHeading>
      <StakingWrapper>
        <StakePool>
          <PageHeading>ORO</PageHeading>
        </StakePool>
      </StakingWrapper>
    </GridContainer>
  );
};

export default StakedDetails;
