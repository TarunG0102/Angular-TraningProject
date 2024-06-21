import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppState } from '../../app/store/app.state';
import { Store } from '@ngrx/store';
import { Person } from '../../app/models/Person.model';
import { add } from '../../app/store/kart/kart.actions';

@Component({
  selector: 'app-writer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './writer.component.html',
  styleUrl: './writer.component.css'
})
export class WriterComponent implements OnInit {
id:number=0;
fname=""
lname=""

  constructor(private store: Store) { }

  AddToKart(): void {
    const person: Person = {
      id: this.id,
      fname: this.fname,
      lname: this.lname
    }
    console.log("Dispatched")
    console.log(person)

    this.store.dispatch(add({person}))

  }

  ngOnInit(): void {

  }
}
