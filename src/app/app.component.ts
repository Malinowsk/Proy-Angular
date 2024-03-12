import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { MovieFavoriteComponent } from './movie-favorite/movie-favorite.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet,RouterLink,MovieFavoriteComponent,MovieListComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Películas';

  constructor(){}
}

