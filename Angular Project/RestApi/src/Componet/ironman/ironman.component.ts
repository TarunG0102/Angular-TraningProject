import { Component } from '@angular/core';
import { MissionService } from '../../Services/mission.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ironman',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ironman.component.html',
  styleUrl: './ironman.component.css'
})
export class IronmanComponent {

newmission:any=''
id = ''
mission = ''
constructor(private missionService:MissionService){}
// addmission():void{
// // this.newmission = this.missionService.addmission(this.newmission)
// this.missionService.addmission({  
//   id = "10",
//   Mission = this.newmission
// })
// }
addmission():void {
  this.missionService.addmission({
    id:"12",
    Mission: this.newmission,
  }).subscribe();
}

}
