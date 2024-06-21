import { Component } from '@angular/core';
import { TaskComponent } from '../Components/task/task.component';
import { TaskListComponent } from '../Components/task-list/task-list.component';
import { AddtaskComponent } from '../Components/addtask/addtask.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent,AddtaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'l14june2024';
}
