export interface TopupService {
  topup(receiverAddress: string, coinsAmount: number): Promise<boolean>;
}