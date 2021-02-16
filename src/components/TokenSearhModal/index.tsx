import React, { useCallback } from "react";
import { DiglogHeader } from "../Web3Modal";
import Modal from "../Modal";
import List from "@material-ui/core/List";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import { AiOutlineClose } from "react-icons/ai";
import IconButton from "@material-ui/core/IconButton";
import { tokenlist } from "../../constants/index";
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
      {tokenlist.tokenMetaData.map((item) => {
        return (
          <List key={item.key}>
            <ListItemWrapper
              isSelected={false}
              onClick={() => {
                return (
                  setSelectedTokenDetails({
                    decimals: item.decimals,
                    tokenAddress: item.address,
                    name: item.name,
                    icon: item.icon,
                    isSelected: true,
                    v1: item.isV1,
                    v2: item.isV2
                  }),
                  close()
                );
              }}
            >
              {item.icon && <StyledChainIcon src={item.icon} alt={item.name} />}

              <StyledChainName>{item.name}</StyledChainName>
            </ListItemWrapper>
          </List>
        );
      })}
    </Modal>
  );
};

export default TokenSearchModal;
