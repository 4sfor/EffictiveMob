import { Model } from 'sequelize';
import { PrimaryKey, Column, DataType, Table, CreatedAt, UpdatedAt } from 'sequelize-typescript';


@Table({timestamps: true})
export class Users extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  uuid: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  surname: string;

  @Column({
    type: DataType.ENUM('М', 'Ж'),
    allowNull: false,
  })
  gender: 'М' | 'Ж';

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  problem: boolean;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  created_at: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  updated_at: Date;
}