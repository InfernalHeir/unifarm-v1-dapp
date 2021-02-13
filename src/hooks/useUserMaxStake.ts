import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { validateAddress } from '../utils'
import { useUnifarmV2Contract } from './useTokenContract'
import { formatEther } from '@ethersproject/units'

const useUserMaxStake = (tokenAddress: string, typeFor: string): any => {
  var contract
  if (typeFor === 'v1') {
    contract = useUnifarmV2Contract()
  } else {
    contract = useUnifarmV2Contract()
  }

  const [isUserMaxStake, setMaxStakeValue] = useState<string | boolean>(false)

  const { active } = useWeb3React()

  useEffect(() => {
    if (!active || contract) return null
    contract
      .tokenDetails(tokenAddress)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [active])
  return isUserMaxStake
}

export default useUserMaxStake
