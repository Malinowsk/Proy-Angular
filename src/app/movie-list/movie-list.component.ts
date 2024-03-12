import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { CommonModule, NgFor } from '@angular/common';
import { NgClass } from '@angular/common';
import { StartsIntegerComponent } from '../starts-integer/starts-integer.component';
import { MovieService } from '../movie.service';
import { MovieDataService } from '../movie-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [ StartsIntegerComponent, CommonModule,HttpClientModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {

  films : Movie[] = [];

  constructor(private films_fav: MovieService,private dataService: MovieDataService){}
  
  ngOnInit(): void {
    this.dataService.getAll().subscribe(films => this.films=films )
  }

  addtoFavorite(movie:Movie,i:number):void{
    this.films_fav.addtoFavorite(movie);
    let element :  Element | null = document.querySelector("#btn-fav"+i);
    
    if(element)
      element.classList.toggle("fav");
      let elementchildren :  Element | null | undefined = element?.firstElementChild;
      if(elementchildren)
        if(elementchildren.classList.contains("fa-check")){
          elementchildren.classList.replace("fa-check","fa-plus");
        }
        else{
          elementchildren.classList.replace("fa-plus","fa-check");
        }
  }

} 
