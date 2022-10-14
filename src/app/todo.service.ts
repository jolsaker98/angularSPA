import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = "http://localhost:8080/todos";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]>{
    console.log("Test1");
    return this.http.get<Todo[]>(`${this.baseUrl}`)
  }

  save(todo: Todo) {
    return this.http.post(`${this.baseUrl}`, todo);
  }

  deleteTodo(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
