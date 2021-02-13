import React, { useEffect, useState } from 'react'
import { useSelectedTokens } from '../../store/stake/hooks'
import Modal from '../Modal'
import { DiglogHeader } from '../Web3Modal'
import styled from 'styled-components'
import { Divider } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { AiOutlineClose } from 'react-icons/ai'
import useTokenContract from '../../hooks/useTokenContract'
import { getContractAddress } from '@ethersproject/address'
import { UnifarmV2Address, UnifarmV1Address } from '../../constants'
import { useWeb3React } from '@web3-react/core'
import { useOnChange } from '../../store/stake/hooks'

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
  background: #197bc2;
  font-weight: 800;
  color: white;
  border: 0;
  margin-right: 10px;
`
interface IApproveModal {
  close: () => void
  isOpen: boolean
  typeFor: string
}

const ApproveModal = ({ close, isOpen, typeFor }: IApproveModal) => {
  const state = useSelectedTokens()
  const instance = useTokenContract(state.tokenAddress)
  const { active, account, library } = useWeb3React()
  const [isNeededAppprove, setApporve] = useState<boolean>()
  const [stake, setStake] = useState<boolean>()
  var contractAddress

  const { onApprove, onStake } = useOnChange()

  if (typeFor === 'v1') {
    contractAddress = UnifarmV1Address
  } else {
    contractAddress = UnifarmV2Address
  }

  useEffect(() => {
    if (!instance || !active || !account) return null
    instance.methods
      .allowance(account, contractAddress)
      .call()
      .then((result) => {
        const etherAmount = library.utils.fromWei(result.toString())
        console.log(etherAmount)
        if (state.stakingAmount > etherAmount) {
          setApporve(true)
        } else {
          setApporve(false)
          setStake(true)
        }
      })
      .catch((err) => {
        alert('Contract Error')
      })
  }, [active])

  return (
    <Modal isOpen={isOpen} close={close}>
      <FlexHeader>
        <DiglogHeader style={{ display: 'contents' }}>
          Complete Your Transaction
          <IconButton onClick={close}>
            <AiOutlineClose />
          </IconButton>
        </DiglogHeader>
      </FlexHeader>
      <Divider />
      <StyledWraper>
        {stake ? (
          <>
            <ApproveButton isApproved={!isNeededAppprove}>
              Approve
            </ApproveButton>
            <Staked onClick={() => onStake(typeFor)}>Stake</Staked>
          </>
        ) : (
          <>
            <ApproveButton
              isApproved={isNeededAppprove}
              onClick={() => onApprove(typeFor)}
            >
              Approve
            </ApproveButton>
            <Staked onClick={() => onStake(typeFor)}>Stake</Staked>
          </>
        )}
      </StyledWraper>
    </Modal>
  )
}

export default ApproveModal
