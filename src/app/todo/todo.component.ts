import { Component, OnInit } from '@angular/core';
import { Itodo } from './models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isInEditMode : boolean = false

   todoArr : Array<Itodo> = [
  {
    todoItem: 'Learn JavaScript',
    todoId: 'T001'
  },
  {
    todoItem: 'Practice TypeScript',
    todoId: 'T002'
  },
  {
    todoItem: 'Build Angular Project',
    todoId: 'T003'
  },
  {
    todoItem: 'Revise HTML & CSS',
    todoId: 'T004'
  },
  {
    todoItem: 'Work on API Integration',
    todoId: 'T005'
  },
  {
    todoItem: 'Debug Application',
    todoId: 'T006'
  }
];


}
