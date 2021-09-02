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
import TradeAccounting from './helpers/TradeAccounting.json';
import UniswapLibrary from './helpers/UniswapLibrary.json';
import UniswapV2Pair from './helpers/UniswapV2Pair.json';
import UniswapV3Pool from './helpers/UniswapV3Pool.json';
import xSNXAdmin from './helpers/xSNXAdmin.json';
import Synthetix from './helpers/Synthetix.json';
import xTokenManager from './helpers/xTokenManager.json';
// --- Staking ---
import XTKManagementStakingModule from './staking/XTKManagementStakingModule.json';
import RevenueController from './staking/RevenueController.json';
import RewardController from './staking/RewardController.json';
// --- Lending ---
import Comptroller from './lending/Comptroller.json';
import LiquidityPool from './lending/LiquidityPool.json';
import LPT from './lending/LPT.json';
import Market from './lending/Market.json';
import xAAVEPrice from './lending/XAAVEPrice.json';
import xINCHPrice from './lending/XINCHPrice.json';
import xKNCPrice from './lending/XKNCPrice.json';
import xU3LPPrice from './lending/XU3LPPrice.json';
// --- xAssets ---
import xAAVE from './xAssets/xAAVE.json';
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
    xAAVEPrice,
    xINCHPrice,
    xKNCPrice,
    xU3LPPrice
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWJpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZ0JBQWdCLE1BQU0saUNBQWlDLENBQUE7QUFDOUQsT0FBTyxlQUFlLE1BQU0sZ0NBQWdDLENBQUE7QUFDNUQsT0FBTyxZQUFZLE1BQU0sNkJBQTZCLENBQUE7QUFDdEQsT0FBTyxlQUFlLE1BQU0sZ0NBQWdDLENBQUE7QUFDNUQsT0FBTyxzQkFBc0IsTUFBTSx1Q0FBdUMsQ0FBQTtBQUMxRSxPQUFPLGFBQWEsTUFBTSw4QkFBOEIsQ0FBQTtBQUN4RCxPQUFPLGdCQUFnQixNQUFNLGlDQUFpQyxDQUFBO0FBQzlELE9BQU8sT0FBTyxNQUFNLHdCQUF3QixDQUFBO0FBQzVDLE9BQU8sS0FBSyxNQUFNLHNCQUFzQixDQUFBO0FBQ3hDLE9BQU8sYUFBYSxNQUFNLDhCQUE4QixDQUFBO0FBQ3hELE9BQU8scUJBQXFCLE1BQU0sc0NBQXNDLENBQUE7QUFDeEUsT0FBTyxlQUFlLE1BQU0sZ0NBQWdDLENBQUE7QUFDNUQsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUE7QUFDbEQsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUE7QUFDcEQsT0FBTyxVQUFVLE1BQU0sMkJBQTJCLENBQUE7QUFDbEQsT0FBTyxlQUFlLE1BQU0sZ0NBQWdDLENBQUE7QUFDNUQsT0FBTyxjQUFjLE1BQU0sK0JBQStCLENBQUE7QUFDMUQsT0FBTyxhQUFhLE1BQU0sOEJBQThCLENBQUE7QUFDeEQsT0FBTyxhQUFhLE1BQU0sOEJBQThCLENBQUE7QUFDeEQsT0FBTyxTQUFTLE1BQU0sMEJBQTBCLENBQUE7QUFDaEQsT0FBTyxTQUFTLE1BQU0sMEJBQTBCLENBQUE7QUFDaEQsT0FBTyxhQUFhLE1BQU0sOEJBQThCLENBQUE7QUFFeEQsa0JBQWtCO0FBRWxCLE9BQU8sMEJBQTBCLE1BQU0sMkNBQTJDLENBQUE7QUFDbEYsT0FBTyxpQkFBaUIsTUFBTSxrQ0FBa0MsQ0FBQTtBQUNoRSxPQUFPLGdCQUFnQixNQUFNLGlDQUFpQyxDQUFBO0FBRTlELGtCQUFrQjtBQUVsQixPQUFPLFdBQVcsTUFBTSw0QkFBNEIsQ0FBQTtBQUNwRCxPQUFPLGFBQWEsTUFBTSw4QkFBOEIsQ0FBQTtBQUN4RCxPQUFPLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQTtBQUNwQyxPQUFPLE1BQU0sTUFBTSx1QkFBdUIsQ0FBQTtBQUMxQyxPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQTtBQUNsRCxPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQTtBQUNsRCxPQUFPLFNBQVMsTUFBTSwwQkFBMEIsQ0FBQTtBQUNoRCxPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQTtBQUVsRCxrQkFBa0I7QUFFbEIsT0FBTyxLQUFLLE1BQU0sc0JBQXNCLENBQUE7QUFDeEMsT0FBTyxJQUFJLE1BQU0scUJBQXFCLENBQUE7QUFDdEMsT0FBTyxLQUFLLE1BQU0sc0JBQXNCLENBQUE7QUFDeEMsT0FBTyxJQUFJLE1BQU0scUJBQXFCLENBQUE7QUFDdEMsT0FBTyxJQUFJLE1BQU0scUJBQXFCLENBQUE7QUFDdEMsT0FBTyxLQUFLLE1BQU0sc0JBQXNCLENBQUE7QUFFeEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsS0FBSztJQUNMLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsS0FBSztJQUNMLElBQUk7SUFDSixLQUFLO0lBQ0wsSUFBSTtJQUNKLElBQUk7SUFDSixTQUFTO0lBQ1QsYUFBYTtJQUNiLEtBQUs7SUFDTCxXQUFXO0lBQ1gsYUFBYTtJQUNiLEdBQUc7SUFDSCxNQUFNO0lBQ04sVUFBVTtJQUNWLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtDQUNYLENBQUEifQ==