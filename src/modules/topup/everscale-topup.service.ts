import { TON_CLIENT } from "src/core/constants/ton-client";
import { add9zeros } from "src/core/functions/add-9-zeros.function";
import { getEverTopUpAccount } from "src/core/functions/get-ever-top-up-account.function";
import { runSmartContract } from "src/core/functions/run-smart-contract.function";
import { EverscaleKeys } from "src/core/models/everscale-keys.model";
import { TopupService } from "./topup.service.interface";

export class EverscaleTopupService implements TopupService {

  private get topupAccountKeys(): EverscaleKeys {
    return {
      public: "8098c192cd6504ecaef26b1d82f658ff4f251527928744f8e2ac03b1f579a90e",
      secret: "3158b46db1788c7c87d77c7e2d9607368bec2eefdc991f4f344e6c7b6b673b96",
    };
  }

  async topup(receiverAddress: string, tokensAmount: number): Promise<boolean> {
    let topupAccount = getEverTopUpAccount(this.topupAccountKeys);
    await runSmartContract(
      this.topupAccountKeys,
      topupAccount,
      "send", 
      {   
        rcpt:  receiverAddress, 
        flags: 3,
        amnt:  add9zeros(tokensAmount),
      }
    );
    return true;
  }
}