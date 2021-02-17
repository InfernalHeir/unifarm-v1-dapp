<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import AppBody from '../AppBody'
import styled from 'styled-components'
import { Typography } from '../../components/Typo'
import TokenSearchModal from '../../components/TokenSearhModal'
import { IoIosArrowDropdown } from 'react-icons/io'
import { ShowMePools } from '../../components/Buttons'
import { useWeb3React } from '@web3-react/core'
import CalculatorRewards from '../../components/CalculotorRewards'
import { useOnChange, useSelectedTokens } from '../../store/stake/hooks'
=======
import React, { useState, useEffect } from "react";
import AppBody from "../AppBody";
import styled from "styled-components";
import { Typography } from "../../components/Typo";
import TokenSearchModal from "../../components/TokenSearhModal";
import { IoIosArrowDropdown } from "react-icons/io";
import { ShowMePools } from "../../components/Buttons";
import { useWeb3React } from "@web3-react/core";
import CalculatorRewards from "../../components/CalculotorRewards";
import { useStakeActions, useDerivedStakeInfo } from "../../store/stake/hooks";
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

const CalculatorWrapper = styled.div`
  max-width: 550px;
  background: #4f2f2f0f;
  padding: 0.25rem;
  margin: auto;
  border-radius: 12px;
`

const TokenSelector = styled.button`
  width: 100%;
  color: #222;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  border-radius: 10px;
  max-width: 350px;
  border: 1px solid #2222224a;
  text-align: inherit;
  padding: 1rem;
  margin: auto;
  display: block;
  .arrow {
    position: absolute;
    top: 11px;
    right: 10px;
    font-size: 18px;
  }
`

const StyledInput = styled.input<{ isDisable: boolean }>`
  width: 100%;
  margin-top: 10px;
  border: 1px solid #2222224a;
  color: ${(props) => (props.isDisable ? '#dedede' : '#222')};
  max-width: 350px;
  padding: 1rem;
  border-radius: 10px;
  margin: auto;
  display: block;
  margin-top: 10px;
  cursor: ${(props) => (props.isDisable ? 'not-allowed' : 'allowed')};
`

export const TokenLogo = styled.img`
  width: 25px;
  margin-right: 20px;
`

const Calculator = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const [showCalculotor, setShowCalculotor] = useState<boolean>(false)

<<<<<<< HEAD
  const selectedCurrency: any = useSelectedTokens()

  const { onInputChange } = useOnChange()
=======
  const selectedCurrency = useDerivedStakeInfo();

  const { onInputChange } = useStakeActions();
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

  const { active, account } = useWeb3React()

  const close = () => {
    setOpen(false)
  }

  return (
    <AppBody logo={true}>
      <CalculatorWrapper>
        <Typography style={{ marginTop: '20px', marginBottom: '20px' }}>
          Calculate Your Earnings
        </Typography>
        <TokenSelector onClick={() => setOpen(true)}>
          {selectedCurrency.isSelected ? (
            <>
              <TokenLogo
                src={selectedCurrency.icon}
                alt={selectedCurrency.name}
              />
              {selectedCurrency.name}
            </>
          ) : (
            <>Select Token</>
          )}{' '}
          <IoIosArrowDropdown className="arrow" />{' '}
        </TokenSelector>
        <StyledInput
          placeholder="No of Tokens to Stake"
          onChange={(e) => onInputChange(Number(e.target.value))}
          isDisable={!selectedCurrency.isSelected || !active}
          disabled={!selectedCurrency.isSelected || !active}
          value={
            selectedCurrency.stakingAmount && selectedCurrency.stakingAmount
          }
        />

        <ShowMePools isDisable={false} onClick={() => setShowCalculotor(true)}>
          Calculate Yield
        </ShowMePools>
      </CalculatorWrapper>
      {showCalculotor && <CalculatorRewards />}

      <TokenSearchModal heading="Select Tokens" isOpen={isOpen} close={close} />
    </AppBody>
  )
}

export default Calculator
