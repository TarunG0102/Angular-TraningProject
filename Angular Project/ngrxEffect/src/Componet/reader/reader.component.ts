import { Component, OnInit } from '@angular/core';
import { Person } from '../../app/models/Person.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { kartSelector } from '../../app/store/kart/kart.selector';
import { Task } from '../../app/models/Task.model';
import { taskReducer } from '../../app/store/task/task.reduce';
import { taskSelector } from '../../app/store/task/task.selector';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css'
})
export class ReaderComponent implements OnInit {
  kart: Person[] | undefined;
  Task: Task[] | undefined;
  kartObservable: Observable<Person[]> | undefined
  TaskObservable: Observable<Task[]> | undefined

  removekart(){

  }

  constructor(private store: Store) { }
  ngOnInit(): void {
    this.kartObservable = this.store.pipe(select(kartSelector));
    this.kartObservable.subscribe((data) => this.kart = data);
    // this.TaskObservable = this.store.pipe(select(taskSelector));
    // this.TaskObservable.subscribe((data)=> this.Task=data);
  }

}
