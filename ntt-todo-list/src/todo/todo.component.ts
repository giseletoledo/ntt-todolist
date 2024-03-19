import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from '../app/Todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    if (!this.newTodo) return;

    const newTodo = new Todo(
      new Date().getTime(),
      this.newTodo,
      false,
      new Date()
    );

    this.todos = [...this.todos, newTodo];
    this.todoService.addTodo(newTodo);
    this.newTodo = '';
  }

  done(id: number) {
    this.todoService.done(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todos = this.todos.filter(t => t.id !== id);
  }

}
