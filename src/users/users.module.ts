import { Module } from '@nestjs/common';

import { AbilitiesModule } from '~modules/abilities';

import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [AbilitiesModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
