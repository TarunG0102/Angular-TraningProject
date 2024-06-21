import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { MypipPipe } from '../../Pipe/mypip.pipe';
import { FormsModule } from '@angular/forms';
import { reportUnhandledError } from 'rxjs/internal/util/reportUnhandledError';
@Component({
  selector: 'app-pipes-example',
  standalone: true,
  imports: [FormsModule,MypipPipe,CurrencyPipe,DatePipe,JsonPipe,PercentPipe,LowerCasePipe,UpperCasePipe,TitleCasePipe],
  templateUrl: './pipes-example.component.html',
  styleUrl: './pipes-example.component.css'
})
export class PipesExampleComponent {
  price: number = 12345.6789;
  currentDate: Date = new Date();
  myString: string = 'This is a STRING in Mixed CASE';
  Ischecked = false;
  myObject: any = 
  {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };

  myNumber: number = 0.23;
  arrObj:any[]=[
      {fname:"Sachin",lname:"Tendulkar"},
      {fname:"Rahul",lname:"Dravid"}
    ]

    arrObj1:any[]=[
      {fname:"Sachin",lname:"Tendulkar"},
      {fname:"Rahul",lname:"Dravid"}
    ]
    }

