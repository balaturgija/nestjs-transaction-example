import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    @Inject('SEQUELIZE') private readonly sequelize: Sequelize,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const transaction = await this.sequelize.transaction();
    try {
      const userCreate = await this.usersRepository.create(
        createUserDto,
        transaction,
      );

      await transaction.commit();

      return userCreate;
    } catch (error) {
      await transaction.rollback();
      throw new Error(error);
    }
  }
}
