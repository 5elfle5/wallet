export class UserDto {
  readonly email: string;
  readonly password: string;
  readonly publicKey?: string;
  // TODO: add hashing for this like password
  readonly privateKey?: string;
}
