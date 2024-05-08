import { Table, Column, HasMany, Model, DataType } from 'sequelize-typescript';
import { KeyPair } from '../keypairs/key-pair.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @HasMany(() => KeyPair)
  keyPairs: KeyPair[];
}