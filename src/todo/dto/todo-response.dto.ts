import { Exclude, Expose } from 'class-transformer';
import { Todo } from '../todo.entity';

export class TaskResponseDto {
  constructor(partial: Partial<Todo>) {
    Object.assign(this, partial);
  }

  @Exclude()
  id: number;

  @Expose({ name: 'Task_Name' })
  taskName: string;

  @Expose()
  dueDate: string;

  @Expose()
  taskStatus: string;
}
