import { Body, Controller, Post, Query } from "@nestjs/common";
import { EVERSCALE } from "src/core/constants/strings";
import { MintToWalletDto } from "./dto/mint-to-wallet.dto";
import { EverscaleMintService } from "./everscale-mint.service";
import { MintService } from "./mint.service.interface";

@Controller('mint')
export class MintController {
  private mintServices: Record<string, MintService>;
  constructor(
  ) {
    this.mintServices = {
      [EVERSCALE]: new EverscaleMintService(),
    };
  }

  @Post()
  create(@Query() query: any, @Body() createWalletDto: MintToWalletDto): Promise<boolean> {
    const { receiverPublicKey, tokensAmount } = createWalletDto;
    if (!(query.coinName in this.mintServices)  || isNaN(+tokensAmount)) {
      return Promise.resolve(false);
    }
    return this.mintServices[query.coinName].mint(receiverPublicKey, +tokensAmount);
  }
}
