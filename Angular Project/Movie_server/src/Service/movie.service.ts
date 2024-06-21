import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url ="http://localhost:3000/Movie"
  constructor(private MovieClient:HttpClient) { }
  
  GetMission(){
    return this.MovieClient.get(this.url)
  }
}
