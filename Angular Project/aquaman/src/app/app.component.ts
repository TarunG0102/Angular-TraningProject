import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'Ramu';
  people:string[] = ["Ramu"," Shayamu", " Kalu", " Chapalu JAIPUR"]
  peoples:any =[
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 }
  ]
  newname:string=""
  newname_id:string=""
  newname_name:string=""
  newname_age:string=""

  remove(n1:number):void{
    this.people.splice(n1,1)
  }
  Add():void{
    this.people.push(this.newname)
  }
  sortAscending(): void {
    this.people.sort((a, b) => a.localeCompare(b));
  }
    sortDescending(): void {
      this.people.sort((a, b) => b.localeCompare(a));
    }



}

