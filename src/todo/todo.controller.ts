import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTaskDto, TaskToUpdateDto } from './dto/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getAllTasks() {
    return this.todoService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.todoService.getTaskById(id);
  }

  @Post()
  addTodo(@Body(ValidationPipe) todoTaskDetails: CreateTaskDto) {
    return this.todoService.addTask(todoTaskDetails);
  }

  @Delete(':id')
  removeTask(@Param('id') id: string) {
    return this.todoService.removeTask(id);
  }

  @Patch(':id')
  updateTask(
    @Body(ValidationPipe) taskDetails: TaskToUpdateDto,
    @Param('id') id: string,
  ) {
    return this.todoService.updateTask(taskDetails, id);
  }
}
