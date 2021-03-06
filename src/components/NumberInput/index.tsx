import React, { Fragment, useCallback, useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import TokenSearchModal from "../TokenSearhModal";
import { useStakeActions, useDerivedStakeInfo } from "../../store/stake/hooks";
import { TokenLogo } from "../../pages/calculator";
import { useWeb3React } from "@web3-react/core";

const InputWrapper = styled.div`
  display: flex;
  border-radius: 9px;
  border: 1px solid #2222227a;
  padding: 0.5rem;
  position: relative;
<<<<<<< HEAD
`
=======
`;
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

const Input = styled.input`
text-transform: capitalize;
font-weight: 600;
color: #222;
position: relative;
outline: none;
border: none;
flex: 1 1 auto;
background-color: transparent;
font-size: 16px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
padding: 0px;
-webkit-appearance: textfield;
appearance: textfield;
}
`;

const Select = styled.button`
padding: 6px;
background: #5753ef;
border: 0;
color: #fff;
border-radius: 7px;
font-size: 16px;
display: flex;
align-items:center;
}
<<<<<<< HEAD
`
=======
`;
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
const MaxButton = styled.button`
  background: #197bc2;
  color: white;
  font-size: 14px;
  border: 0;
  position: absolute;
  right: 15px;
  top: 15px;
<<<<<<< HEAD
`
=======
`;
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

const NumberInput = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const [reset, setReset] = useState<{ boolean }>();

  const selectedToken = useDerivedStakeInfo();

  const { onInputChange, onMaxButton } = useStakeActions();

<<<<<<< HEAD
  const { onInputChange, onMaxButton }: any = useOnChange()
=======
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
  const open = useCallback(() => {
    setOpen(true);
  }, [isOpen]);

  const close = useCallback(() => {
    setOpen(false);
  }, [isOpen]);

  const { active } = useWeb3React();

  return (
    <Fragment>
      <InputWrapper>
        <Select onClick={open}>
          {selectedToken.isSelected ? (
            <>
              <TokenLogo src={selectedToken.icon} alt={selectedToken.name} />
              {selectedToken.name}
              <IoIosArrowDown />
            </>
          ) : (
            <>
              Select Token <IoIosArrowDown />
            </>
          )}
        </Select>

        <Input
          type="number"
          disabled={!active || !selectedToken.tokenAddress}
          placeholder="Staking Amount"
          onChange={(e) => onInputChange(Number(e.target.value))}
          value={
            selectedToken.stakingAmount ? selectedToken.stakingAmount : null
          }
        />
        <MaxButton onClick={() => onMaxButton()}>Max</MaxButton>
      </InputWrapper>
      <TokenSearchModal
        isOpen={isOpen}
        close={close}
        heading="Select Relay Chain"
      />
    </Fragment>
  );
};

export default NumberInput;
