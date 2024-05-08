import { Controller, Post, Query } from '@nestjs/common';
import { SOLANA } from 'src/core/constants/strings';
import { MnemonicDto } from './dto/mnemonic.dto';
import { MnemonicGenerationService } from './mnemonic-service.interface';
import { SolanaMnemonicSerivice } from './solana-mnemonic.service';

@Controller('mnemonic')
export class MnemonicController {
  private mnemonicServices: Record<string, MnemonicGenerationService>;
  constructor() {
    this.mnemonicServices = {
      [SOLANA]: new SolanaMnemonicSerivice(),
    }
  }

  @Post()
  async create(@Query() query: any): Promise<MnemonicDto> {
    if (!(query.coinName in this.mnemonicServices)) {
      // TODO: return error
      return Promise.resolve(null);
    }
    return await this.mnemonicServices[query.coinName].generateMnemonic();
  }
}


