import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoRepository } from './todo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), TodoRepository],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {}
