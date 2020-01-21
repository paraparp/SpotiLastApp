import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-tmdb',
  templateUrl: './tmdb.component.html',
  styles: []
})
export class TmdbComponent {

  //https://github.com/jalmansa88/pelis-app/blob/master/src/app/pipes/pelicula-imagen.pipe.ts
  displayedColumns: string[] = ['title', 'vote', 'popularity', 'cover'];



  nuevasPeliculas: any[] = [];
  loading: boolean;

  constructor(private moviedb: PeliculasService) {

    this.loading = true;



  }

  getFilms(year: string) {
    this.moviedb.getBestMoviesByYear(year
    )
      .subscribe((data: any) => {

        console.log(data);
        this.nuevasPeliculas = data;
        this.loading = false;
        console.log(year);
      });
  }

}
