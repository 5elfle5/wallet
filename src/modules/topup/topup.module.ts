import { Module } from '@nestjs/common';
import { EverscaleTopupService } from './everscale-topup.service';
import { TopupController } from './topup.controller';

@Module({
  providers: [EverscaleTopupService],
  controllers: [TopupController]
})
export class TopupModule {}
