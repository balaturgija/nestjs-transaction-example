import { DataTypes } from 'sequelize';
import {
  AllowNull,
  Column,
  Default,
  HasOne,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { v4 } from 'uuid';

import { UserEntity } from '~modules/users';

@Table({
  tableName: 'abilities',
  underscored: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  paranoid: true,
})
export class AbilityEntity extends Model<AbilityEntity> {
  @PrimaryKey
  @IsUUID(4)
  @AllowNull(false)
  @Default(() => v4())
  @Column({ type: DataTypes.UUID })
  id: string;

  @AllowNull(false)
  @Column({ type: DataTypes.TEXT })
  name: string;

  /* Associations */
  @HasOne(() => UserEntity)
  user: UserEntity;
}
