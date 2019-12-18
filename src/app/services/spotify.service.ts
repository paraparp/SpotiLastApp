import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  url: string = '';
  token: string = 'BQCiVEtLrZNahgbvsSL77B1e0W5HYdw7MKx8EuU4N1B1ZeXaLphqtkoE7L_KFZgxY0-AHwOTqH2chaeZ5Q';

  constructor(private http: HttpClient) { }

  getQuery(query: string) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    const url = `https://api.spotify.com/v1/${query}`;
    console.log(url);

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));

  }

  getArtists(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));

  }

  getArtist(id: string) {

    return this.getQuery(`artists/${id}`)
    //    .pipe(map(data => data['artist'].items));

  }

  getArtistTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
      .pipe(map(data => data['tracks']));
  }
}
