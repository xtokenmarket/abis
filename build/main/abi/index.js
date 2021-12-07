"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abi = void 0;
const AaveGovernanceV2_json_1 = __importDefault(require("./helpers/AaveGovernanceV2.json"));
const AddressResolver_json_1 = __importDefault(require("./helpers/AddressResolver.json"));
const BalancerPool_json_1 = __importDefault(require("./helpers/BalancerPool.json"));
const BalancerV2Vault_json_1 = __importDefault(require("./helpers/BalancerV2Vault.json"));
const BancorContractRegistry_json_1 = __importDefault(require("./helpers/BancorContractRegistry.json"));
const BancorNetwork_json_1 = __importDefault(require("./helpers/BancorNetwork.json"));
const BancorSmartToken_json_1 = __importDefault(require("./helpers/BancorSmartToken.json"));
const DMMPool_json_1 = __importDefault(require("./helpers/DMMPool.json"));
const ERC20_json_1 = __importDefault(require("./helpers/ERC20.json"));
const ExchangeRates_json_1 = __importDefault(require("./helpers/ExchangeRates.json"));
const InchLiquidityProtocol_json_1 = __importDefault(require("./helpers/InchLiquidityProtocol.json"));
const KyberGovernance_json_1 = __importDefault(require("./helpers/KyberGovernance.json"));
const KyberProxy_json_1 = __importDefault(require("./helpers/KyberProxy.json"));
const MerkleClaim_json_1 = __importDefault(require("./helpers/MerkleClaim.json"));
const ProxyAdmin_json_1 = __importDefault(require("./helpers/ProxyAdmin.json"));
const Synthetix_json_1 = __importDefault(require("./helpers/Synthetix.json"));
const TradeAccounting_json_1 = __importDefault(require("./helpers/TradeAccounting.json"));
const UniswapLibrary_json_1 = __importDefault(require("./helpers/UniswapLibrary.json"));
const UniswapV2Pair_json_1 = __importDefault(require("./helpers/UniswapV2Pair.json"));
const UniswapV3Pool_json_1 = __importDefault(require("./helpers/UniswapV3Pool.json"));
const xSNXAdmin_json_1 = __importDefault(require("./helpers/xSNXAdmin.json"));
const xTokenManager_json_1 = __importDefault(require("./helpers/xTokenManager.json"));
const Comptroller_json_1 = __importDefault(require("./lending/Comptroller.json"));
const LPT_json_1 = __importDefault(require("./lending/LPT.json"));
const LiquidityPool_json_1 = __importDefault(require("./lending/LiquidityPool.json"));
const Market_json_1 = __importDefault(require("./lending/Market.json"));
const NativePrice_json_1 = __importDefault(require("./lending/NativePrice.json"));
const XAAVEPrice_json_1 = __importDefault(require("./lending/XAAVEPrice.json"));
const XINCHPrice_json_1 = __importDefault(require("./lending/XINCHPrice.json"));
const XKNCPrice_json_1 = __importDefault(require("./lending/XKNCPrice.json"));
const XU3LPPrice_json_1 = __importDefault(require("./lending/XU3LPPrice.json"));
const ArbitrumNFTCore_json_1 = __importDefault(require("./nft/ArbitrumNFTCore.json"));
const GM_json_1 = __importDefault(require("./nft/GM.json"));
const RevenueController_json_1 = __importDefault(require("./staking/RevenueController.json"));
const RewardController_json_1 = __importDefault(require("./staking/RewardController.json"));
const XTKManagementStakingModule_json_1 = __importDefault(require("./staking/XTKManagementStakingModule.json"));
const xAAVE_json_1 = __importDefault(require("./xAssets/xAAVE.json"));
const xALPHA_json_1 = __importDefault(require("./xAssets/xALPHA.json"));
const xAssetCLR_json_1 = __importDefault(require("./xAssets/xAssetCLR.json"));
const xAssetLev_json_1 = __importDefault(require("./xAssets/xAssetLev.json"));
const xBNT_json_1 = __importDefault(require("./xAssets/xBNT.json"));
const xINCH_json_1 = __importDefault(require("./xAssets/xINCH.json"));
const xKNC_json_1 = __importDefault(require("./xAssets/xKNC.json"));
const xSNX_json_1 = __importDefault(require("./xAssets/xSNX.json"));
const xU3LP_json_1 = __importDefault(require("./xAssets/xU3LP.json"));
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
    xALPHA: xALPHA_json_1.default,
    xAssetCLR: xAssetCLR_json_1.default,
    xAssetLev: xAssetLev_json_1.default,
    xBNT: xBNT_json_1.default,
    xINCH: xINCH_json_1.default,
    xKNC: xKNC_json_1.default,
    xSNX: xSNX_json_1.default,
    xSNXAdmin: xSNXAdmin_json_1.default,
    xTokenManager: xTokenManager_json_1.default,
    xU3LP: xU3LP_json_1.default,
    Comptroller: Comptroller_json_1.default,
    LiquidityPool: LiquidityPool_json_1.default,
    LPT: LPT_json_1.default,
    Market: Market_json_1.default,
    NativePrice: NativePrice_json_1.default,
    xAAVEPrice: XAAVEPrice_json_1.default,
    xINCHPrice: XINCHPrice_json_1.default,
    xKNCPrice: XKNCPrice_json_1.default,
    xU3LPPrice: XU3LPPrice_json_1.default,
    ArbitrumNFTCore: ArbitrumNFTCore_json_1.default,
    GM: GM_json_1.default,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWJpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRGQUE4RDtBQUM5RCwwRkFBNEQ7QUFDNUQsb0ZBQXNEO0FBQ3RELDBGQUE0RDtBQUM1RCx3R0FBMEU7QUFDMUUsc0ZBQXdEO0FBQ3hELDRGQUE4RDtBQUM5RCwwRUFBNEM7QUFDNUMsc0VBQXdDO0FBQ3hDLHNGQUF3RDtBQUN4RCxzR0FBd0U7QUFDeEUsMEZBQTREO0FBQzVELGdGQUFrRDtBQUNsRCxrRkFBb0Q7QUFDcEQsZ0ZBQWtEO0FBQ2xELDhFQUFnRDtBQUNoRCwwRkFBNEQ7QUFDNUQsd0ZBQTBEO0FBQzFELHNGQUF3RDtBQUN4RCxzRkFBd0Q7QUFDeEQsOEVBQWdEO0FBQ2hELHNGQUF3RDtBQUN4RCxrRkFBb0Q7QUFDcEQsa0VBQW9DO0FBQ3BDLHNGQUF3RDtBQUN4RCx3RUFBMEM7QUFDMUMsa0ZBQW9EO0FBQ3BELGdGQUFrRDtBQUNsRCxnRkFBa0Q7QUFDbEQsOEVBQWdEO0FBQ2hELGdGQUFrRDtBQUNsRCxzRkFBd0Q7QUFDeEQsNERBQThCO0FBQzlCLDhGQUFnRTtBQUNoRSw0RkFBOEQ7QUFDOUQsZ0hBQWtGO0FBQ2xGLHNFQUF3QztBQUN4Qyx3RUFBMEM7QUFDMUMsOEVBQWdEO0FBQ2hELDhFQUFnRDtBQUNoRCxvRUFBc0M7QUFDdEMsc0VBQXdDO0FBQ3hDLG9FQUFzQztBQUN0QyxvRUFBc0M7QUFDdEMsc0VBQXdDO0FBRTNCLFFBQUEsR0FBRyxHQUFHO0lBQ2pCLGdCQUFnQixFQUFoQiwrQkFBZ0I7SUFDaEIsZUFBZSxFQUFmLDhCQUFlO0lBQ2YsWUFBWSxFQUFaLDJCQUFZO0lBQ1osZUFBZSxFQUFmLDhCQUFlO0lBQ2Ysc0JBQXNCLEVBQXRCLHFDQUFzQjtJQUN0QixhQUFhLEVBQWIsNEJBQWE7SUFDYixnQkFBZ0IsRUFBaEIsK0JBQWdCO0lBQ2hCLE9BQU8sRUFBUCxzQkFBTztJQUNQLEtBQUssRUFBTCxvQkFBSztJQUNMLGFBQWEsRUFBYiw0QkFBYTtJQUNiLHFCQUFxQixFQUFyQixvQ0FBcUI7SUFDckIsZUFBZSxFQUFmLDhCQUFlO0lBQ2YsVUFBVSxFQUFWLHlCQUFVO0lBQ1YsV0FBVyxFQUFYLDBCQUFXO0lBQ1gsVUFBVSxFQUFWLHlCQUFVO0lBQ1YsaUJBQWlCLEVBQWpCLGdDQUFpQjtJQUNqQixnQkFBZ0IsRUFBaEIsK0JBQWdCO0lBQ2hCLFNBQVMsRUFBVCx3QkFBUztJQUNULGVBQWUsRUFBZiw4QkFBZTtJQUNmLGNBQWMsRUFBZCw2QkFBYztJQUNkLGFBQWEsRUFBYiw0QkFBYTtJQUNiLGFBQWEsRUFBYiw0QkFBYTtJQUNiLDBCQUEwQixFQUExQix5Q0FBMEI7SUFDMUIsS0FBSyxFQUFMLG9CQUFLO0lBQ0wsTUFBTSxFQUFOLHFCQUFNO0lBQ04sU0FBUyxFQUFULHdCQUFTO0lBQ1QsU0FBUyxFQUFULHdCQUFTO0lBQ1QsSUFBSSxFQUFKLG1CQUFJO0lBQ0osS0FBSyxFQUFMLG9CQUFLO0lBQ0wsSUFBSSxFQUFKLG1CQUFJO0lBQ0osSUFBSSxFQUFKLG1CQUFJO0lBQ0osU0FBUyxFQUFULHdCQUFTO0lBQ1QsYUFBYSxFQUFiLDRCQUFhO0lBQ2IsS0FBSyxFQUFMLG9CQUFLO0lBQ0wsV0FBVyxFQUFYLDBCQUFXO0lBQ1gsYUFBYSxFQUFiLDRCQUFhO0lBQ2IsR0FBRyxFQUFILGtCQUFHO0lBQ0gsTUFBTSxFQUFOLHFCQUFNO0lBQ04sV0FBVyxFQUFYLDBCQUFXO0lBQ1gsVUFBVSxFQUFWLHlCQUFVO0lBQ1YsVUFBVSxFQUFWLHlCQUFVO0lBQ1YsU0FBUyxFQUFULHdCQUFTO0lBQ1QsVUFBVSxFQUFWLHlCQUFVO0lBQ1YsZUFBZSxFQUFmLDhCQUFlO0lBQ2YsRUFBRSxFQUFGLGlCQUFFO0NBQ0gsQ0FBQSJ9