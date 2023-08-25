import { Component } from '@angular/core';
import { Todo} from "../../Todo"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[]
  constructor() {
    this.todos =[
     

    ]
  }
  ngOnInit() : void{

  }
  deleteTodo(todoToDelete:Todo){
   

    this.todos = this.todos.filter(todo => todo !== todoToDelete)
    
  }
  
  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
  




}
