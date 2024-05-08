export interface MintParamsDto {
  amount: number;
  rcpSrvc: boolean;
  rcpOwnerPK: string;
  rcpOwnerAddr: string;
  gas: number;
}