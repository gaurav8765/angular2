import { Component , Output , EventEmitter } from '@angular/core';

import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string="";
  description: string = "";
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter<Todo>();
  

  
  onSubmit() {
    const todo ={
      // srn: 8,
      title: this.title,
      desc:this.description,
      // active: true,
  
    }
    
  
    this.todoAdd.emit(todo)  // It allows a component to communicate with its parent component or other components by sending out a custom event along with any relevant data.
 

  }

}
