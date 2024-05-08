import { EVERSCALE } from 'src/core/constants/strings';
import { TON_CLIENT } from 'src/core/constants/ton-client';
import { KeyPairDto } from './dto/key-pair.dto';
import { KeyPairGenerationService } from './key-pair-generation-service.interface';
import { KeyPairsService } from './key-pairs.service';

export class EverscaleKeyPairService implements KeyPairGenerationService {
  constructor(
    private keyPairsService: KeyPairsService,
  ) { }

  async generateKeyPair(ownerId: number): Promise<KeyPairDto> {
    const keys = await TON_CLIENT.crypto.generate_random_sign_keys();
    const dto = {
      publicKey: keys.public,
      privateKey: keys.secret,
      tokenName: EVERSCALE,
      // TODO: create address also
      address: null,
      ownerId,
    };
    const foundKeyPair = await this.keyPairsService.findForUser(EVERSCALE, ownerId);
    if (foundKeyPair) {
      return {
        publicKey: foundKeyPair.publicKey,
        privateKey: foundKeyPair.privateKey,
        tokenName: EVERSCALE,
        address: null,
        ownerId,
      };
    }
    await this.keyPairsService.create(dto);
    return dto;
  }
}