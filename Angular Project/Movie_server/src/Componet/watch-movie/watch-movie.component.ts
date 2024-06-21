import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Service/movie.service';

@Component({
  selector: 'app-watch-movie',
  standalone: true,
  imports: [],
  templateUrl: './watch-movie.component.html',
  styleUrl: './watch-movie.component.css'
})
export class WatchMovieComponent implements OnInit {
 
  Movies:any | undefined
  constructor(private MovieServices: MovieService) { }

  getmission() {
    this.MovieServices.GetMission().subscribe((data:any)=>{
      this.Movies = data
    })

  }
  ngOnInit(): void {
    this.getmission();
  }
} 
