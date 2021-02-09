import React from "react";
import { DiglogHeader } from "../Web3Modal";
import Modal from "../Modal";
import List from "@material-ui/core/List";
import chains from "../../constants/chains";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import { AiOutlineClose } from "react-icons/ai";
import IconButton from "@material-ui/core/IconButton";

interface ITokenSearchModal {
  isOpen: boolean;
  heading: string;
  close: () => void;
  isSelected?: boolean;
}

const ListItemWrapper = styled.button<{ isSelected: boolean }>`
  width: 420px;
  display: flex;
  align-items: center;
  background: ${(props) => (props.isSelected ? "#197bc2" : "transparent")};
  margin: 0.5rem;
  cursor: pointer;
  border: none;
  &:hover {
    background: #dedede;
  }
`;

const StyledChainIcon = styled.img`
  width: 40px;
`;

const StyledChainName = styled.h3`
  font-size: 18px;
  font-weight: 800;
  color: #222;
  margin: 0;
  margin-left: 0.5rem;
`;

const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TokenSearchModal = ({ isOpen, heading, close }: ITokenSearchModal) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <FlexHeader>
        <DiglogHeader>{heading}</DiglogHeader>
        <IconButton onClick={close}>
          <AiOutlineClose />
        </IconButton>
      </FlexHeader>
      <Divider />
      {Object.keys(chains).map((key) => {
        const chainProviders = chains[key];
        return (
          <List>
            <ListItemWrapper isSelected={false}>
              <StyledChainIcon
                src={chainProviders.chainIcon}
                alt={chainProviders.chainName}
              />
              <StyledChainName>{chainProviders.chainName}</StyledChainName>
            </ListItemWrapper>
          </List>
        );
      })}
    </Modal>
  );
};

export default TokenSearchModal;
