import { IsEnum } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  taskName: string;

  @Column()
  dueDate: string;

  @Column()
  @IsEnum(['due', 'completed'])
  taskStatus: string;
}
