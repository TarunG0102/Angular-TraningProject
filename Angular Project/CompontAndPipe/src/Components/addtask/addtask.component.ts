import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { TaskComponent } from '../task/task.component';
@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  // styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Output() AddKaro = new EventEmitter()
@Output() OnFilter = new EventEmitter()
  arr: any =
    { id: '', desc: '', priority: '', status: '' }
  onAdd(arr2: any): void {
    this.AddKaro.emit(arr2);
    this.arr = {}
  }
  Fillter(status:any):void{

    this.OnFilter.emit(status)
  }

}
