import { RouterModule, Routes } from '@angular/router';
import { MovieFilmsComponent } from "./movie-films/movie-films.component";
import { MovieAboutComponent } from "./movie-about/movie-about.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'peliculas',
        pathMatch:'full'
    },
    {
        path: 'peliculas',
        component: MovieFilmsComponent
    },
    {
        path: 'acerca-de',
        component: MovieAboutComponent
    }
];

