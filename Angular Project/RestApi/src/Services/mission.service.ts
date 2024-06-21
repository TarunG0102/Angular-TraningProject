import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private url ="http://localhost:3000/mission"
  constructor( private missionsClient:HttpClient) { }

misssionadded = new Subject<any>();


  getmission(){
    return this.missionsClient.get(this.url)
  }
  
 removemission(m:string){
  return this.missionsClient.delete(this.url+"/"+m)
 }

 addmission(m:any){
  return this.missionsClient.post(this.url,m).pipe(
    map(x=>this.misssionadded.next(x))
  )
 }
 getDateChange():any{
  return this.misssionadded.asObservable()
 }
//  addmission(m:any){
//   console.log(m)
//   var dataadd= this.missionsClient.post(this.url,m).subscribe(()=>this.misssionadded.next(""));
//   // this.misssionadded.next(m)
//  }



//  private mission : string[] =['Save Gujrat','Contact Harshit']
//  getmission():string[]{
// return this.mission   /////Using in Spiderman
//  }
// addmission(m:string):void{
//   this.mission.push(m);} //Using in Iron Man

// Using String
/*
private missionSubject = new BehaviorSubject<string[]>(['Save Gujrat','Contact Harshit']);
missionObervable = this.missionSubject.asObservable()

 addmission(m:string):void{
  let newmission = [...this.missionSubject.value,m]
  console.log(newmission)
  this.missionSubject.next(newmission)
 }
 
 removemission(m:number):void{
  let removemission = [...this.missionSubject.value]
  removemission.splice(m,1)
  console.log(removemission)
  this.missionSubject.next(removemission)
 }
  */

// private missionSubject = new BehaviorSubject<any[]>([
//   {id:"1",fname:"Tarun",lname:"Ram"},
//   {id:"2",fname:"Shikhar",lname:"Vilas"},
//   {id:"3",fname:"Ramu",lname:"Vilas"}

// ])
// missionObervable = this.missionSubject.asObservable()
// addmission(m:any[]):void{
//   let newmission = [...this.missionSubject.value,m]
//   console.log(newmission)
//   this.missionSubject.next(newmission)
//  }
 
//  removemission(m:number):void{
//   let removemission = [...this.missionSubject.value]
//   removemission.splice(m,1)
//   console.log(removemission)
//   this.missionSubject.next(removemission)
//  }

 
}
