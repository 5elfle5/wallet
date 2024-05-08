import { Keypair } from '@solana/web3.js';
import { SOLANA } from 'src/core/constants/strings';
import { KeyPairDto } from "./dto/key-pair.dto";
import { KeyPairGenerationService } from "./key-pair-generation-service.interface";
import { KeyPairsService } from "./key-pairs.service";

export class SolanaKeyPairSerivice implements KeyPairGenerationService {
  constructor(
    private keyPairsService: KeyPairsService,
  ) { }
  async generateKeyPair(ownerId: number): Promise<KeyPairDto> {
    const keys = Keypair.generate();
    const dto = {
      publicKey: keys.publicKey.toString(),
      privateKey: keys.secretKey.toString(),
      tokenName: SOLANA,
      // TODO: create address also
      address: null,
      ownerId,
    };
    const foundKeyPair = await this.keyPairsService.findForUser(SOLANA, ownerId);
    if (foundKeyPair) {
      return {
        publicKey: foundKeyPair.publicKey,
        privateKey: foundKeyPair.privateKey,
        tokenName: SOLANA,
        address: null,
        ownerId,
      };
    }
    await this.keyPairsService.create(dto);
    return dto;
  }
}