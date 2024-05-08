import { signerKeys, abiContract } from '@eversdk/core';
import * as SW from '../contracts/EverWalletContract';
import { EverscaleKeys } from '../models/everscale-keys.model';

export const getEverTopUpAccount = (keys: EverscaleKeys) => {
  return {
    abi: abiContract(SW.EverWalletContract.abi),
    deploy_set: {
      tvc: SW.EverWalletContract.tvc,
      workchain_id: 0,
      initial_data: {
        _version: 1
      }
    },
    call_set:{
      function_name: "constructor",
      input: {}
    },
    signer: signerKeys(keys),
  };        
}
