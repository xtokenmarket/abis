"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADDRESSES = void 0;
const constants_1 = require("./constants");
// TODO: Sort them into categories similar to `constants.ts`
exports.ADDRESSES = {
    [constants_1.X_KNC_A]: {
        1: '0x0bfEc35a1A3550Deed3F6fC76Dde7FC412729a91',
        3: '0x1A2235890aFdA5e4E02C5E77bbCBcE2E6030fC3B',
    },
    [constants_1.X_KNC_B]: {
        1: '0x06890D4c65A4cB75be73D7CCb4a8ee7962819E81',
        3: '0xEF993C613DC837429C11dDB681B5Dda3506AF3Cb',
    },
    [constants_1.X_KNC_A_KYBER_POOL]: {
        1: '0xCE9e71E4C12A95f89DC2375e5C119620d1EFfAaD',
    },
    [constants_1.X_KNC_A_UNISWAP_POOL]: {
        1: '0x3b686B18617f884bD9601eF594e19e4a917278a9',
    },
    [constants_1.X_KNC_B_UNISWAP_POOL]: {
        1: '0x9532748a8ea9FC06Ad562D35ca6c631af5DDF59a',
    },
    [constants_1.X_SNX_A]: {
        1: '0x1Cf0f3AaBE4D12106B27Ab44df5473974279C524',
        42: '0x2Bf815B4bA7c70879013E559d9e02f29EBEa7acA',
    },
    [constants_1.X_SNX_ADMIN]: {
        1: '0x7Cd5E2d0056a7A7F09CBb86e540Ef4f6dCcc97dd',
    },
    [constants_1.X_SNX_A_MERKLE_CLAIM]: {
        1: '0x1de6Cd47Dfe2dF0d72bff4354d04a79195cABB1C',
    },
    [constants_1.TRADE_ACCOUNTING]: {
        1: '0x6461E964D687E7ca3082bECC595D079C6c775Ac8',
        42: '0x6b9f858c5fea781336bb2552cf2e2d88c9508267',
    },
    [constants_1.KNC]: {
        1: '0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202',
        3: '0x7B2810576aa1cce68F2B118CeF1F36467c648F92',
    },
    [constants_1.SNX]: {
        1: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
        42: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
    },
    [constants_1.FEE_POOL]: {
        1: '0xb440DD674e1243644791a4AdfE3A2AbB0A92d309',
    },
    [constants_1.SYNTHETIX_ADDRESS_RESOLVER]: {
        1: '0x61166014E3f04E40C953fe4EAb9D9E40863C83AE',
        42: '0x25ee175d78B22A55982c09e6A03D605aE5B5c17C',
    },
    [constants_1.KYBER_PROXY]: {
        1: '0x9AAb3f75489902f3a48495025729a0AF77d4b11e',
        3: '0x818E6FECD516Ecc3849DAf6845e3EC868087B755',
        42: '0x692f391bCc85cefCe8C237C01e1f636BbD70EA4D',
    },
    [constants_1.KYBER_GOVERNANCE]: {
        1: '0x7Ec8FcC26bE7e9E85B57E73083E5Fe0550d8A7fE',
    },
    [constants_1.ETH]: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    [constants_1.USDC]: {
        1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        3: '0xaD6D458402F60fD3Bd25163575031ACDce07538D',
        // 42: '0xEe512781D102288Fa9E29033bCfD7cb73430c528',
        42: '0x377Bfc3471C8456e3761849D2EbA79c42Dc91723',
        42161: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
        421611: '0x7B4D25e86Ae2bD7a776c791c56DFd399Cd484ceb',
    },
    [constants_1.ETH_RSI_60_40]: {
        1: '0x93E01899c10532d76C0E864537a1D26433dBbDdB',
    },
    [constants_1.AAVE]: {
        1: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
        42: '0xb597cd8d3217ea6477232f9217fa70837ff667af',
    },
    [constants_1.X_AAVE_A]: {
        1: '0x80DC468671316E50D4E9023D3db38D3105c1C146',
        42: '0xb36f06dB2F9EE10879640C53E3E09Ee4C476597D',
    },
    [constants_1.ALPHA]: {
        1: '0xa1faa113cbE53436Df28FF0aEe54275c13B40975',
        42: '0x0363d8e8646feb8376772ac4fc18e1805d45514e',
    },
    [constants_1.X_ALPHA_A]: {
        1: '0x244ca1d5331246c926Ff31250b9E82a4916C97E9',
        42: '0x02b584Bd5B4268E08cdF371980260988E6645fb0',
    },
    [constants_1.X_AAVE_B]: {
        1: '0x704De5696dF237c5B9ba0De9ba7e0C63dA8eA0Df',
        42: '0xdAaEEc7279480c7DB83D40010C8336702dE087Ed',
    },
    [constants_1.X_AAVE_A_BALANCER_POOL]: {
        1: '0x33812E984D49eD5b44d75A008c12060E5076238C',
        42: '0x988E00494D46Ca73B51810A851000850c584A060',
    },
    [constants_1.X_AAVE_B_BALANCER_POOL]: {
        1: '0xd9346Ab5a2Ed5e32F5fC69a5CccF45211307FFC5',
        42: '0x988E00494D46Ca73B51810A851000850c584A060',
    },
    [constants_1.AAVE_GOVERNANCE_V2]: {
        1: '0xEC568fffba86c094cf06b22134B23074DFE2252c',
    },
    [constants_1.X_INCH_A]: {
        1: '0x8F6A193C8B3c949E1046f1547C3A3f0836944E4b',
        42: '0xf37459c9038F9C2E3A1a23293524882c6aD21478',
        421611: '0x267c01f8bE42674126C5602a6a13512c692300e3',
    },
    [constants_1.X_INCH_B]: {
        1: '0x6B33f15360cedBFB8F60539ec828ef52910acA9b',
    },
    [constants_1.INCH]: {
        1: '0x111111111117dC0aa78b770fA6A738034120C302',
        42: '0xf83b5Bf86b54E2471FCc45Aa8997DC73A8163a70',
    },
    [constants_1.INCH_LIQUIDITY_PROTOCOL]: {
        1: '0x0EF1B8a0E726Fc3948E15b23993015eB1627f210',
    },
    [constants_1.X_INCH_A_INCH_POOL]: {
        1: '0xA90B24fb781C761b3088b4769ACeFd0B27d21E7e',
    },
    [constants_1.X_INCH_B_INCH_POOL]: {
        1: '0x8A167C219ddE964Aa8D594Af7F635b4a08a08B5d',
    },
    [constants_1.X_SNX_A_BALANCER_POOL]: {
        1: '0xE3f9cF7D44488715361581DD8B3a15379953eB4C',
    },
    [constants_1.WETH]: {
        1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        42: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
        42161: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
        421611: '0x5A690757D9DDC46DB47827AA08d416CcBe27aedd',
    },
    [constants_1.X_BNT_A]: {
        1: '0x6949f1118FB09aD2567fF675f96DbB3B6985ACd0',
    },
    [constants_1.BNT]: {
        1: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
    },
    [constants_1.BANCOR_CONTRACT_REGISTRY]: {
        1: '0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4',
    },
    [constants_1.ETH_BNT_ANCHOR]: {
        1: '0xb1CD6e4153B2a390Cf00A6556b0fC1458C4A5533',
    },
    [constants_1.X_BNT_A_BANCOR_POOL]: {
        1: '0x56a6594a55c4580D525934FF180485eD00adBf4b',
    },
    [constants_1.X_BNT_A_MERKLE_CLAIM]: {
        1: '0x978090cefBe48B5C785e1265F60A41B92E27bE52',
    },
    [constants_1.DMM_FACTORY]: {
        1: '0x833e4083B7ae46CeA85695c4f7ed25CDAd8886dE',
    },
    [constants_1.BUSD]: {
        1: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
    },
    [constants_1.DAI]: {
        1: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        42: '0x7444b6F093e9a3CB80aEbb11503fA12F2748690e',
    },
    [constants_1.FRAX]: {
        1: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
    },
    [constants_1.REN_BTC]: {
        1: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
    },
    [constants_1.S_ETH]: {
        1: '0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb',
    },
    [constants_1.S_USD]: {
        1: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
    },
    [constants_1.UST]: {
        1: '0xa47c8bf37f92aBed4A126BDA807A7b7498661acD',
    },
    [constants_1.USDT]: {
        1: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        42161: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
        421611: '0xf20b8fb07506E903c84C1F2c5b15d004FaA77940',
    },
    [constants_1.WBTC]: {
        1: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        42161: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
        421611: '0xeB01c68DC44E0D7378fE66a300897566390450d3',
    },
    [constants_1.LINK]: {
        1: '0x514910771af9ca656af840dff83e8264ecf986ca',
        42161: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
        421611: '0xEE0ca0003457E44D48f6FD264d08D6a012a5cB2E',
    },
    [constants_1.XTK]: {
        1: '0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB',
    },
    [constants_1.X_U3LP_A]: {
        1: '0xDa4d2152B2230e33c80b0A88b7C28b1C464EE3c2',
        42: '0xA7ab15A9166334bB2EFe3Dc59625a6FEdEcfD517',
        421611: '0x03625fafb64a4b3d1221e7bceac8432ce3dcb644',
    },
    [constants_1.X_U3LP_B]: {
        1: '0x420CF01fdC7e3c42c3D89ae8799bACCBfFa9ceAA',
        42161: '0x216D135926f5EC9E5924564A342580B0b5A3bdc6',
        421611: '0x8ae00949b483509a9043fc9231b3a09dc4f6cbc6',
    },
    [constants_1.X_U3LP_C]: {
        1: '0x74e87FBA6C4bCd17fe5f14D73f590eD3C13E821B',
    },
    [constants_1.X_U3LP_D]: {
        1: '0xdD699Eae49A3504a28AeB9BD76a3f0369fA08471',
    },
    [constants_1.X_U3LP_E]: {
        1: '0x828EC6E678A40c251f1F37DA389db0f820Af6f9D',
    },
    [constants_1.X_U3LP_F]: {
        1: '0x4296d40183356A770Fd8cA3Ba0592f0163BE9CA3',
    },
    [constants_1.X_U3LP_G]: {
        1: '0x28ce95124FB0d5Febe6Ab258072848f5fe1010eC',
    },
    [constants_1.X_U3LP_H]: {
        1: '0x9ed880b7F75a220C0450E4884521ba8d500eb4bb',
    },
    [constants_1.BALANCER_V2_VAULT]: {
        1: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    },
    [constants_1.X_SNX_A_BALANCER_POOL_V2]: {
        1: '0xEA39581977325C0833694D51656316Ef8A926a62',
    },
    [constants_1.PROXY_ADMIN]: {
        1: '0x54FF0Bf514134A24D2795c554952E0ce1F47aC79',
    },
    [constants_1.REVENUE_CONTROLLER]: {
        1: '0x37310ee55D433E51530b3efE41990360D6dBCFC3',
    },
    [constants_1.REWARD_CONTROLLER]: {
        1: '0x95B6d1848A9940a42F22054084c0590A9997C653',
    },
    [constants_1.UNISWAP_LIBRARY]: {
        1: '0xBD289A47C6E00242eac1fc6102aE3e52272aC8cf',
    },
    [constants_1.XTK_MANAGEMENT_STAKING_MODULE]: {
        1: '0x314022E24ceD941781DC295682634B37Bd0d9cFc',
    },
    [constants_1.XTOKEN_MANAGER]: {
        1: '0xfA3CaAb19E6913b6aAbdda4E27ac413e96EaB0Ca',
    },
    // xAsset CLR
    [constants_1.AAVE_X_AAVE_A_CLR]: {
        1: '0xAd5AF0073502afaB66c0cbA8dE6d01AcDf082B76',
    },
    [constants_1.X_ALPHA_A_ALPHA_CLR]: {
        1: '0xd8401Ee44386AAfFa746d0BCf372B1Bf0b1B784b',
    },
    [constants_1.XTK_ETH_CLR]: {
        1: '0xA3FB85dED2fE725d8Ae21f684E65Db5aAe47192e',
    },
    // Lending
    [constants_1.LENDING_COMPTROLLER]: {
        1: '0x7d99869F4a9CB386cE1995929B352e0FAbd1DC31',
        42: '0x49Ae091d8B5DFf60a4beBA3696A74368587bA66d',
        42161: '0x54FF0Bf514134A24D2795c554952E0ce1F47aC79',
        421611: '0xf27dA253C35C2514365939D58610ad7372a2DB3d',
    },
    [constants_1.LENDING_LIQUIDITY_POOL]: {
        1: '0xcFB0470B8d31c99f9998800C4ffB3B83C917cA8A',
        42: '0x75759C16d800550b91e745C0AEd67A57b4F007C1',
        42161: '0xbc36d8121B82C0B8E7EF0374ea19fC073335CC3C',
        421611: '0xa2E3EA163649F1A87D40608a4840F8c1a0CdA2d1',
    },
    [constants_1.LENDING_LPT]: {
        1: '0x0eaE2f2e2604e4a9043658077E23e2f422FECdB0',
        42: '0x9f6694E300Bf3443571217A1c5821dfD5116Deac',
        42161: '0x95B6d1848A9940a42F22054084c0590A9997C653',
        421611: '0xC5c2B3c594f0ebF567f633EaDA18067Bc56C68de',
    },
    [constants_1.LENDING_WBTC_MARKET]: {
        42161: '0x9cC9FE98676E2816c1E8E662C8D2586675D5620B',
        421611: '0xa194fEefaF5319B8299BAB82e6093bAAEAEDe0F8',
    },
    [constants_1.LENDING_WETH_MARKET]: {
        42161: '0x0906B1ce2bf970a253Fcdacc4B8cFC0b3fC25Da2',
        421611: '0xd6ca0d38fEB17a46bD818a64A0e40B62A1283E41',
    },
    [constants_1.LENDING_LINK_MARKET]: {
        42161: '0x85d23342648C2f50c805c2a3157E384337047dCa',
        421611: '0xA01bb7EB819654375d593Ab44f78861730012a07',
    },
    [constants_1.LENDING_WBTC_PRICE]: {
        42161: '0xE7Eb1B64e8517F8dDe874eC83c338d6a83710863',
        421611: '0xD1d36CF498faBB545c96d9c597e509D06A41698C',
    },
    [constants_1.LENDING_WETH_PRICE]: {
        42161: '0xfDc0d2f3e27D56d6237e0298e39b4024aDC11A4D',
        421611: '0xD6E636bDc51Ce5196379a14bB56E6c9a515A877B',
    },
    [constants_1.LENDING_LINK_PRICE]: {
        42161: '0xb2c78279ADfcF93D7D219375C43f9713f971bb85',
        421611: '0xc2C6BFd23CcfBc1139889e861Da93370E330A8bf',
    },
    [constants_1.LENDING_X_AAVE_A_MARKET]: {
        1: '0x652cC6Ed5b308A8D92f85D4707d84785D66F437D',
    },
    [constants_1.LENDING_X_AAVE_B_MARKET]: {
        1: '0xf0cB06e260AeE7b9d75F2950E1dc83e94e89fCbD',
    },
    [constants_1.LENDING_X_INCH_A_MARKET]: {
        1: '0x5191F60315DA4E1F8e4dF3825801576B71Ac22db',
        42: '0xdFF514B717ab222285dCb824aA084f18fC4b0Daf',
        421611: '0x0906B1ce2bf970a253Fcdacc4B8cFC0b3fC25Da2',
    },
    [constants_1.LENDING_X_INCH_B_MARKET]: {
        1: '0x1C6b58C03880F952c91c3628AEc63a48A8422b70',
    },
    [constants_1.LENDING_X_KNC_A_MARKET]: {
        1: '0x56F9261EcA26d055A2ca5aa5a6D25A8648C96801',
    },
    [constants_1.LENDING_X_KNC_B_MARKET]: {
        1: '0xbC0D79a2697271f793d082aBED8de5E248c5228B',
    },
    [constants_1.LENDING_X_AAVE_A_PRICE]: {
        1: '0x3B5EEDDD55df0136F6D659769Ffdcc0Ab9d9c126',
    },
    [constants_1.LENDING_X_AAVE_B_PRICE]: {
        1: '0x70498006Fd06F5A8653A342A90AB9678B7acFc63',
    },
    [constants_1.LENDING_X_INCH_A_PRICE]: {
        1: '0x8D35b8f4Ee0437EEe49CeA0Dc82F9ba82d52e578',
        42: '0xE7Df748Cf7b90e24dDc56f0a76D2Bc95062f1f16',
        421611: '0xfDc0d2f3e27D56d6237e0298e39b4024aDC11A4D',
    },
    [constants_1.LENDING_X_INCH_B_PRICE]: {
        1: '0xf51e131D4C69dBAFdF1857e61EC170d52951eb37',
    },
    [constants_1.LENDING_X_KNC_A_PRICE]: {
        1: '0xE7BfdaF72D7E9E3EE9cb7F07C8287c659e0466DE',
    },
    [constants_1.LENDING_X_KNC_B_PRICE]: {
        1: '0x769c382124Bd87c78D4316e3dDB77E925c008487',
    },
    // NFT
    [constants_1.ARBITRUM_NFT_CORE]: {
        421611: '0x977f369f8845782Bce218331A0bc68D98aFe835b',
    },
    [constants_1.L2_NFT]: {
        421611: '0x7b986856d629B41D6C90F9476455280d3887edf5',
    },
    [constants_1.GM]: {
        421611: '0x305eaDf935F06962F3A520ED75Df904d342333D5',
    },
    [constants_1.GA]: {
        421611: '0xA4caaaa28B06e170625bB0813809317Fe1389EBE',
    },
    [constants_1.GN]: {
        421611: '0xe7E4a51d27C95896a278aD3b44FAe90630f73352',
    },
    [constants_1.WAGMI]: {
        421611: '0xe1dA2CeCAF176a52000B1a2e9ADdCBFE4314c936',
    },
    // xAssetLev
    [constants_1.X_ASSET_LEV]: {
        421611: '0x4C29fA9bE2390f7025CbE257973506c74fb1df07',
    },
    [constants_1.X_ASSET_LEV_2X]: {
        421611: '0x08Ef522cDD3b250A2fB519a4c62b8E27702EFd8e',
    },
    [constants_1.X_ASSET_LEV_3X]: {
        421611: '0xd7F81EBE8B7B81Ed2A77D3E43bD197967e0a9a10',
    },
    [constants_1.LIQUIDITY_POOL]: {
        421611: '0x9FfD84E656F5CECff1E9Ca77c7eF23C9EB5c3Ea0',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkZHJlc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0F1R29CO0FBRXBCLDREQUE0RDtBQUMvQyxRQUFBLFNBQVMsR0FNbEI7SUFDRixDQUFDLG1CQUFPLENBQUMsRUFBRTtRQUNULENBQUMsRUFBRSw0Q0FBNEM7UUFDL0MsQ0FBQyxFQUFFLDRDQUE0QztLQUNoRDtJQUNELENBQUMsbUJBQU8sQ0FBQyxFQUFFO1FBQ1QsQ0FBQyxFQUFFLDRDQUE0QztRQUMvQyxDQUFDLEVBQUUsNENBQTRDO0tBQ2hEO0lBQ0QsQ0FBQyw4QkFBa0IsQ0FBQyxFQUFFO1FBQ3BCLENBQUMsRUFBRSw0Q0FBNEM7S0FDaEQ7SUFDRCxDQUFDLGdDQUFvQixDQUFDLEVBQUU7UUFDdEIsQ0FBQyxFQUFFLDRDQUE0QztLQUNoRDtJQUNELENBQUMsZ0NBQW9CLENBQUMsRUFBRTtRQUN0QixDQUFDLEVBQUUsNENBQTRDO0tBQ2hEO0lBQ0QsQ0FBQyxtQkFBTyxDQUFDLEVBQUU7UUFDVCxDQUFDLEVBQUUsNENBQTRDO1FBQy9DLEVBQUUsRUFBRSw0Q0FBNEM7S0FDakQ7SUFDRCxDQUFDLHVCQUFXLENBQUMsRUFBRTtRQUNiLENBQUMsRUFBRSw0Q0FBNEM7S0FDaEQ7SUFDRCxDQUFDLGdDQUFvQixDQUFDLEVBQUU7UUFDdEIsQ0FBQyxFQUFFLDRDQUE0QztLQUNoRDtJQUNELENBQUMsNEJBQWdCLENBQUMsRUFBRTtRQUNsQixDQUFDLEVBQUUsNENBQTRDO1FBQy9DLEVBQUUsRUFBRSw0Q0FBNEM7S0FDakQ7SUFDRCxDQUFDLGVBQUcsQ0FBQyxFQUFFO1FBQ0wsQ0FBQyxFQUFFLDRDQUE0QztRQUMvQyxDQUFDLEVBQUUsNENBQTRDO0tBQ2hEO0lBQ0QsQ0FBQyxlQUFHLENBQUMsRUFBRTtRQUNMLENBQUMsRUFBRSw0Q0FBNEM7UUFDL0MsRUFBRSxFQUFFLDRDQUE0QztLQUNq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