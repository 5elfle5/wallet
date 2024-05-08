import { Body, Controller, Post, Query } from '@nestjs/common';
import { EVERSCALE, SOLANA } from 'src/core/constants/strings';
import { CreateKeyPairDto } from './dto/create-key-pair.dto';
import { KeyPairGenerationService } from './key-pair-generation-service.interface';
import { EverscaleKeyPairService } from './everscale-key-pair.service';
import { KeyPairDto } from './dto/key-pair.dto';
import { KeyPairsService } from './key-pairs.service';
import { SolanaKeyPairSerivice } from './solana-key-pair.service';
import { UsersService } from '../users/users.service';

@Controller('keypair')
export class KeyPairController {
  private keypairServices: Record<string, KeyPairGenerationService>;
  constructor(
    private usersService: UsersService,
    keyPairsService: KeyPairsService,
  ) {
    this.keypairServices = {
      [EVERSCALE]: new EverscaleKeyPairService(keyPairsService),
      [SOLANA]: new SolanaKeyPairSerivice(keyPairsService),
    }
  }

  @Post()
  async create(@Query() query: any, @Body() createKeyPairDto: CreateKeyPairDto): Promise<KeyPairDto> {
    const { userEmail } = createKeyPairDto;
    const user = await this.usersService.findOneByEmail(userEmail);
    if (!(query.coinName in this.keypairServices)) {
      // TODO: return error
      return Promise.resolve(null);
    }
    return await this.keypairServices[query.coinName].generateKeyPair(user.id);
  }
}

