import { Component } from '@angular/core';
import {Todo}from "./todo"
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Crud';
  todoValue:string;
  list:Todo[];
  
  ngOnInit()
  {
    this.list=[];
    this.todoValue="";
  }
  addItem()
  {
    if(this.todoValue !=="")
    {
      const newItem:Todo={
        id:Date.now(),
        value:this.todoValue,
        isDone:false
      };
      this.list.push(newItem);
    }
    this.todoValue="";
  }
  deleteItem(id: number)
  {
    console.log('hello');
    this.list=this.list.filter(item => item.id !==id);
  }
}
