import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todos';
  todos = [
    {
      label: 'Do not forget to pray', 
      done: false, 
      priority: 1
    },
    {
      label: 'Bring Note Book', 
      done: true, 
      priority: 3
    },
    {
      label: 'Attend Maths Olympics', 
      done: false, 
      priority: 2
    },
    {
      label: 'Go for break', 
      done: false, 
      priority: 5
    },
  ];
  addTodo(newTodoLabel) {
    var  newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }
}
