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
constructor(private missionService:MissionService){}
addmission():void{
this.newmission = this.missionService.addmission(this.newmission)
}

}
