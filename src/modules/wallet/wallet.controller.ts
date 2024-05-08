import { Body, Controller, Post, Query } from '@nestjs/common';
import { EVERSCALE, SOLANA } from 'src/core/constants/strings';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { EverscaleWalletService } from './everscale-wallet.service';
import { SolanaWalletService } from './solana-wallet.service';
import { WalletService } from './wallet-service.interface';

@Controller('wallet')
export class WalletController {
  private walletServices: Record<string, WalletService>;
  constructor(
  ) {
    this.walletServices = {
      [EVERSCALE]: new EverscaleWalletService(),
      [SOLANA]: new SolanaWalletService(),
    };
  }

  @Post()
  create(@Query() query: any, @Body() createWalletDto: CreateWalletDto): Promise<boolean> {
    const { publicKey } = createWalletDto;
    if (!(query.coinName in this.walletServices)) {
      return Promise.resolve(false);
    }
    return this.walletServices[query.coinName].deployUserWalletWithTokens(publicKey);
  }
}
