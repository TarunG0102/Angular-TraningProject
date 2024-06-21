import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../Services/mission.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-spiderman',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './spiderman.component.html',
  styleUrl: './spiderman.component.css'
})
export class SpidermanComponent implements OnInit {
  mission:any;
constructor(private missionService:MissionService){
}
removemission(n:number){
  this.missionService.removemission(n)}


ngOnInit(): void {
// this.mission = this.missionService.getmission()
this.missionService.missionObervable.subscribe((data)=>{
  this.mission = data;
})

}

}
