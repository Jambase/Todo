import { Todo } from './../../service/todo.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newItem:string;
  toDoitems=[];
  progressItems=[];

  constructor(public navCtrl: NavController,private todo:Todo) {

  }


  addNewtask(){
    if (this.newItem!==''){
      this.todo.addNewToDo(this.newItem);
      // this.toDoitems.push(this.newItem);
      this.newItem='';
      this.getAllToDoItems()
      console.log(this.toDoitems)
    }
  }

  getAllToDoItems(){
    this.toDoitems=this.todo.getAllToDoItems();
  }
  addToprogress(index:number){
    this.todo.addToProgress(index)


  }
 
}
