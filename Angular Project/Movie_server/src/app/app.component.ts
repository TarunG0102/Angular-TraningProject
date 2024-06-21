import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddMovieComponent } from '../Componet/add-movie/add-movie.component';
import { WatchMovieComponent } from '../Componet/watch-movie/watch-movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddMovieComponent,WatchMovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie_server';
}
