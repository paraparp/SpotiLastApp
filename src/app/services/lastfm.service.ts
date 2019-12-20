import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LastfmService {


  APIkey	= '83b45f0e3f26a44e877c21ac1c132bf3';
  Sharedsecret	= 'b69e33ac1058f3ba3d384e5a77ce652e';



  constructor(private http: HttpClient) { }getQuery(query: string) {

   
    const url = `http://ws.audioscrobbler.com/2.0/${query}`;
    console.log(url);
  
    return this.http.get(url);
  }
  

  getUserTracks(){

    return this.getQuery(`?method=user.getweeklytrackchart&user=karbasf&api_key=${this.APIkey}&from=147606560&to=1576670400&format=json`)
  .pipe(map(data => data['weeklytrackchart']));
  }
}
