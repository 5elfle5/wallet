import { TonClient } from "@eversdk/core";

export const TON_CLIENT = new TonClient({ network: { endpoints: ['main.ton.dev'] } });
