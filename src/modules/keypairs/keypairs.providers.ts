import { KEYPAIR_REPOSITORY } from 'src/core/constants/strings';
import { KeyPair } from './key-pair.entity';

export const keyPairsProviders = [{
    provide: KEYPAIR_REPOSITORY,
    useValue: KeyPair,
}];
