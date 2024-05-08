export interface WalletService {
  deployUserWalletWithTokens(publicKey: string): Promise<boolean>;
}
