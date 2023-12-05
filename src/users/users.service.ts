import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

import { CreateUserDto } from './dto';
import { UsersRepository } from './users.repository';

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
