import { injected } from '../connectors'
import { AbstractConnector } from '@web3-react/abstract-connector'
import MetamaskLogo from '../assests/images/metamask.png'
import OROIcon from '../assests/images/oro.png'
import NORD from '../assests/images/nord.png'
import MATICIcon from '../assests/images/Sidechain/matic.png'
import CNTRIcon from '../assests/images/Tokens/cntr.png'
import FrontIcon from '../assests/images/Tokens/frontier.png'
import ReefIcon from '../assests/images/Tokens/reef.png'
import TVKIcon from '../assests/images/Tokens/TVK.png'
import RouteICon from '../assests/images/Tokens/ROUTE.png'
import ZERO from '../assests/images/Tokens/zeroswap.png'

export const ORO = '0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46'

export const DRAWER_WIDTH = 240

interface IWallet {
  [connetorName: string]: {
    logoUri: string
    name: string
    connector: AbstractConnector
    description: string
    isMobileSupported: boolean
  }
}
// you can add further diffrent providers.
export const WALLETS: IWallet = {
  METAMASK: {
    logoUri: MetamaskLogo,
    name: 'Metamask',
    connector: injected,
    description: 'Chrome Extension Trusted By 10 Million Users.',
    isMobileSupported: false
  }
}

export const UnifarmV2Address: string =
  '0x80B2f47a644B7bc7f363320047BC7a7B10e05324'

export const UnifarmV1Address: string =
  '0x4b99503776c8fef57e89c58a2c0af25d16734934'

interface ISupportedTokens {
  [tokenAddress: string]: {
    name: string
    key: number
    address?: string
    icon?: string
    decimals?: number
    type?: string
    v1?: boolean
    v2?: boolean
  }
}

export const getImageByKey = {
  ORO: OROIcon,
  MATIC: MATICIcon,
  REEF: ReefIcon,
  CNTR: CNTRIcon,
  FRONT: FrontIcon,
  TVK: TVKIcon,
  ZERO: ZERO,
  NORD: NORD,
  ROUTE: RouteICon
}

export const SupportedTokens: ISupportedTokens = {
  0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46: {
    name: 'ORO',
    key: 0,
    address: '0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46',
    icon: OROIcon,
    decimals: 18,
    type: 'select',
    v1: true,
    v2: true
  },
  0xe98f9b3892229784ccc1fb9bf7f45c3579354118: {
    name: 'MATIC',
    key: 1,
    address: '0xe98f9b3892229784ccc1fb9bf7f45c3579354118',
    icon: MATICIcon,
    decimals: 18,
    type: 'select',
    v1: true,
    v2: true
  },
  0xccc3206cee685bbd62abcc37c99404d8ef0f23a7: {
    name: 'REEF',
    key: 2,
    address: '0xccc3206cee685bbd62abcc37c99404d8ef0f23a7',
    icon: ReefIcon,
    decimals: 18,
    type: 'select',
    v1: true,
    v2: false
  },
  0xbd43847337b0558828ab6290599b20995b1367a8: {
    name: 'CNTR',
    key: 3,
    address: '0xbd43847337b0558828ab6290599b20995b1367a8',
    icon: CNTRIcon,
    decimals: 18,
    type: 'select',
    v1: true,
    v2: false
  },
  0x5b11390207f723145a47dc4a6b69a2c5773ffb25: {
    name: 'FRONT',
    key: 4,
    address: '0x5b11390207f723145a47dc4a6b69a2c5773ffb25',
    icon: FrontIcon,
    decimals: 18,
    type: 'select',
    v1: true,
    v2: false
  },
  0xbe2845e7520223bfd6ab4e6f6ad4369f6ffa6e0e: {
    name: 'TVK',
    key: 5,
    address: '0xbe2845e7520223bfd6ab4e6f6ad4369f6ffa6e0e',
    icon: TVKIcon,
    decimals: 18,
    type: 'select',
    v1: false,
    v2: true
  },
  0xb47f597260edbf30386aecc28938b25d5f0635b7: {
    name: 'ROUTE',
    key: 6,
    address: '0xb47f597260edbf30386aecc28938b25d5f0635b7',
    icon: RouteICon,
    decimals: 18,
    type: 'select',
    v1: false,
    v2: true
  },
  0x3555209ff2933b548ee31646cb3ee201f41a2625: {
    name: 'ZERO',
    key: 7,
    address: '0x3555209ff2933b548ee31646cb3ee201f41a2625',
    icon: ZERO,
    decimals: 18,
    type: 'select',
    v1: false,
    v2: true
  },
  0xb596e98821c558860ec5d3d59460ea9e19a44f66: {
    name: 'NORD',
    key: 8,
    address: '0xb596e98821c558860ec5d3d59460ea9e19a44f66',
    icon: NORD,
    decimals: 18,
    type: 'select',
    v1: false,
    v2: true
  }
}

export const tokensSequenceListPool = {
  ORO: '0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46',
  MATIC: '0xe98f9b3892229784ccc1fb9bf7f45c3579354118',
  CNTR: '0xbd43847337b0558828ab6290599b20995b1367a8',
  REEF: '0xccc3206cee685bbd62abcc37c99404d8ef0f23a7',
  FRONT: '0x5b11390207f723145a47dc4a6b69a2c5773ffb25'
}

export const tokensSequenceListPoolV2 = {
  ORO: '0xef67699222ee81f6a6dcd0a9ba88c24d783c3b46',
  MATIC: '0xe98f9b3892229784ccc1fb9bf7f45c3579354118',
  NORD: '0xb596e98821c558860ec5d3d59460ea9e19a44f66',
  ROUTE: '0xb47f597260edbf30386aecc28938b25d5f0635b7',
  TVK: '0xbe2845e7520223bfd6ab4e6f6ad4369f6ffa6e0e',
  ZERO: '0x3555209ff2933b548ee31646cb3ee201f41a2625'
}
