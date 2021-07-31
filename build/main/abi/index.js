"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abi = void 0;
const AaveGovernanceV2_json_1 = __importDefault(require("./AaveGovernanceV2.json"));
const AddressResolver_json_1 = __importDefault(require("./AddressResolver.json"));
const BalancerPool_json_1 = __importDefault(require("./BalancerPool.json"));
const BalancerV2Vault_json_1 = __importDefault(require("./BalancerV2Vault.json"));
const BancorContractRegistry_json_1 = __importDefault(require("./BancorContractRegistry.json"));
const BancorNetwork_json_1 = __importDefault(require("./BancorNetwork.json"));
const BancorSmartToken_json_1 = __importDefault(require("./BancorSmartToken.json"));
const DMMPool_json_1 = __importDefault(require("./DMMPool.json"));
const ERC20_json_1 = __importDefault(require("./ERC20.json"));
const ExchangeRates_json_1 = __importDefault(require("./ExchangeRates.json"));
const InchLiquidityProtocol_json_1 = __importDefault(require("./InchLiquidityProtocol.json"));
const KyberGovernance_json_1 = __importDefault(require("./KyberGovernance.json"));
const KyberProxy_json_1 = __importDefault(require("./KyberProxy.json"));
const MerkleClaim_json_1 = __importDefault(require("./MerkleClaim.json"));
const ProxyAdmin_json_1 = __importDefault(require("./ProxyAdmin.json"));
const RevenueController_json_1 = __importDefault(require("./RevenueController.json"));
const RewardController_json_1 = __importDefault(require("./RewardController.json"));
const Synthetix_json_1 = __importDefault(require("./Synthetix.json"));
const TradeAccounting_json_1 = __importDefault(require("./TradeAccounting.json"));
const UniswapLibrary_json_1 = __importDefault(require("./UniswapLibrary.json"));
const UniswapV2Pair_json_1 = __importDefault(require("./UniswapV2Pair.json"));
const UniswapV3Pool_json_1 = __importDefault(require("./UniswapV3Pool.json"));
const XTKManagementStakingModule_json_1 = __importDefault(require("./XTKManagementStakingModule.json"));
const xAAVE_json_1 = __importDefault(require("./xAAVE.json"));
const xBNT_json_1 = __importDefault(require("./xBNT.json"));
const xINCH_json_1 = __importDefault(require("./xINCH.json"));
const xKNC_json_1 = __importDefault(require("./xKNC.json"));
const xSNX_json_1 = __importDefault(require("./xSNX.json"));
const xSNXAdmin_json_1 = __importDefault(require("./xSNXAdmin.json"));
const xTokenManager_json_1 = __importDefault(require("./xTokenManager.json"));
const xU3LP_json_1 = __importDefault(require("./xU3LP.json"));
exports.Abi = {
    AaveGovernanceV2: AaveGovernanceV2_json_1.default,
    AddressResolver: AddressResolver_json_1.default,
    BalancerPool: BalancerPool_json_1.default,
    BalancerV2Vault: BalancerV2Vault_json_1.default,
    BancorContractRegistry: BancorContractRegistry_json_1.default,
    BancorNetwork: BancorNetwork_json_1.default,
    BancorSmartToken: BancorSmartToken_json_1.default,
    DMMPool: DMMPool_json_1.default,
    ERC20: ERC20_json_1.default,
    ExchangeRates: ExchangeRates_json_1.default,
    InchLiquidityProtocol: InchLiquidityProtocol_json_1.default,
    KyberGovernance: KyberGovernance_json_1.default,
    KyberProxy: KyberProxy_json_1.default,
    MerkleClaim: MerkleClaim_json_1.default,
    ProxyAdmin: ProxyAdmin_json_1.default,
    RevenueController: RevenueController_json_1.default,
    RewardController: RewardController_json_1.default,
    Synthetix: Synthetix_json_1.default,
    TradeAccounting: TradeAccounting_json_1.default,
    UniswapLibrary: UniswapLibrary_json_1.default,
    UniswapV2Pair: UniswapV2Pair_json_1.default,
    UniswapV3Pool: UniswapV3Pool_json_1.default,
    XTKManagementStakingModule: XTKManagementStakingModule_json_1.default,
    xAAVE: xAAVE_json_1.default,
    xBNT: xBNT_json_1.default,
    xINCH: xINCH_json_1.default,
    xKNC: xKNC_json_1.default,
    xSNX: xSNX_json_1.default,
    xSNXAdmin: xSNXAdmin_json_1.default,
    xTokenManager: xTokenManager_json_1.default,
    xU3LP: xU3LP_json_1.default,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWJpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9GQUFzRDtBQUN0RCxrRkFBb0Q7QUFDcEQsNEVBQThDO0FBQzlDLGtGQUFvRDtBQUNwRCxnR0FBa0U7QUFDbEUsOEVBQWdEO0FBQ2hELG9GQUFzRDtBQUN0RCxrRUFBb0M7QUFDcEMsOERBQWdDO0FBQ2hDLDhFQUFnRDtBQUNoRCw4RkFBZ0U7QUFDaEUsa0ZBQW9EO0FBQ3BELHdFQUEwQztBQUMxQywwRUFBNEM7QUFDNUMsd0VBQTBDO0FBQzFDLHNGQUF3RDtBQUN4RCxvRkFBc0Q7QUFDdEQsc0VBQXdDO0FBQ3hDLGtGQUFvRDtBQUNwRCxnRkFBa0Q7QUFDbEQsOEVBQWdEO0FBQ2hELDhFQUFnRDtBQUNoRCx3R0FBMEU7QUFDMUUsOERBQWdDO0FBQ2hDLDREQUE4QjtBQUM5Qiw4REFBZ0M7QUFDaEMsNERBQThCO0FBQzlCLDREQUE4QjtBQUM5QixzRUFBd0M7QUFDeEMsOEVBQWdEO0FBQ2hELDhEQUFnQztBQUVuQixRQUFBLEdBQUcsR0FBRztJQUNqQixnQkFBZ0IsRUFBaEIsK0JBQWdCO0lBQ2hCLGVBQWUsRUFBZiw4QkFBZTtJQUNmLFlBQVksRUFBWiwyQkFBWTtJQUNaLGVBQWUsRUFBZiw4QkFBZTtJQUNmLHNCQUFzQixFQUF0QixxQ0FBc0I7SUFDdEIsYUFBYSxFQUFiLDRCQUFhO0lBQ2IsZ0JBQWdCLEVBQWhCLCtCQUFnQjtJQUNoQixPQUFPLEVBQVAsc0JBQU87SUFDUCxLQUFLLEVBQUwsb0JBQUs7SUFDTCxhQUFhLEVBQWIsNEJBQWE7SUFDYixxQkFBcUIsRUFBckIsb0NBQXFCO0lBQ3JCLGVBQWUsRUFBZiw4QkFBZTtJQUNmLFVBQVUsRUFBVix5QkFBVTtJQUNWLFdBQVcsRUFBWCwwQkFBVztJQUNYLFVBQVUsRUFBVix5QkFBVTtJQUNWLGlCQUFpQixFQUFqQixnQ0FBaUI7SUFDakIsZ0JBQWdCLEVBQWhCLCtCQUFnQjtJQUNoQixTQUFTLEVBQVQsd0JBQVM7SUFDVCxlQUFlLEVBQWYsOEJBQWU7SUFDZixjQUFjLEVBQWQsNkJBQWM7SUFDZCxhQUFhLEVBQWIsNEJBQWE7SUFDYixhQUFhLEVBQWIsNEJBQWE7SUFDYiwwQkFBMEIsRUFBMUIseUNBQTBCO0lBQzFCLEtBQUssRUFBTCxvQkFBSztJQUNMLElBQUksRUFBSixtQkFBSTtJQUNKLEtBQUssRUFBTCxvQkFBSztJQUNMLElBQUksRUFBSixtQkFBSTtJQUNKLElBQUksRUFBSixtQkFBSTtJQUNKLFNBQVMsRUFBVCx3QkFBUztJQUNULGFBQWEsRUFBYiw0QkFBYTtJQUNiLEtBQUssRUFBTCxvQkFBSztDQUNOLENBQUEifQ==