import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  // styleUrl: []
})
export class TaskComponent {
  @Input() task :any;
  @Output() hatao = new EventEmitter()
  onRemove(tid:number):void{
this.hatao.emit(tid);
  }
  
}
