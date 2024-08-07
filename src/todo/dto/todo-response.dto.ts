import { Exclude, Expose } from 'class-transformer';

export class TaskResponseDto {
  id: string;

  taskName: string;

  dueDate: string;

  taskStatus: string;
}
