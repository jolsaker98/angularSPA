import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { TodoService} from '../../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  id!: string;
  todo: Todo = new Todo;
  description: any;
  summary: any;


  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

  reloadPage() {
    window.location.reload();
  }

  onSubmit() {
    this.todoService.save(this.todo).subscribe(result => this.todos);
  }

  removeRow(id: string) {
    console.log(id);
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(
        (t: Todo) => t.id !== id
      );
    });
  }
}
