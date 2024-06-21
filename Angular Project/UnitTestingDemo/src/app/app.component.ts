import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestingService } from '../Service/testing.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnitTestingDemo';
  user = "Tarun HEllo word application app";

  Arryr = ["SHAYAMA","TARUN","PRnay","Vinay"];
  

}
