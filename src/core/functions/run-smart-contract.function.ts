import { ParamsOfEncodeMessage, signerKeys } from "@eversdk/core";
import { TON_CLIENT } from "../constants/ton-client";
import { EverscaleKeys } from "../models/everscale-keys.model";
import { SmartContractParamsDto } from "../models/smart-contract-params.dto";
import { getBagOfCells } from "./get-bag-of-cells.function";

export const runSmartContract = async (
    keys: EverscaleKeys,
    account: ParamsOfEncodeMessage,
    funcName: string,
    params: SmartContractParamsDto
  ) => {
  const deployMsg = await TON_CLIENT.abi.encode_message(account);
  const address   = deployMsg.address;
  const boc = await getBagOfCells(address);
  const callDetails = {
    abi: account.abi,
    address,
    call_set: {
      function_name: funcName,
      input: params
    },
    signer: signerKeys(keys)
  };
  const encodedMessage = await TON_CLIENT.abi.encode_message(callDetails);
  await TON_CLIENT.tvm.run_executor({
    abi: account.abi,
    message: encodedMessage.message,
    account: {
      type: "Account",
      boc,
    },
    return_updated_account: true,
  });
  return await TON_CLIENT.processing.process_message({
      send_events: false,
      message_encode_params: callDetails,
  });
}

