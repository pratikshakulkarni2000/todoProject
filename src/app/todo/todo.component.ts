import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from './models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
    private _snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('todoItem') todoItem !: ElementRef
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

editId !: string
onEdit(todo: Itodo){
  this.todoItem.nativeElement.value = todo.todoItem
  this.editId = todo.todoId

  this.isInEditMode = true
}

onUpdate(){
  let updatedObj: Itodo ={
    todoItem : this.todoItem.nativeElement.value,
    todoId : this.editId
  }
  
  let getIndex = this.todoArr.findIndex(f => f.todoId === this.editId)

  this.todoArr[getIndex] = updatedObj
  this.todoItem.nativeElement.value = ''
  this.isInEditMode =false

  this._snackBar.open(`The TodoItem Updated Successfully !!!`, 'Close', {
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
    duration: 3000
  })
}

}
