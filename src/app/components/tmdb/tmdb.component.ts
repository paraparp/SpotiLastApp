import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-tmdb',
  templateUrl: './tmdb.component.html',
  styleUrls: ['./tmdb.component.css']
})
export class TmdbComponent implements OnInit {
  data: any;

  constructor(public ps: PeliculasService) {
    this.getTracks();

  }

  ngOnInit() {
  }

  getTracks() {
    this.ps.getPopulares().subscribe(data => {
      this.data = data;
      console.log(data)
    });
  }
}
