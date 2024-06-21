import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SpidermanComponent } from '../Componet/spiderman/spiderman.component';
import { IronmanComponent } from '../Componet/ironman/ironman.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,SpidermanComponent,IronmanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicedemo';
}
