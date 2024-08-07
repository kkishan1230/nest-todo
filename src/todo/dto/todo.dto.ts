import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  taskName: string;

  @IsString()
  @IsOptional()
  dueDate: string;

  @IsEnum(['due', 'completed'], { message: 'Enter valid task status' })
  @IsOptional()
  taskStatus: string;
}

export class TaskToUpdateDto extends PartialType(CreateTaskDto) {}
