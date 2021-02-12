import React, { useCallback } from "react";
import { DiglogHeader } from "../Web3Modal";
import Modal from "../Modal";
import List from "@material-ui/core/List";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import { AiOutlineClose } from "react-icons/ai";
import IconButton from "@material-ui/core/IconButton";
import { SupportedTokens } from "../../constants/index";
import { useSetTokenDetails } from "../../store/stake/hooks";

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
  const { setSelectedTokenDetails } = useSetTokenDetails();

  return (
    <Modal isOpen={isOpen} close={close}>
      <FlexHeader>
        <DiglogHeader>{heading}</DiglogHeader>
        <IconButton onClick={close}>
          <AiOutlineClose />
        </IconButton>
      </FlexHeader>
      <Divider />
      {Object.keys(SupportedTokens).map((key) => {
        const token = SupportedTokens[key];
        return (
          <List key={token.key}>
            <ListItemWrapper
              isSelected={false}
              onClick={() => {
                return (
                  setSelectedTokenDetails({
                    decimals: token.decimals,
                    tokenAddress: token.address,
                    name: token.name,
                    icon: token.icon,
                    isSelected: true,
                    v1: token.v1,
                    v2: token.v2
                  }),
                  close()
                );
              }}
            >
              {token.icon && (
                <StyledChainIcon src={token.icon} alt={token.name} />
              )}

              <StyledChainName>{token.name}</StyledChainName>
            </ListItemWrapper>
          </List>
        );
      })}
    </Modal>
  );
};

export default TokenSearchModal;
