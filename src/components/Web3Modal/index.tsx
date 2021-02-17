<<<<<<< HEAD
import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import List from '@material-ui/core/List'
//import DialogTitle from "@material-ui/core/DialogTitle";
//import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DialogActions from '@material-ui/core/DialogActions'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
//import ListItemText from "@material-ui/core/ListItemText";
import Button from '@material-ui/core/Button'
import { WALLETS } from '../../constants'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Divider from '@material-ui/core/Divider'
import { useCloseModal, useModalStatus } from '../../store/app/hooks'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { ModalTypes } from '../../store/app/reducer'
=======
import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DialogActions from "@material-ui/core/DialogActions";
import { useWeb3React } from "@web3-react/core";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { WALLETS } from "../../constants";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from "@material-ui/core/Divider";
import { useCloseModal, useModalStatus } from "../../store/app/hooks";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { ModalTypes } from "../../store/app/reducer";
import Modal from "../../components/Modal";
import IconButton from "@material-ui/core/IconButton";
import { AiOutlineClose } from "react-icons/ai";
import { FlexHeader } from "../ApproveModal";
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

export const ProviderLogo = styled.img`
  width: 24px;
  margin-right: 10px;
`

export const DiglogHeader = styled.h2`
  font-weight: 800;
  color: #222;
  font-size: large;
`

const ProviderWrapper = styled.button<{ isActive: boolean }>`
<<<<<<< HEAD
  padding: 1rem;
  border: 1px solid #222;
  margin-top: 10px;
  border-radius: 12px;
  background: ${(props) => (props.isActive ? '#dedede' : 'transparent')};
  display: flex;
  width: 420px;
  align-items: center;
`
=======
  padding: 10px;
  border: 1px solid #22222236;
  margin-top: 10px;
  border-radius: 12px;
  background: ${(props) => (props.isActive ? "#dedede" : "transparent")};
  display: flex;
  width: 350px;
  align-items: center;
  cursor: pointer;
`;
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

const ProviderName = styled.h4`
  color: #222;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`

const Circle = styled.div`
  height: 8px;
  width: 8px;
  background-color: #4bb543;
  border-radius: 50%;
  margin-right: 4px;
<<<<<<< HEAD
`
=======
`;

const EtherWrapper = styled.div`
  margin-top: 16px;
  padding: 5px;
`;
const EtherLink = styled.a`
  font-weight: 800;
  color: #222;
  text-decoration: none;
`;
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

const Web3Modal = () => {
  const [
    activeConnector,
    setActiveConnector
<<<<<<< HEAD
  ] = useState<AbstractConnector | null>()
=======
  ] = useState<AbstractConnector | null>();

  const isOpen = useModalStatus(ModalTypes.WALLET);
  const close = useCloseModal();

  const theme = useTheme();
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

  const isOpen = useModalStatus(ModalTypes.WALLET)

  const theme = useTheme()

<<<<<<< HEAD
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const { activate } = useWeb3React()

=======
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
  const tryActivating = async (connector: AbstractConnector) => {
    // activate the connector
    try {
      await activate(connector)
      // set the active connector
      setActiveConnector(connector)
      // then close the modal
      close()
    } catch (err) {
<<<<<<< HEAD
      close()
    }
  }
=======
      close();
    }
  };
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

  return (
    <Modal isOpen={isOpen} close={close}>
      <FlexHeader>
        <DiglogHeader style={{ display: "contents" }}>
          Connect Wallet
          <IconButton onClick={close} style={{ cursor: "pointer" }}>
            <AiOutlineClose />
          </IconButton>
        </DiglogHeader>
      </FlexHeader>
      <Divider />
      <List component="nav" aria-label="providers">
        {Object.keys(WALLETS).map((key) => {
          const provider = WALLETS[key]
          const activeOne = activeConnector === provider.connector
          return (
            <ProviderWrapper
              onClick={() => {
                tryActivating(provider.connector)
              }}
              isActive={activeOne}
              key={key}
            >
<<<<<<< HEAD
              <ListItemIcon>
                <ProviderLogo src={provider.logoUri} alt={provider.name} />
              </ListItemIcon>
              {/* {activeOne && <Circle />} */}
=======
              <ProviderLogo src={provider.logoUri} alt={provider.name} />
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc
              <ProviderName>{provider.name}</ProviderName>
            </ProviderWrapper>
          )
        })}
        <EtherWrapper>
          <EtherLink href="https://ethereum.org/wallets">
            What is Ethereum Wallets ?
          </EtherLink>
        </EtherWrapper>
      </List>
<<<<<<< HEAD

      <DialogActions>
        <Button
          fullWidth={true}
          variant="contained"
          color="primary"
          onClick={close}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
=======
    </Modal>
  );
};
>>>>>>> b372e57e5d43d74ccdb35fb65dfb404c8d8842dc

export default Web3Modal
