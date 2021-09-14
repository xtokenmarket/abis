import AaveGovernanceV2 from './AaveGovernanceV2.json';
import AddressResolver from './AddressResolver.json';
import BalancerPool from './BalancerPool.json';
import BalancerV2Vault from './BalancerV2Vault.json';
import BancorContractRegistry from './BancorContractRegistry.json';
import BancorNetwork from './BancorNetwork.json';
import BancorSmartToken from './BancorSmartToken.json';
import DMMPool from './DMMPool.json';
import ERC20 from './ERC20.json';
import ExchangeRates from './ExchangeRates.json';
import InchLiquidityProtocol from './InchLiquidityProtocol.json';
import KyberGovernance from './KyberGovernance.json';
import KyberProxy from './KyberProxy.json';
import MerkleClaim from './MerkleClaim.json';
import ProxyAdmin from './ProxyAdmin.json';
import RevenueController from './RevenueController.json';
import RewardController from './RewardController.json';
import Synthetix from './Synthetix.json';
import TradeAccounting from './TradeAccounting.json';
import UniswapLibrary from './UniswapLibrary.json';
import UniswapV2Pair from './UniswapV2Pair.json';
import UniswapV3Pool from './UniswapV3Pool.json';
import XTKManagementStakingModule from './XTKManagementStakingModule.json';
import xAAVE from './xAAVE.json';
import xAssetCLR from './xAssetCLR.json';
import xBNT from './xBNT.json';
import xINCH from './xINCH.json';
import xKNC from './xKNC.json';
import xSNX from './xSNX.json';
import xSNXAdmin from './xSNXAdmin.json';
import xTokenManager from './xTokenManager.json';
import xU3LP from './xU3LP.json';
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
    xAssetCLR,
    xBNT,
    xINCH,
    xKNC,
    xSNX,
    xSNXAdmin,
    xTokenManager,
    xU3LP,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWJpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZ0JBQWdCLE1BQU0seUJBQXlCLENBQUE7QUFDdEQsT0FBTyxlQUFlLE1BQU0sd0JBQXdCLENBQUE7QUFDcEQsT0FBTyxZQUFZLE1BQU0scUJBQXFCLENBQUE7QUFDOUMsT0FBTyxlQUFlLE1BQU0sd0JBQXdCLENBQUE7QUFDcEQsT0FBTyxzQkFBc0IsTUFBTSwrQkFBK0IsQ0FBQTtBQUNsRSxPQUFPLGFBQWEsTUFBTSxzQkFBc0IsQ0FBQTtBQUNoRCxPQUFPLGdCQUFnQixNQUFNLHlCQUF5QixDQUFBO0FBQ3RELE9BQU8sT0FBTyxNQUFNLGdCQUFnQixDQUFBO0FBQ3BDLE9BQU8sS0FBSyxNQUFNLGNBQWMsQ0FBQTtBQUNoQyxPQUFPLGFBQWEsTUFBTSxzQkFBc0IsQ0FBQTtBQUNoRCxPQUFPLHFCQUFxQixNQUFNLDhCQUE4QixDQUFBO0FBQ2hFLE9BQU8sZUFBZSxNQUFNLHdCQUF3QixDQUFBO0FBQ3BELE9BQU8sVUFBVSxNQUFNLG1CQUFtQixDQUFBO0FBQzFDLE9BQU8sV0FBVyxNQUFNLG9CQUFvQixDQUFBO0FBQzVDLE9BQU8sVUFBVSxNQUFNLG1CQUFtQixDQUFBO0FBQzFDLE9BQU8saUJBQWlCLE1BQU0sMEJBQTBCLENBQUE7QUFDeEQsT0FBTyxnQkFBZ0IsTUFBTSx5QkFBeUIsQ0FBQTtBQUN0RCxPQUFPLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQTtBQUN4QyxPQUFPLGVBQWUsTUFBTSx3QkFBd0IsQ0FBQTtBQUNwRCxPQUFPLGNBQWMsTUFBTSx1QkFBdUIsQ0FBQTtBQUNsRCxPQUFPLGFBQWEsTUFBTSxzQkFBc0IsQ0FBQTtBQUNoRCxPQUFPLGFBQWEsTUFBTSxzQkFBc0IsQ0FBQTtBQUNoRCxPQUFPLDBCQUEwQixNQUFNLG1DQUFtQyxDQUFBO0FBQzFFLE9BQU8sS0FBSyxNQUFNLGNBQWMsQ0FBQTtBQUNoQyxPQUFPLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQTtBQUN4QyxPQUFPLElBQUksTUFBTSxhQUFhLENBQUE7QUFDOUIsT0FBTyxLQUFLLE1BQU0sY0FBYyxDQUFBO0FBQ2hDLE9BQU8sSUFBSSxNQUFNLGFBQWEsQ0FBQTtBQUM5QixPQUFPLElBQUksTUFBTSxhQUFhLENBQUE7QUFDOUIsT0FBTyxTQUFTLE1BQU0sa0JBQWtCLENBQUE7QUFDeEMsT0FBTyxhQUFhLE1BQU0sc0JBQXNCLENBQUE7QUFDaEQsT0FBTyxLQUFLLE1BQU0sY0FBYyxDQUFBO0FBRWhDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRztJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLEtBQUs7SUFDTCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLEtBQUs7SUFDTCxTQUFTO0lBQ1QsSUFBSTtJQUNKLEtBQUs7SUFDTCxJQUFJO0lBQ0osSUFBSTtJQUNKLFNBQVM7SUFDVCxhQUFhO0lBQ2IsS0FBSztDQUNOLENBQUEifQ==