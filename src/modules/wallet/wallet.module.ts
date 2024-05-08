import { Module } from '@nestjs/common';
import { EverscaleWalletService } from './everscale-wallet.service';
import { WalletController } from './wallet.controller';

@Module({
  providers: [EverscaleWalletService],
  controllers: [WalletController]
})
export class WalletModule {}
