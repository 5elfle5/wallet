import { Table, Column, ForeignKey, BelongsTo, Model, DataType } from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class KeyPair extends Model<KeyPair> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ownerId: Number;

  @BelongsTo(() => User)
  user: User;

  @Column({
    type: DataType.STRING(1024),
    allowNull: false,
  })
  publicKey: string;

  @Column({
    type: DataType.STRING(1024),
    allowNull: false,
  })
  privateKey: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.STRING,
  })
  tokenName: string;
}
