import React, { useCallback } from "react";
import { DiglogHeader } from "../Web3Modal";
import Modal from "../Modal";
import List from "@material-ui/core/List";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import { AiOutlineClose } from "react-icons/ai";
import IconButton from "@material-ui/core/IconButton";
import { SupportedTokens } from "../../constants/index";
import { useDispatch } from "react-redux";
import { setStakingDetails } from "../../store/stake/action";

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
  const dispatch = useDispatch();

  const SelectTokens = useCallback(
    (icon, name, isSelected, tokenAddress) => {
      dispatch(
        setStakingDetails({
          icon,
          name,
          isSelected,
          tokenAddress,
          decimals: 18
        })
      );

      // close this modal
      close();
    },
    [dispatch]
  );

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
        const support = SupportedTokens[key];
        return (
          <List>
            <ListItemWrapper
              isSelected={false}
              onClick={() => {
                return SelectTokens(
                  support.icon,
                  support.name,
                  true,
                  support.address
                );
              }}
            >
              {support.icon && (
                <StyledChainIcon src={support.icon} alt={support.name} />
              )}

              <StyledChainName>{support.name}</StyledChainName>
            </ListItemWrapper>
          </List>
        );
      })}
    </Modal>
  );
};

export default TokenSearchModal;
