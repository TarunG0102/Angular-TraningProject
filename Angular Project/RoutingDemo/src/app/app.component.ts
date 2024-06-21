import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,JsonPipe,ReactiveFormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RoutingDemo';

  myForm: FormGroup= new FormGroup({
    name: new FormControl('Sachin'),
    email: new FormControl(''),
    message: new FormControl('')
  });


  onSubmit1(form: FormGroup) {
  console.log('Valid?', form.valid); // true or false
  console.log('Name', form.value.name);
  console.log('Email', form.value.email);
  console.log('Message', form.value.message);
}


  constructor (private router: Router ){}
  GoServicer(){
    this.router.navigateByUrl('/About')
  }
  countryList:country[] = [
    new country("1", "Pakistan"),
    new country('2', 'UAE'),
    new country('3', 'USA')
  ];
  onSubmit(contactForm : any) {
    console.log(contactForm.value);
  }}

  export class country {
    id:string;
    name:string;
   
    constructor(id:string, name:string) {
      this.id=id;
      this.name=name;
    }
  }
