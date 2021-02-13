import React from 'react'
import { useSelectedTokens } from '../../store/stake/hooks'
import Modal from '../Modal'
import { DiglogHeader } from '../Web3Modal'
import styled from 'styled-components'
import { Divider } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { AiOutlineClose } from 'react-icons/ai'

const StyledWraper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  width: 350px;
`
const FlexHeader = styled.div`
  font-weight: 800;
  color: #222;
  font-size: large;
  justify-content: space-between;
  display: flex;
  align-items: center;
`

const ApproveButton = styled.button<{ isApproved: boolean }>`
  padding: 10px;
  borader: none;
  border-radius: 12px;
  background: ${(props) => (props.isApproved ? '#dedede' : '#4bb543')};
  font-weight: 800;
  color: white;
  border: 0;
  margin-right: 10px;
`

const Staked = styled.button`
  padding: 10px;
  borader: none;
  border-radius: 12px;
  background: #4bb543;
  font-weight: 800;
  color: white;
  border: 0;
  margin-right: 10px;
`
interface IApproveModal {
  close: () => void
  isOpen: boolean
}

const ApproveModal = ({ close, isOpen }: IApproveModal) => {
  const state = useSelectedTokens()
  return (
    <Modal isOpen={isOpen} close={close}>
      <FlexHeader>
        <DiglogHeader style={{ display: 'contents' }}>
          Approve {state.name}
          <IconButton onClick={close}>
            <AiOutlineClose />
          </IconButton>
        </DiglogHeader>
      </FlexHeader>
      <Divider />

      <StyledWraper>
        <ApproveButton isApproved={false}>Approve</ApproveButton>
        <Staked>Stake</Staked>
      </StyledWraper>
    </Modal>
  )
}

export default ApproveModal
