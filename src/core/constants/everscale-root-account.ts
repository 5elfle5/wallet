import { abiContract, signerKeys } from "@eversdk/core";
import * as RO from '../contracts/RootOwnerContract';
import { ZERO_ADDRESS } from "./addresses";

const ROOTOWNER_RAND = 1;

export const EVERSCALE_ROOT_KEYS = {
  public: '534a54de85fd834675ff3701837febaf626d6fbbaf76489f4d95b34a27b9ad3e',
  secret: 'ab1b57b6d51d119ce7425ad450f56c412242d9c118bac03c9133b1f744443eef',
};

export const EVERSCALE_ROOT_ACCOUNT = {
  abi: abiContract(RO.RootOwnerContract.abi),
  deploy_set: {
    tvc: RO.RootOwnerContract.tvc,
    workchain_id: 0,
    initial_data: {
      randomNonce_: ROOTOWNER_RAND,
    }
  },
  call_set:{
    function_name: "constructor",
    input: {rt: ZERO_ADDRESS},
  },
  signer: signerKeys(EVERSCALE_ROOT_KEYS),
};
