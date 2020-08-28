import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id:number,
    public description : string,
    public done: boolean,
    public targetDate:Date
  ) 
  {

  }
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos =[
    new Todo(1,'Trash / Kitchen', false,new Date()),
    new Todo(2,'House Cleaning', false,new Date()),
    new Todo(3,'Toilet Cleaning', false,new Date())
    
    // {id:1, tasks:"Trash/Kitchen"},
    // {id:2, tasks:"House Cleaning"},
    // {id:3, tasks:"Toilet Cleaning"}

  ]
  // todo = {
  //   id:1,
  //   tasks:"Trash/Kitchen"
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
