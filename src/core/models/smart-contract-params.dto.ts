import { DeployParamsDto } from "./deploy-params.dto";
import { MintParamsDto } from "./mint-params.dto";
import { SendParams } from "./send-params.dto";

export type SmartContractParamsDto = MintParamsDto | DeployParamsDto | SendParams;