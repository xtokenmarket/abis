import {
  AAVE,
  AAVE_GOVERNANCE_V2,
  AAVE_X_AAVE_A_CLR,
  ALPHA,
  BALANCER_V2_VAULT,
  BANCOR_CONTRACT_REGISTRY,
  BNT,
  BUSD,
  DAI,
  DMM_FACTORY,
  ETH,
  ETH_BNT_ANCHOR,
  ETH_RSI_60_40,
  FEE_POOL,
  FRAX,
  INCH,
  INCH_LIQUIDITY_PROTOCOL,
  KNC,
  KYBER_GOVERNANCE,
  KYBER_PROXY,
  PROXY_ADMIN,
  REN_BTC,
  REVENUE_CONTROLLER,
  REWARD_CONTROLLER,
  S_ETH,
  S_USD,
  SNX,
  SYNTHETIX_ADDRESS_RESOLVER,
  TRADE_ACCOUNTING,
  UNISWAP_LIBRARY,
  USDC,
  USDT,
  UST,
  WBTC,
  WETH,
  X_AAVE_A,
  X_AAVE_A_BALANCER_POOL,
  X_AAVE_B,
  X_AAVE_B_BALANCER_POOL,
  X_ALPHA_A,
  X_ALPHA_A_ALPHA_CLR,
  X_BNT_A,
  X_BNT_A_BANCOR_POOL,
  X_BNT_A_MERKLE_CLAIM,
  X_INCH_A,
  X_INCH_A_INCH_POOL,
  X_INCH_B,
  X_INCH_B_INCH_POOL,
  X_KNC_A,
  X_KNC_A_KYBER_POOL,
  X_KNC_A_UNISWAP_POOL,
  X_KNC_B,
  X_KNC_B_UNISWAP_POOL,
  X_SNX_A,
  X_SNX_A_BALANCER_POOL,
  X_SNX_A_BALANCER_POOL_V2,
  X_SNX_A_MERKLE_CLAIM,
  X_SNX_ADMIN,
  X_U3LP_A,
  X_U3LP_B,
  X_U3LP_C,
  X_U3LP_D,
  X_U3LP_E,
  X_U3LP_F,
  X_U3LP_G,
  X_U3LP_H,
  XTK,
  XTK_ETH_CLR,
  XTK_MANAGEMENT_STAKING_MODULE,
  XTOKEN_MANAGER,
} from './constants'

// TODO: Sort them into categories similar to `constants.ts`
export const ADDRESSES: {
  readonly [contract: string]:
    | string
    | {
        readonly [networkId: number]: string
      }
} = {
  [X_KNC_A]: {
    1: '0x0bfEc35a1A3550Deed3F6fC76Dde7FC412729a91',
    3: '0x1A2235890aFdA5e4E02C5E77bbCBcE2E6030fC3B',
  },
  [X_KNC_B]: {
    1: '0x06890D4c65A4cB75be73D7CCb4a8ee7962819E81',
    3: '0xEF993C613DC837429C11dDB681B5Dda3506AF3Cb',
  },
  [X_KNC_A_KYBER_POOL]: {
    1: '0xCE9e71E4C12A95f89DC2375e5C119620d1EFfAaD',
  },
  [X_KNC_A_UNISWAP_POOL]: {
    1: '0x3b686B18617f884bD9601eF594e19e4a917278a9',
  },
  [X_KNC_B_UNISWAP_POOL]: {
    1: '0x9532748a8ea9FC06Ad562D35ca6c631af5DDF59a',
  },
  [X_SNX_A]: {
    1: '0x1Cf0f3AaBE4D12106B27Ab44df5473974279C524',
    42: '0x2Bf815B4bA7c70879013E559d9e02f29EBEa7acA',
  },
  [X_SNX_ADMIN]: {
    1: '0x7Cd5E2d0056a7A7F09CBb86e540Ef4f6dCcc97dd',
  },
  [X_SNX_A_MERKLE_CLAIM]: {
    1: '0x1de6Cd47Dfe2dF0d72bff4354d04a79195cABB1C',
  },
  [TRADE_ACCOUNTING]: {
    1: '0x6461E964D687E7ca3082bECC595D079C6c775Ac8',
    42: '0x6b9f858c5fea781336bb2552cf2e2d88c9508267',
  },
  [KNC]: {
    1: '0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202',
    3: '0x7B2810576aa1cce68F2B118CeF1F36467c648F92',
  },
  [SNX]: {
    1: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
    42: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  },
  [FEE_POOL]: {
    1: '0xb440DD674e1243644791a4AdfE3A2AbB0A92d309',
  },
  [SYNTHETIX_ADDRESS_RESOLVER]: {
    1: '0x61166014E3f04E40C953fe4EAb9D9E40863C83AE',
    42: '0x25ee175d78B22A55982c09e6A03D605aE5B5c17C',
  },
  [KYBER_PROXY]: {
    1: '0x9AAb3f75489902f3a48495025729a0AF77d4b11e',
    3: '0x818E6FECD516Ecc3849DAf6845e3EC868087B755',
    42: '0x692f391bCc85cefCe8C237C01e1f636BbD70EA4D',
  },
  [KYBER_GOVERNANCE]: {
    1: '0x7Ec8FcC26bE7e9E85B57E73083E5Fe0550d8A7fE',
  },
  [ETH]: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  [USDC]: {
    1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    3: '0xaD6D458402F60fD3Bd25163575031ACDce07538D',
    42: '0xEe512781D102288Fa9E29033bCfD7cb73430c528',
    42161: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
  },
  [ETH_RSI_60_40]: {
    1: '0x93E01899c10532d76C0E864537a1D26433dBbDdB',
  },
  [AAVE]: {
    1: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
    42: '0xb597cd8d3217ea6477232f9217fa70837ff667af',
  },
  [X_AAVE_A]: {
    1: '0x80DC468671316E50D4E9023D3db38D3105c1C146',
    42: '0xb36f06dB2F9EE10879640C53E3E09Ee4C476597D',
  },
  [ALPHA]: {
    1: '0xa1faa113cbE53436Df28FF0aEe54275c13B40975',
    42: '0x0363d8e8646feb8376772ac4fc18e1805d45514e',
  },
  [X_ALPHA_A]: {
    1: '0x244ca1d5331246c926Ff31250b9E82a4916C97E9',
    42: '0x02b584Bd5B4268E08cdF371980260988E6645fb0',
  },
  [X_AAVE_B]: {
    1: '0x704De5696dF237c5B9ba0De9ba7e0C63dA8eA0Df',
    42: '0xdAaEEc7279480c7DB83D40010C8336702dE087Ed',
  },
  [X_AAVE_A_BALANCER_POOL]: {
    1: '0x33812E984D49eD5b44d75A008c12060E5076238C',
    42: '0x988E00494D46Ca73B51810A851000850c584A060',
  },
  [X_AAVE_B_BALANCER_POOL]: {
    1: '0xd9346Ab5a2Ed5e32F5fC69a5CccF45211307FFC5',
    42: '0x988E00494D46Ca73B51810A851000850c584A060',
  },
  [AAVE_GOVERNANCE_V2]: {
    1: '0xEC568fffba86c094cf06b22134B23074DFE2252c',
  },
  [X_INCH_A]: {
    1: '0x8F6A193C8B3c949E1046f1547C3A3f0836944E4b',
  },
  [X_INCH_B]: {
    1: '0x6B33f15360cedBFB8F60539ec828ef52910acA9b',
  },
  [INCH]: {
    1: '0x111111111117dC0aa78b770fA6A738034120C302',
  },
  [INCH_LIQUIDITY_PROTOCOL]: {
    1: '0x0EF1B8a0E726Fc3948E15b23993015eB1627f210',
  },
  [X_INCH_A_INCH_POOL]: {
    1: '0xA90B24fb781C761b3088b4769ACeFd0B27d21E7e',
  },
  [X_INCH_B_INCH_POOL]: {
    1: '0x8A167C219ddE964Aa8D594Af7F635b4a08a08B5d',
  },
  [X_SNX_A_BALANCER_POOL]: {
    1: '0xE3f9cF7D44488715361581DD8B3a15379953eB4C',
  },
  [WETH]: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    42: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
    42161: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  },
  [X_BNT_A]: {
    1: '0x6949f1118FB09aD2567fF675f96DbB3B6985ACd0',
  },
  [BNT]: {
    1: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
  },
  [BANCOR_CONTRACT_REGISTRY]: {
    1: '0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4',
  },
  [ETH_BNT_ANCHOR]: {
    1: '0xb1CD6e4153B2a390Cf00A6556b0fC1458C4A5533',
  },
  [X_BNT_A_BANCOR_POOL]: {
    1: '0x56a6594a55c4580D525934FF180485eD00adBf4b',
  },
  [X_BNT_A_MERKLE_CLAIM]: {
    1: '0x978090cefBe48B5C785e1265F60A41B92E27bE52',
  },
  [DMM_FACTORY]: {
    1: '0x833e4083B7ae46CeA85695c4f7ed25CDAd8886dE',
  },
  [BUSD]: {
    1: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  },
  [DAI]: {
    1: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    42: '0x7444b6F093e9a3CB80aEbb11503fA12F2748690e',
  },
  [FRAX]: {
    1: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
  },
  [REN_BTC]: {
    1: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
  },
  [S_ETH]: {
    1: '0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb',
  },
  [S_USD]: {
    1: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
  },
  [UST]: {
    1: '0xa47c8bf37f92aBed4A126BDA807A7b7498661acD',
  },
  [USDT]: {
    1: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    42161: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
  },
  [WBTC]: {
    1: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  },
  [XTK]: {
    1: '0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB',
  },
  [X_U3LP_A]: {
    1: '0xDa4d2152B2230e33c80b0A88b7C28b1C464EE3c2',
    42: '0xA7ab15A9166334bB2EFe3Dc59625a6FEdEcfD517',
  },
  [X_U3LP_B]: {
    1: '0x420CF01fdC7e3c42c3D89ae8799bACCBfFa9ceAA',
    42161: '0x216D135926f5EC9E5924564A342580B0b5A3bdc6',
  },
  [X_U3LP_C]: {
    1: '0x74e87FBA6C4bCd17fe5f14D73f590eD3C13E821B',
  },
  [X_U3LP_D]: {
    1: '0xdD699Eae49A3504a28AeB9BD76a3f0369fA08471',
  },
  [X_U3LP_E]: {
    1: '0x828EC6E678A40c251f1F37DA389db0f820Af6f9D',
  },
  [X_U3LP_F]: {
    1: '0x4296d40183356A770Fd8cA3Ba0592f0163BE9CA3',
  },
  [X_U3LP_G]: {
    1: '0x28ce95124FB0d5Febe6Ab258072848f5fe1010eC',
  },
  [X_U3LP_H]: {
    1: '0x9ed880b7F75a220C0450E4884521ba8d500eb4bb',
  },
  [BALANCER_V2_VAULT]: {
    1: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
  },
  [X_SNX_A_BALANCER_POOL_V2]: {
    1: '0xEA39581977325C0833694D51656316Ef8A926a62',
  },
  [PROXY_ADMIN]: {
    1: '0x54FF0Bf514134A24D2795c554952E0ce1F47aC79',
  },
  [REVENUE_CONTROLLER]: {
    1: '0x37310ee55D433E51530b3efE41990360D6dBCFC3',
  },
  [REWARD_CONTROLLER]: {
    1: '0x95B6d1848A9940a42F22054084c0590A9997C653',
  },
  [UNISWAP_LIBRARY]: {
    1: '0xBD289A47C6E00242eac1fc6102aE3e52272aC8cf',
  },
  [XTK_MANAGEMENT_STAKING_MODULE]: {
    1: '0x314022E24ceD941781DC295682634B37Bd0d9cFc',
  },
  [XTOKEN_MANAGER]: {
    1: '0xfA3CaAb19E6913b6aAbdda4E27ac413e96EaB0Ca',
  },

  // xAsset CLR
  [AAVE_X_AAVE_A_CLR]: {
    1: '0xAd5AF0073502afaB66c0cbA8dE6d01AcDf082B76',
  },
  [X_ALPHA_A_ALPHA_CLR]: {
    1: '0xd8401Ee44386AAfFa746d0BCf372B1Bf0b1B784b',
  },
  [XTK_ETH_CLR]: {
    1: '0xA3FB85dED2fE725d8Ae21f684E65Db5aAe47192e',
  },
}
