import { Component, EventEmitter, Input , Output} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todo: Todo = new Todo() // The @Input() decorator simplifies the process of passing data from parent to child components,
  @Output() onDelete: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor()  { }

  onClick(todo:Todo) {
    this.onDelete.emit(todo)
    console.log("onclick has been trigered")
  }

}


