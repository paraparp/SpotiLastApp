import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Jsonp, Http, } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  private apikey: string = "c621c1a131a0e141ce87483e0d33f806";
  private urlMoviedb: string = "https://api.themoviedb.org/3";
  url: string;
  res: any[] = [];

  constructor(private jsonp: Jsonp, private http: Http) { }

  // getPopulares() {
  //   let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
  //
  //   return this.http.get(url)
  //     .map(res => res.json());
  //   )
  // }

  // getPopulares1(): Observable<any> {
  //
  //   let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=
  //   ${this.apikey}&language=es&callback=JSONP_CALLBACK`;
  //
  //   console.log(url);
  //
  //   return this.jsonp.get(url)
  //     .map(res => res.json());
  //
  // }

  getPopulares() {

    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es?callback=JSONP_CALLBACK`;

    console.log(url);
    return this.jsonp.get(url).pipe(map(data => data));


  }




}
