import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  url: string = '';

  constructor(private http: HttpClient) { }

  getQuery(query: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAoYLvvWWS0mnIjsks8-vL3WxA7p5ijdmNBHItwOrrNF-4co6PMankstSA1Povl22B9mkzabgBjtlPNSnk'
    });
    const url = `https://api.spotify.com/v1/${query}`;
    console.log(url);

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtist(termino: string) {
    console.log(this.getQuery(`search?q=${termino}&type=artist&limit=15`));
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }
}
