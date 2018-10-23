import { Component } from '@angular/core';
import { Todo } from '../../service/todo.service';

/**
 * Generated class for the DoingListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'doing-list',
  templateUrl: 'doing-list.html'
})
export class DoingListComponent {

  text: string;
  progressItems=[]

  constructor(private todo:Todo){
  
    this.progressItems = this.todo.getAllProgress();
   
   }
  
  

  
}
