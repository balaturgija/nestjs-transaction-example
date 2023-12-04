import { Transaction } from 'sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

export class UsersRepository {
  async create(createUserDto: CreateUserDto, transaction?: Transaction) {
    return await UserEntity.create(createUserDto, { transaction });
  }
}
