import { Component } from '@angular/core';
import { MovieListComponent } from "../movie-list/movie-list.component";
import { MovieFavoriteComponent } from "../movie-favorite/movie-favorite.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movie-films',
  standalone: true,
  imports: [MovieListComponent,MovieFavoriteComponent,HttpClientModule],
  templateUrl: './movie-films.component.html',
  styleUrl: './movie-films.component.css'
})
export class MovieFilmsComponent {

}
