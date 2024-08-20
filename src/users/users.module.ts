import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], /* aca estoy registrando la entidad User */
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
