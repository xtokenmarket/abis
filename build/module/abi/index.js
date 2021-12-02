import AaveGovernanceV2 from './helpers/AaveGovernanceV2.json';
import AddressResolver from './helpers/AddressResolver.json';
import BalancerPool from './helpers/BalancerPool.json';
import BalancerV2Vault from './helpers/BalancerV2Vault.json';
import BancorContractRegistry from './helpers/BancorContractRegistry.json';
import BancorNetwork from './helpers/BancorNetwork.json';
import BancorSmartToken from './helpers/BancorSmartToken.json';
import DMMPool from './helpers/DMMPool.json';
import ERC20 from './helpers/ERC20.json';
import ExchangeRates from './helpers/ExchangeRates.json';
import InchLiquidityProtocol from './helpers/InchLiquidityProtocol.json';
import KyberGovernance from './helpers/KyberGovernance.json';
import KyberProxy from './helpers/KyberProxy.json';
import MerkleClaim from './helpers/MerkleClaim.json';
import ProxyAdmin from './helpers/ProxyAdmin.json';
import Synthetix from './helpers/Synthetix.json';
import TradeAccounting from './helpers/TradeAccounting.json';
import UniswapLibrary from './helpers/UniswapLibrary.json';
import UniswapV2Pair from './helpers/UniswapV2Pair.json';
import UniswapV3Pool from './helpers/UniswapV3Pool.json';
import xSNXAdmin from './helpers/xSNXAdmin.json';
import xTokenManager from './helpers/xTokenManager.json';
import Comptroller from './lending/Comptroller.json';
import LPT from './lending/LPT.json';
import LiquidityPool from './lending/LiquidityPool.json';
import Market from './lending/Market.json';
import NativePrice from './lending/NativePrice.json';
import xAAVEPrice from './lending/XAAVEPrice.json';
import xINCHPrice from './lending/XINCHPrice.json';
import xKNCPrice from './lending/XKNCPrice.json';
import xU3LPPrice from './lending/XU3LPPrice.json';
import ArbitrumNFTCore from './nft/ArbitrumNFTCore.json';
import GM from './nft/GM.json';
import L2_NFT from './nft/L2NFT.json';
import liquidityPool from './nft/LiquidityPool.json';
import xAssetLev from './nft/xAssetLev.json';
import xAssetLev2x from './nft/xAssetLev2x.json';
import xAssetLev3x from './nft/xAssetLev3x.json';
import RevenueController from './staking/RevenueController.json';
import RewardController from './staking/RewardController.json';
import XTKManagementStakingModule from './staking/XTKManagementStakingModule.json';
import xAAVE from './xAssets/xAAVE.json';
import xALPHA from './xAssets/xALPHA.json';
import xAssetCLR from './xAssets/xAssetCLR.json';
import xBNT from './xAssets/xBNT.json';
import xINCH from './xAssets/xINCH.json';
import xKNC from './xAssets/xKNC.json';
import xSNX from './xAssets/xSNX.json';
import xU3LP from './xAssets/xU3LP.json';
export const Abi = {
    AaveGovernanceV2,
    AddressResolver,
    BalancerPool,
    BalancerV2Vault,
    BancorContractRegistry,
    BancorNetwork,
    BancorSmartToken,
    DMMPool,
    ERC20,
    ExchangeRates,
    InchLiquidityProtocol,
    KyberGovernance,
    KyberProxy,
    MerkleClaim,
    ProxyAdmin,
    RevenueController,
    RewardController,
    Synthetix,
    TradeAccounting,
    UniswapLibrary,
    UniswapV2Pair,
    UniswapV3Pool,
    XTKManagementStakingModule,
    xAAVE,
    xALPHA,
    xAssetCLR,
    xBNT,
    xINCH,
    xKNC,
    xSNX,
    xSNXAdmin,
    xTokenManager,
    xU3LP,
    Comptroller,
    LiquidityPool,
    LPT,
    Market,
    NativePrice,
    xAAVEPrice,
    xINCHPrice,
    xKNCPrice,
    xU3LPPrice,
    liquidityPool,
    ArbitrumNFTCore,
    L2_NFT,
    GM,
    xAssetLev,
    xAssetLev2x,
    xAssetLev3x,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWJpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZ0JBQWdCLE1BQU0saUNBQWlDLENBQUE7QUFDOUQsT0FBTyxlQUFlLE1BQU0sZ0NBQWdDLENBQUE7QUFDNUQsT0FBTyxZQUFZLE1BQU0sNkJBQTZCLENBQUE7QUFDdEQsT0FBTyxlQUFlLE1BQU0sZ0NBQWdDLENBQUE7QUFDNUQsT0FBTyxzQkFBc0IsTUFBTSx1Q0FBdUMsQ0FBQTtBQUMxRSxPQUFPLGFBQWEsTUFBTSw4QkFBOEIsQ0FBQTtBQUN4RCxPQUFPLGdCQUFnQixNQUFNLGlDQUFpQyxDQUFBO0FBQzlELE9BQU8sT0FBTyxNQUFNLHdCQUF3QixDQUFBO0FBQzVDLE9BQU8sS0FBSyxNQUFNLHNCQUFzQixDQUFBO0FBQ3hDLE9BQU8sYUFBYSxNQUFNLDhCQUE4QixDQUFBO0FBQ3hELE9BQU8scUJBQXFCLE1BQU0sc0NBQXNDLENBQUE7QUFDeEUsT0FBTyxlQUFlLE1BQU0sZ0NBQWdDLENBQUE7QUFDNUQsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUE7QUFDbEQsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUE7QUFDcEQsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUE7QUFDbEQsT0FBTyxTQUFTLE1BQU0sMEJBQTBCLENBQUE7QUFDaEQsT0FBTyxlQUFlLE1BQU0sZ0NBQWdDLENBQUE7QUFDNUQsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUE7QUFDMUQsT0FBTyxhQUFhLE1BQU0sOEJBQThCLENBQUE7QUFDeEQsT0FBTyxhQUFhLE1BQU0sOEJBQThCLENBQUE7QUFDeEQsT0FBTyxTQUFTLE1BQU0sMEJBQTBCLENBQUE7QUFDaEQsT0FBTyxhQUFhLE1BQU0sOEJBQThCLENBQUE7QUFDeEQsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUE7QUFDcEQsT0FBTyxHQUFHLE1BQU0sb0JBQW9CLENBQUE7QUFDcEMsT0FBTyxhQUFhLE1BQU0sOEJBQThCLENBQUE7QUFDeEQsT0FBTyxNQUFNLE1BQU0sdUJBQXVCLENBQUE7QUFDMUMsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUE7QUFDcEQsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUE7QUFDbEQsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUE7QUFDbEQsT0FBTyxTQUFTLE1BQU0sMEJBQTBCLENBQUE7QUFDaEQsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUE7QUFDbEQsT0FBTyxlQUFlLE1BQU0sNEJBQTRCLENBQUE7QUFDeEQsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzlCLE9BQU8sTUFBTSxNQUFNLGtCQUFrQixDQUFBO0FBQ3JDLE9BQU8sYUFBYSxNQUFNLDBCQUEwQixDQUFBO0FBQ3BELE9BQU8sU0FBUyxNQUFNLHNCQUFzQixDQUFBO0FBQzVDLE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFBO0FBQ2hELE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFBO0FBQ2hELE9BQU8saUJBQWlCLE1BQU0sa0NBQWtDLENBQUE7QUFDaEUsT0FBTyxnQkFBZ0IsTUFBTSxpQ0FBaUMsQ0FBQTtBQUM5RCxPQUFPLDBCQUEwQixNQUFNLDJDQUEyQyxDQUFBO0FBQ2xGLE9BQU8sS0FBSyxNQUFNLHNCQUFzQixDQUFBO0FBQ3hDLE9BQU8sTUFBTSxNQUFNLHVCQUF1QixDQUFBO0FBQzFDLE9BQU8sU0FBUyxNQUFNLDBCQUEwQixDQUFBO0FBQ2hELE9BQU8sSUFBSSxNQUFNLHFCQUFxQixDQUFBO0FBQ3RDLE9BQU8sS0FBSyxNQUFNLHNCQUFzQixDQUFBO0FBQ3hDLE9BQU8sSUFBSSxNQUFNLHFCQUFxQixDQUFBO0FBQ3RDLE9BQU8sSUFBSSxNQUFNLHFCQUFxQixDQUFBO0FBQ3RDLE9BQU8sS0FBSyxNQUFNLHNCQUFzQixDQUFBO0FBRXhDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRztJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLEtBQUs7SUFDTCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLEtBQUs7SUFDTCxNQUFNO0lBQ04sU0FBUztJQUNULElBQUk7SUFDSixLQUFLO0lBQ0wsSUFBSTtJQUNKLElBQUk7SUFDSixTQUFTO0lBQ1QsYUFBYTtJQUNiLEtBQUs7SUFDTCxXQUFXO0lBQ1gsYUFBYTtJQUNiLEdBQUc7SUFDSCxNQUFNO0lBQ04sV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLE1BQU07SUFDTixFQUFFO0lBQ0YsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0NBQ1osQ0FBQSJ9