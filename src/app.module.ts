import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  /* decorador (transforma algo en otra cosa) en este caso una clase a un modulo */
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Reemplaza con tu usuario de PostgreSQL
      password: '123', // Reemplaza con tu contraseña de PostgreSQL
      database: 'login', // Reemplaza con el nombre de tu base de datos
      entities: [User], // Importa tu entidad
      synchronize: true, // ¡No usar en producción!
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
