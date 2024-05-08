import { Injectable, Inject } from '@nestjs/common';
import { KeyPair } from './key-pair.entity';
import { KeyPairDto } from './dto/key-pair.dto';
import { KEYPAIR_REPOSITORY } from 'src/core/constants/strings';

@Injectable()
export class KeyPairsService {

  constructor(@Inject(KEYPAIR_REPOSITORY) private readonly keyPairRepository: typeof KeyPair) { }

  async create(model: KeyPairDto): Promise<KeyPair> {
      return await this.keyPairRepository.create<KeyPair>(model as any as KeyPair);
  }

  async findOne(tokenName: string, publicKey: string): Promise<KeyPair> {
      return await this.keyPairRepository.findOne<KeyPair>({ where: { publicKey, tokenName } });
  }

  async findForUser(tokenName: string, ownerId: number): Promise<KeyPair> {
      return await this.keyPairRepository.findOne<KeyPair>({ where: { ownerId, tokenName } });
  }
}

