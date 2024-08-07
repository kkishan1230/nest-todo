import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { CreateTaskDto, TaskToUpdateDto } from './dto/todo.dto';
import { Repository } from 'typeorm';
import { TaskResponseDto } from './dto/todo-response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async getTaskById(id: string) {
    const task = await this.todoRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return { status: HttpStatus.OK, task };
  }

  async getAllTasks() {
    let allTasks = await this.todoRepository.find();
    allTasks = plainToInstance(TaskResponseDto, allTasks);
    return { status: HttpStatus.OK, allTasks };
  }

  async addTask(todoTaskDetails: CreateTaskDto) {
    const createdData = await this.todoRepository.save(todoTaskDetails);
    return { createdData, status: HttpStatus.CREATED };
  }

  async removeTask(id: string) {
    const taskData = await this.todoRepository.findOneBy({ id });
    if (!taskData) {
      return { status: HttpStatus.NOT_FOUND, message: 'task does not exists' };
    }
    await this.todoRepository.delete({ id });
    return { status: HttpStatus.OK, message: 'Task removed' };
  }

  async updateTask(todoTaskDetails: TaskToUpdateDto, id: string) {
    let { task } = await this.getTaskById(id);

    await this.todoRepository.update(id, { ...task, ...todoTaskDetails });

    return {
      status: HttpStatus.OK,
      message: 'Task updated',
      updatedTask: { ...task, ...todoTaskDetails },
    };
  }
}
