import { MnemonicDto } from "./dto/mnemonic.dto";

export interface MnemonicGenerationService {
  generateMnemonic(): Promise<MnemonicDto>;
}