import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AbilitiesModule } from '~modules/abilities';
import { DatabaseModule } from '~modules/database';
import { UsersModule } from '~modules/users';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    AbilitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
