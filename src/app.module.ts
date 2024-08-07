import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersRepository } from './users/users.repository';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { TodoRepository } from './todo/todo.repository';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'todo',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersRepository,
    TodoRepository,
    UsersModule,
    TodoModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
