import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { KeyPairsService } from './key-pairs.service';
import { KeyPairController } from './keypair.controller';
import { keyPairsProviders } from './keypairs.providers';

@Module({
  imports: [UsersModule],
  providers: [KeyPairsService, ...keyPairsProviders],
  exports: [KeyPairsService],
  controllers: [KeyPairController],
})
export class KeypairsModule {}
