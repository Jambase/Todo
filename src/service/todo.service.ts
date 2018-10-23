import { Injectable } from "@angular/core";

@Injectable()
export class Todo{

    toDoitems=[];
    progressItems=[];

addNewToDo(newItem:string){
    this.toDoitems.push(newItem);
}

getAllToDoItems():any{
    return this.toDoitems;

}
addToProgress(index:number){
this.progressItems.push(this.toDoitems[index])
// this.removeTaskToDo(index)
console.log(this.progressItems);

}

removeTaskToDo(index:number){
this.toDoitems.splice(index,1);
}
getAllProgress(){
    return this.progressItems
}
}