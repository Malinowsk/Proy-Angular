import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie-list/movie';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-favorite.component.html',
  styleUrls: ['./movie-favorite.component.css']
})
export class MovieFavoriteComponent {

  favList$ : Observable<Movie[]> | undefined | null;
 
  constructor(private films_fav: MovieService){
    this.favList$ = films_fav.favList.asObservable();
  }
 

}
