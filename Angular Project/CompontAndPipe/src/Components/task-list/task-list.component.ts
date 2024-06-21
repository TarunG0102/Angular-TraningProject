import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { AddtaskComponent } from '../addtask/addtask.component';
import { PipesExampleComponent } from '../pipes-example/pipes-example.component';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent,AddtaskComponent,PipesExampleComponent],
  templateUrl: './task-list.component.html',
  // styleUrl: 
})
export class TaskListComponent {
  tasks: any[] = [
    {
      id: 1,
      desc: 'come to office',
      priority: 2,
      status: 'completed',
    },
    {
      id: 2,
      desc: 'study angular',
      priority: 1,
      status: 'in_progress',
    },
    {
      id: 3,
      desc: 'go home',
      priority: 3,
      status: 'pending',
    },

  ];
  RemoveByID(tid: number): void {
    console.log("Your ID is :- " + tid)
    this.tasks = this.tasks.filter((a) => a.id != tid)
  }
  
  AddArry(adddpura: any):void{
this.tasks.push(adddpura)
  }

  OnFilter(Status:any):void{
    this.tasks = this.tasks.filter((a)=> a.status === Status)
  }
}
