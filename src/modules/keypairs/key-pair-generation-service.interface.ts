import { KeyPairDto } from "./dto/key-pair.dto";

export interface KeyPairGenerationService {
  generateKeyPair(ownerId: number): Promise<KeyPairDto>;
}