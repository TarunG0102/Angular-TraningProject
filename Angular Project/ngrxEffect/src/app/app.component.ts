import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReaderComponent } from '../Componet/reader/reader.component';
import { WriterComponent } from '../Componet/writer/writer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReaderComponent,WriterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrxDemo';
}
