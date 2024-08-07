import { TodoRepository } from 'src/todo/todo.repository';
import { TodoService } from 'src/todo/todo.service';

export class isSameTaskExists {
  constructor(private todoRepository: TodoRepository) {}
}
