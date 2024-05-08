import { Body, Controller, Post, Query } from '@nestjs/common';
import { EVERSCALE, SOLANA } from 'src/core/constants/strings';
import { TopupWalletDto } from './dto/topup-wallet.dto';
import { EverscaleTopupService } from './everscale-topup.service';
import { TopupService } from './topup.service.interface';

@Controller('topup')
export class TopupController {
  private topupServices: Record<string, TopupService>;
  constructor(
  ) {
    this.topupServices = {
      [EVERSCALE]: new EverscaleTopupService(),
    };
  }

  @Post()
  create(@Query() query: any, @Body() createWalletDto: TopupWalletDto): Promise<boolean> {
    const { receiverAddress, coinsAmount } = createWalletDto;
    if (!(query.coinName in this.topupServices)) {
      return Promise.resolve(false);
    }
    return this.topupServices[query.coinName].topup(receiverAddress, coinsAmount);
  }
}

