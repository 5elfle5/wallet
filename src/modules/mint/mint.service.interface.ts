export interface MintService {
  mint(receiverPublicKey: string, tokensAmount: number): Promise<boolean>;
}
