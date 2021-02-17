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
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  textfield: {
    width: "96%",
    marginLeft: 10
  },
  btnStyle: {
    borderRadius: 20,
    width: 440,
    height: 55,
    justifyContent: "space-between",
    color: "black",
    border: "1px solid rgba(0, 0, 0, 0.23)"
  },
  dilogTitle: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const TokenSearchModal = ({ isOpen, close }: ITokenSearchModal) => {
  const { setSelectedTokenDetails } = useSetTokenDetails();
  const classes = useStyles();
  return (
    <Modal isOpen={isOpen} close={close}>
      <FlexHeader>
        <DiglogHeader>Select Your Token</DiglogHeader>
        <IconButton onClick={close}>
          <AiOutlineClose />
        </IconButton>
      </FlexHeader>

      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Search Your Token"
        className={classes.textfield}
      />

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
