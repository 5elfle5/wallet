import { Module } from '@nestjs/common';
import { EverscaleMintService } from './everscale-mint.service';
import { MintController } from './mint.controller';

@Module({
  providers: [EverscaleMintService],
  controllers: [MintController],
})
export class MintModule {}
