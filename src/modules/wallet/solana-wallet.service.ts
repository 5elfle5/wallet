import { 
  Connection,
  PublicKey,
  Keypair,
  Transaction,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
} from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { WalletService } from './wallet-service.interface';
import { delay } from '../../core/functions/delay.function';
import { SOLANA_PRIVATE_KEY } from 'src/core/constants/solana-private-key';

export class SolanaWalletService implements WalletService {
  async deployUserWalletWithTokens(publicKey: string): Promise<boolean> {
    let tokensAmount = 100;
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const rootKeypair = Keypair.fromSecretKey(new Uint8Array(SOLANA_PRIVATE_KEY));
    const fromAirdropSignature = await connection.requestAirdrop(
      rootKeypair.publicKey,
      LAMPORTS_PER_SOL,
    );
    await delay(10000);
    await connection.confirmTransaction(fromAirdropSignature);
    await delay(10000);
    const wrappedPublicKey = new PublicKey(publicKey);
    var airdropSignature = await connection.requestAirdrop(
      wrappedPublicKey,
      LAMPORTS_PER_SOL,
    );
    await connection.confirmTransaction(airdropSignature);
    await delay(10000);
    const tokenId = new PublicKey('B8KQTrvRv6cVwQ5mwiM6GLcEPzBtLWLbaGrJ2mc273bT');
    const token = new Token(connection, tokenId, TOKEN_PROGRAM_ID, rootKeypair);
    const rootTokenAccount = await token.getOrCreateAssociatedAccountInfo(
      rootKeypair.publicKey,
    );
    await delay(10000);
    await token.mintTo(
      rootTokenAccount.address,
      rootKeypair.publicKey,
      [],
      tokensAmount,
    );
    await delay(10000);
    const destinationTokenAccount = await token.getOrCreateAssociatedAccountInfo(
      wrappedPublicKey,
    );
    await delay(10000);
    const transaction = new Transaction().add(
      Token.createTransferInstruction(
        TOKEN_PROGRAM_ID,
        rootTokenAccount.address,
        destinationTokenAccount.address,
        rootKeypair.publicKey,
        [],
        tokensAmount,
      ),
    );
    await delay(10000);
    await sendAndConfirmTransaction(
      connection,
      transaction,
      [rootKeypair],
      {commitment: 'confirmed'},
    );
    return true;
  }
}