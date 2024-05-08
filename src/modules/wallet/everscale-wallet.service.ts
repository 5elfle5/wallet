import { WalletService } from './wallet-service.interface';
import { runSmartContract } from 'src/core/functions/run-smart-contract.function';
import { ZERO_ADDRESS } from 'src/core/constants/addresses';
import { EVERSCALE_ROOT_ACCOUNT, EVERSCALE_ROOT_KEYS } from 'src/core/constants/everscale-root-account';
import { delay } from 'src/core/functions/delay.function';

const DEPLOY_GRAMS = 200_000_000;

export class EverscaleWalletService implements WalletService {
  async deployUserWalletWithTokens(publicKey: string): Promise<boolean>
  {
    // await runSmartContract(
    //   EVERSCALE_ROOT_KEYS,
    //   EVERSCALE_ROOT_ACCOUNT,
    //   "deployWallet", 
    //   {
    //     rcpSrvc: false,
    //     rcpOwnerPK: `0x${publicKey}`,
    //     rcpOwnerAddr: ZERO_ADDRESS,
    //     gasDonate: DEPLOY_GRAMS,
    //   }
    // );
    await delay(15);
    return true;
  }
}
