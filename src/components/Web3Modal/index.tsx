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

export const ProviderLogo = styled.img`
  width: 30px;
  margin-right: 10px;
`

export const DiglogHeader = styled.h2`
  font-weight: 800;
  color: #222;
  font-size: large;
`

const ProviderWrapper = styled.button<{ isActive: boolean }>`
  padding: 1rem;
  border: 1px solid #222;
  margin-top: 10px;
  border-radius: 12px;
  background: ${(props) => (props.isActive ? '#dedede' : 'transparent')};
  display: flex;
  width: 420px;
  align-items: center;
`

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
`

const Web3Modal = () => {
  const [
    activeConnector,
    setActiveConnector
  ] = useState<AbstractConnector | null>()

  const isOpen = useModalStatus(ModalTypes.WALLET)

  const theme = useTheme()

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const { activate } = useWeb3React()

  const tryActivating = async (connector: AbstractConnector) => {
    // activate the connector
    try {
      await activate(connector)
      // set the active connector
      setActiveConnector(connector)
      // then close the modal
      close()
    } catch (err) {
      close()
    }
  }

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
              <ListItemIcon>
                <ProviderLogo src={provider.logoUri} alt={provider.name} />
              </ListItemIcon>
              {/* {activeOne && <Circle />} */}
              <ProviderName>{provider.name}</ProviderName>
            </ProviderWrapper>
          )
        })}
      </List>

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

export default Web3Modal
