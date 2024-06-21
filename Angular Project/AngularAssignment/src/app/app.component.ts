import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAssignment';
  names:any={fname:"Pranay",lname:"Kadam",email:"PranayKadam@gmail.com",tel:7385029889,add:"Balkum, Thane",job:"Dot Net Developer"};

}
