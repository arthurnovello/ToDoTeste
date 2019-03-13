import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  todoArray=[];

  addTodo(value){
    this.todoArray.push(value)
    console.log(this.todo)
  }

  deleteItem(todo){
    for(let i=0 ;i<=this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }

  todoSubmit(value:any){
    console.log(value)
  }
}
