import { Injectable } from '@angular/core';
import { Movie } from './movie-list/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private _favList : Movie[] = [];

  favList : BehaviorSubject<Movie[]> = new BehaviorSubject(this._favList);

  addtoFavorite(movie:Movie){
    let item : Movie | undefined  = this._favList.find((v1)=>  v1.nombre==movie.nombre)
    
    if(!item)
      this._favList.push({ ... movie});
    else
      this._favList = this._favList.filter(v1 => v1.nombre != movie.nombre);
    console.log(this._favList);
    this.favList.next(this._favList);
  }

  constructor() {}
}
