import { Module } from '@nestjs/common';
import { MnemonicController } from './mnemonic.controller';

@Module({
  controllers: [MnemonicController],
})
export class MnemonicModule {}
