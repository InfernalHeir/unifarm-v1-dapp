import React from "react";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
//import DialogTitle from "@material-ui/core/DialogTitle";
//import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DialogActions from "@material-ui/core/DialogActions";
import { useWeb3React } from "@web3-react/core";
import styled from "styled-components";
//import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { WALLETS } from "../../constants";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useModalChecker } from "../../store/app/hooks";
import Divider from "@material-ui/core/Divider";
import { useCloseModal } from "../../store/app/hooks";

export const ProviderLogo = styled.img`
  width: 30px;
  margin-right: 10px;
`;

export const DiglogHeader = styled.h2`
  font-weight: 800;
  color: #222;
  font-size: large;
`;

const ProviderWrapper = styled.button`
  padding: 0.5rem;
  border-radius: 12px;
  background: #dedede;
  display: flex;
  border: 0;
  width: 420px;
  align-items: center;
`;

const ProviderName = styled.h4`
  color: #222;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;
const Web3Modal = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { activate } = useWeb3React();

  const close = useCloseModal();

  const isOpen: boolean = useModalChecker();
  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      fullScreen={fullScreen}
      open={isOpen}
    >
      <DiglogHeader>Connect Wallet</DiglogHeader>
      <Divider />
      <List component="nav" aria-label="providers">
        {Object.keys(WALLETS).map((key) => {
          const provider = WALLETS[key];
          return (
            <ProviderWrapper
              onClick={() => {
                activate(provider.connector);
              }}
            >
              <ListItemIcon>
                <ProviderLogo src={provider.logoUri} alt={provider.name} />
              </ListItemIcon>
              <ProviderName>{provider.name}</ProviderName>
            </ProviderWrapper>
          );
        })}
      </List>

      <DialogActions>
        <Button variant="contained" color="primary" onClick={close}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Web3Modal;
