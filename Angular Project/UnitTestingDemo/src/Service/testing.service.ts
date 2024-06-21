import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor() { }

  showData(){
    console.log("Showing the Data")
  }
  
  AddData(){
    console.log("Adding the Data")
  }
}
