"use strict";
/**
 * @packageDocumentation
 * @module XToken Constants
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.X_SNX_A_BALANCER_POOL_V2 = exports.X_SNX_A_BALANCER_POOL = exports.X_KNC_B_UNISWAP_POOL = exports.X_KNC_A_UNISWAP_POOL = exports.X_KNC_A_KYBER_POOL = exports.X_INCH_B_INCH_POOL = exports.X_INCH_A_INCH_POOL = exports.X_BNT_A_BANCOR_POOL = exports.X_AAVE_B_BALANCER_POOL = exports.X_AAVE_A_BALANCER_POOL = exports.XTOKEN_MANAGER = exports.X_SNX_ADMIN = exports.UNISWAP_V2_PAIR = exports.UNISWAP_LIBRARY = exports.TRADE_ACCOUNTING = exports.SYNTHETIX_ADDRESS_RESOLVER = exports.REWARD_CONTROLLER = exports.REVENUE_CONTROLLER = exports.PROXY_ADMIN = exports.KYBER_PROXY = exports.KYBER_GOVERNANCE = exports.INCH_LIQUIDITY_PROTOCOL = exports.FEE_POOL = exports.EXCHANGE_RATES = exports.ETH_RSI_60_40 = exports.ETH_BNT_ANCHOR = exports.DMM_FACTORY = exports.BANCOR_CONTRACT_REGISTRY = exports.BALANCER_V2_VAULT = exports.AAVE_GOVERNANCE_V2 = exports.LINK = exports.XTK = exports.WETH = exports.WBTC = exports.UST = exports.USDT = exports.USDC = exports.S_USD = exports.S_ETH = exports.SNX = exports.REN_BTC = exports.KNC = exports.INCH = exports.FRAX = exports.ETH = exports.DAI = exports.BUSD = exports.BNT = exports.ALPHA = exports.AAVE = void 0;
exports.LENDING_X_AAVE_B_PRICE = exports.LENDING_X_AAVE_A_PRICE = exports.LENDING_X_KNC_B_MARKET = exports.LENDING_X_KNC_A_MARKET = exports.LENDING_X_INCH_B_MARKET = exports.LENDING_X_INCH_A_MARKET = exports.LENDING_X_AAVE_B_MARKET = exports.LENDING_X_AAVE_A_MARKET = exports.LENDING_LINK_PRICE = exports.LENDING_WETH_PRICE = exports.LENDING_WBTC_PRICE = exports.LENDING_LINK_MARKET = exports.LENDING_WETH_MARKET = exports.LENDING_WBTC_MARKET = exports.LENDING_LPT_STAKING = exports.LENDING_LPT = exports.LENDING_LIQUIDITY_POOL = exports.LENDING_COMPTROLLER = exports.X_U3LP_H = exports.X_U3LP_G = exports.X_U3LP_F = exports.X_U3LP_E = exports.X_U3LP_D = exports.X_U3LP_C = exports.X_U3LP_B = exports.X_U3LP_A = exports.X_SNX_A = exports.X_KNC_B = exports.X_KNC_A = exports.X_INCH_B = exports.X_INCH_A = exports.X_BNT_A = exports.X_ALPHA_A = exports.X_AAVE_B = exports.X_AAVE_A = exports.X_ETH_3X = exports.X_BTC_3X = exports.XTK_ETH_CLR = exports.X_SNX_A_SNX_CLR = exports.X_KNC_B_KNC_CLR = exports.X_KNC_A_KNC_CLR = exports.X_ALPHA_A_ALPHA_CLR = exports.X_AAVE_B_AAVE_CLR = exports.INCH_X_INCH_B_CLR = exports.INCH_X_INCH_A_CLR = exports.BNT_X_BNT_A_CLR = exports.AAVE_X_AAVE_A_CLR = exports.XTK_MANAGEMENT_STAKING_MODULE = exports.X_SNX_A_MERKLE_CLAIM = exports.X_BNT_A_MERKLE_CLAIM = void 0;
exports.WAGMI = exports.GN = exports.GA = exports.GM = exports.L2_NFT = exports.ARBITRUM_NFT_CORE = exports.WITHDRAW = exports.SUPPLY = exports.REPAY = exports.BORROW = exports.SELL = exports.BUY = exports.LENDING_X_KNC_B_PRICE = exports.LENDING_X_KNC_A_PRICE = exports.LENDING_X_INCH_B_PRICE = exports.LENDING_X_INCH_A_PRICE = void 0;
// ERC20 Tokens
exports.AAVE = 'aave';
exports.ALPHA = 'alpha';
exports.BNT = 'bnt';
exports.BUSD = 'busd';
exports.DAI = 'dai';
exports.ETH = 'eth';
exports.FRAX = 'frax';
exports.INCH = 'inch';
exports.KNC = 'knc';
exports.REN_BTC = 'renBTC';
exports.SNX = 'snx';
exports.S_ETH = 'sETH';
exports.S_USD = 'sUSD';
exports.USDC = 'usdc';
exports.USDT = 'usdt';
exports.UST = 'ust';
exports.WBTC = 'wbtc';
exports.WETH = 'weth';
exports.XTK = 'xtk';
exports.LINK = 'link';
// Helper Contracts
exports.AAVE_GOVERNANCE_V2 = 'aaveGovernanceV2';
exports.BALANCER_V2_VAULT = 'balancerV2Vault';
exports.BANCOR_CONTRACT_REGISTRY = 'bancorContractRegistry';
exports.DMM_FACTORY = 'dmmFactory';
exports.ETH_BNT_ANCHOR = 'ethBntAnchor';
exports.ETH_RSI_60_40 = 'ethrsi6040';
exports.EXCHANGE_RATES = 'exchangeRates';
exports.FEE_POOL = 'feePool';
exports.INCH_LIQUIDITY_PROTOCOL = '1InchLiquidityProtocol';
exports.KYBER_GOVERNANCE = 'kyberGovernance';
exports.KYBER_PROXY = 'kyberProxy';
exports.PROXY_ADMIN = 'proxyAdmin';
exports.REVENUE_CONTROLLER = 'revenueController';
exports.REWARD_CONTROLLER = 'rewardController';
exports.SYNTHETIX_ADDRESS_RESOLVER = 'synthetixAddressResolver';
exports.TRADE_ACCOUNTING = 'tradeAccounting';
exports.UNISWAP_LIBRARY = 'uniswapLibrary';
exports.UNISWAP_V2_PAIR = 'uniswapV2Pair';
exports.X_SNX_ADMIN = 'xSNXAdmin';
exports.XTOKEN_MANAGER = 'xTokenManager';
// Liquidity Pools
exports.X_AAVE_A_BALANCER_POOL = 'xaaveaBalancerPool';
exports.X_AAVE_B_BALANCER_POOL = 'xaavebBalancerPool';
exports.X_BNT_A_BANCOR_POOL = 'xbntaBancorPool';
exports.X_INCH_A_INCH_POOL = 'xinchaInchPool';
exports.X_INCH_B_INCH_POOL = 'xinchbInchPool';
exports.X_KNC_A_KYBER_POOL = 'xkncaKyberPool';
exports.X_KNC_A_UNISWAP_POOL = 'xkncaUniswapPool';
exports.X_KNC_B_UNISWAP_POOL = 'xkncbUniswapPool';
exports.X_SNX_A_BALANCER_POOL = 'xsnxaBalancerPool';
exports.X_SNX_A_BALANCER_POOL_V2 = 'xsnxaBalancerPoolV2';
// Merkle Claim
exports.X_BNT_A_MERKLE_CLAIM = 'xBNTaMerkleClaim';
exports.X_SNX_A_MERKLE_CLAIM = 'xSNXaMerkleClaim';
// Staking
exports.XTK_MANAGEMENT_STAKING_MODULE = 'xtkManagementStakingModule';
// xAssetCLR
exports.AAVE_X_AAVE_A_CLR = 'AAVE-xAAVEa-CLR';
exports.BNT_X_BNT_A_CLR = 'BNT-xBNTa-CLR';
exports.INCH_X_INCH_A_CLR = '1INCH-xINCHa-CLR';
exports.INCH_X_INCH_B_CLR = '1INCH-xINCHb-CLR';
exports.X_AAVE_B_AAVE_CLR = 'xAAVEb-AAVE-CLR';
exports.X_ALPHA_A_ALPHA_CLR = 'xALPHAa-ALPHA-CLR';
exports.X_KNC_A_KNC_CLR = 'xKNCa-KNC-CLR';
exports.X_KNC_B_KNC_CLR = 'xKNCb-KNC-CLR';
exports.X_SNX_A_SNX_CLR = 'xSNXa-SNX-CLR';
exports.XTK_ETH_CLR = 'XTK-ETH-CLR';
// xAssetLev
exports.X_BTC_3X = 'xBTC3x';
exports.X_ETH_3X = 'xETH3x';
// export const X_LINK_3X = 'xLINK3x'
// xAssets
exports.X_AAVE_A = 'xAAVEa';
exports.X_AAVE_B = 'xAAVEb';
exports.X_ALPHA_A = 'xALPHAa';
exports.X_BNT_A = 'xBNTa';
exports.X_INCH_A = 'xINCHa';
exports.X_INCH_B = 'xINCHb';
exports.X_KNC_A = 'xKNCa';
exports.X_KNC_B = 'xKNCb';
exports.X_SNX_A = 'xSNXa';
// xU3LP
exports.X_U3LP_A = 'xU3LPa';
exports.X_U3LP_B = 'xU3LPb';
exports.X_U3LP_C = 'xU3LPc';
exports.X_U3LP_D = 'xU3LPd';
exports.X_U3LP_E = 'xU3LPe';
exports.X_U3LP_F = 'xU3LPf';
exports.X_U3LP_G = 'xU3LPg';
exports.X_U3LP_H = 'xU3LPh';
exports.LENDING_COMPTROLLER = 'Comptroller';
exports.LENDING_LIQUIDITY_POOL = 'LiquidityPool';
exports.LENDING_LPT = 'LPT';
exports.LENDING_LPT_STAKING = 'LPTStaking';
exports.LENDING_WBTC_MARKET = 'wbtcMarket';
exports.LENDING_WETH_MARKET = 'wethMarket';
exports.LENDING_LINK_MARKET = 'linkMarket';
exports.LENDING_WBTC_PRICE = 'wbtcPrice';
exports.LENDING_WETH_PRICE = 'wethPrice';
exports.LENDING_LINK_PRICE = 'linkPrice';
exports.LENDING_X_AAVE_A_MARKET = 'xAAVEaMarket';
exports.LENDING_X_AAVE_B_MARKET = 'xAAVEbMarket';
exports.LENDING_X_INCH_A_MARKET = 'xINCHaMarket';
exports.LENDING_X_INCH_B_MARKET = 'xINCHbMarket';
exports.LENDING_X_KNC_A_MARKET = 'xKNCaMarket';
exports.LENDING_X_KNC_B_MARKET = 'xKNCbMarket';
exports.LENDING_X_AAVE_A_PRICE = 'xAAVEaPrice';
exports.LENDING_X_AAVE_B_PRICE = 'xAAVEbPrice';
exports.LENDING_X_INCH_A_PRICE = 'xINCHaPrice';
exports.LENDING_X_INCH_B_PRICE = 'xINCHbPrice';
exports.LENDING_X_KNC_A_PRICE = 'xKNCaPrice';
exports.LENDING_X_KNC_B_PRICE = 'xKNCbPrice';
// Trade types
exports.BUY = 'buy';
exports.SELL = 'sell';
// Lending types
exports.BORROW = 'borrow';
exports.REPAY = 'repay';
exports.SUPPLY = 'supply';
exports.WITHDRAW = 'withdraw';
// NFT
exports.ARBITRUM_NFT_CORE = 'ArbitrumNFTCore';
exports.L2_NFT = 'L2NFT';
exports.GM = 'GM';
exports.GA = 'GA';
exports.GN = 'GN';
exports.WAGMI = 'WAGMI';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztHQUdHOzs7OztBQUVILGVBQWU7QUFDRixRQUFBLElBQUksR0FBRyxNQUFNLENBQUE7QUFDYixRQUFBLEtBQUssR0FBRyxPQUFPLENBQUE7QUFDZixRQUFBLEdBQUcsR0FBRyxLQUFLLENBQUE7QUFDWCxRQUFBLElBQUksR0FBRyxNQUFNLENBQUE7QUFDYixRQUFBLEdBQUcsR0FBRyxLQUFLLENBQUE7QUFDWCxRQUFBLEdBQUcsR0FBRyxLQUFLLENBQUE7QUFDWCxRQUFBLElBQUksR0FBRyxNQUFNLENBQUE7QUFDYixRQUFBLElBQUksR0FBRyxNQUFNLENBQUE7QUFDYixRQUFBLEdBQUcsR0FBRyxLQUFLLENBQUE7QUFDWCxRQUFBLE9BQU8sR0FBRyxRQUFRLENBQUE7QUFDbEIsUUFBQSxHQUFHLEdBQUcsS0FBSyxDQUFBO0FBQ1gsUUFBQSxLQUFLLEdBQUcsTUFBTSxDQUFBO0FBQ2QsUUFBQSxLQUFLLEdBQUcsTUFBTSxDQUFBO0FBQ2QsUUFBQSxJQUFJLEdBQUcsTUFBTSxDQUFBO0FBQ2IsUUFBQSxJQUFJLEdBQUcsTUFBTSxDQUFBO0FBQ2IsUUFBQSxHQUFHLEdBQUcsS0FBSyxDQUFBO0FBQ1gsUUFBQSxJQUFJLEdBQUcsTUFBTSxDQUFBO0FBQ2IsUUFBQSxJQUFJLEdBQUcsTUFBTSxDQUFBO0FBQ2IsUUFBQSxHQUFHLEdBQUcsS0FBSyxDQUFBO0FBQ1gsUUFBQSxJQUFJLEdBQUcsTUFBTSxDQUFBO0FBRTFCLG1CQUFtQjtBQUNOLFFBQUEsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUE7QUFDdkMsUUFBQSxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQTtBQUNyQyxRQUFBLHdCQUF3QixHQUFHLHdCQUF3QixDQUFBO0FBQ25ELFFBQUEsV0FBVyxHQUFHLFlBQVksQ0FBQTtBQUMxQixRQUFBLGNB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