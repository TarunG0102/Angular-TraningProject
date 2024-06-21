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
  mission: any | undefined;
  constructor(private missionService: MissionService) {
  }
  removemission(nid: string) {
    this.missionService.removemission(nid).subscribe((data: any) => {
      this.missionService.getmission().subscribe((data: any) => {
        this.mission = data
      })
    })
  }


  getMission() {
    this.missionService.getmission().subscribe((data: any) => {
      this.mission = data;
    })
  }
  ngOnInit(): void {
    this.getMission()
    this.missionService.getDateChange().subscribe((data: any) =>
      this.getMission())
  }



}
