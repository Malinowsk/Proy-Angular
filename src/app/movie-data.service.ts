import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie-list/movie';

const URL = "https://65ef27f5ead08fa78a4ff18a.mockapi.io/peliculas";

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http:HttpClient) {
    
   }

   public getAll(): Observable<Movie[]>{
    console.log(this.http.get<Movie[]>(URL));
    return this.http.get<Movie[]>(URL);
   }
}
