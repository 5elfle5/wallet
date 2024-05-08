import { ZERO_ADDRESS } from "src/core/constants/addresses";
import { EVERSCALE_ROOT_ACCOUNT, EVERSCALE_ROOT_KEYS } from "src/core/constants/everscale-root-account";
import { add9zeros } from "src/core/functions/add-9-zeros.function";
import { runSmartContract } from "src/core/functions/run-smart-contract.function";
import { MintService } from "./mint.service.interface";

export class EverscaleMintService implements MintService {
  async mint(receiverPublicKey: string, tokensAmount: number): Promise<boolean> {
    await runSmartContract(
      EVERSCALE_ROOT_KEYS,
      EVERSCALE_ROOT_ACCOUNT,
      "mint", 
      {
        amount: add9zeros(tokensAmount),
        rcpSrvc: false,
        rcpOwnerPK: `0x${receiverPublicKey}`,
        rcpOwnerAddr: ZERO_ADDRESS,
        gas: 100_000_000
      }
    );
    return true;
  }

}