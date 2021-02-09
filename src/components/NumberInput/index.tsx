import React, { Fragment, useCallback, useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import TokenSearchModal from "../TokenSearhModal";

const InputWrapper = styled.div`
  display: flex;
  border-radius: 9px;
  border: 1px solid #2222227a;
  padding: 0.5rem;
`;

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
`;

const NumberInput = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const open = useCallback(() => {
    setOpen(true);
  }, [isOpen]);

  const close = useCallback(() => {
    setOpen(false);
  }, [isOpen]);

  return (
    <Fragment>
      <InputWrapper>
        <Input type="number" placeholder="Staking Amount" />
        <Select onClick={open}>
          Select Token <IoIosArrowDown />
        </Select>
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
