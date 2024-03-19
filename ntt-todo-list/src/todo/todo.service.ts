import { Injectable } from '@angular/core';
import { Todo } from '../app/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    todo.id = new Date().getTime();
    this.todos.push(todo);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
