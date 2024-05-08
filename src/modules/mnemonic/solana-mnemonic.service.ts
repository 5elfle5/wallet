import { Keypair } from '@solana/web3.js';
import { SOLANA } from 'src/core/constants/strings';
import { MnemonicDto } from './dto/mnemonic.dto';
import { MnemonicGenerationService } from './mnemonic-service.interface';
import * as bip39 from 'bip39';
import * as ecc from 'tiny-secp256k1';
import { BIP32Factory } from 'bip32';

export class SolanaMnemonicSerivice implements MnemonicGenerationService {
  async generateMnemonic(): Promise<MnemonicDto> {
    const derivePath = "m/501'/0'/0";
    const mnemonic = bip39.generateMnemonic();

    const seed = await bip39.mnemonicToSeed(mnemonic);
    const bip32 = BIP32Factory(ecc);
    const derivedSeed = bip32.fromSeed(seed).derivePath(derivePath).privateKey;
    const keypair = Keypair.fromSeed(derivedSeed);
    return {
      publicKey: keypair.publicKey.toBase58(),
      privateKey: keypair.secretKey.toString(),
      mnemonic: mnemonic,
      tokenName: SOLANA,
    };
  }
}
