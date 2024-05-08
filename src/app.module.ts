import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { KeypairsModule } from './modules/keypairs/keypairs.module';
import { MnemonicModule } from './modules/mnemonic/mnemonic.module';
import { TopupModule } from './modules/topup/topup.module';
import { MintModule } from './modules/mint/mint.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    KeypairsModule,
    AuthModule,
    WalletModule,
    KeypairsModule,
    MnemonicModule,
    TopupModule,
    MintModule,
  ],
})
export class AppModule {}
