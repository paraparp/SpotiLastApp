import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  //  Client ID     : 9b88ce9e2f9d4c7f946115e343f4d7a0
  // Client Secret : 791ec09adfe0422e96caa974780e84d6
  url: string = '';
  token: string = 'BQD-FsVAEUNFLrstQTc9SNaEt1N_K9NIdakyUAlZyJxu7K4lLfBR185fzoMbQUaxl_SzIDnV-2ONz0enBB4';

  constructor(private http: HttpClient) { }

  getQuery(query: string) {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
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

  // postPlaylist() {
  //
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.token}`
  //   });
  //   const url = `https://api.spotify.com/v1/${query}`;
  //   console.log(url);
  //
  //   return this.http.post(url, { headers });
  //
  // }

  // getAccessToken() {
  //
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });
  //
  //   const body = new FormData();
  //   body.append('grant_type', `client_credentials`);
  //   body.append('client_id', `9b88ce9e2f9d4c7f946115e343f4d7a0`);
  //   body.append('client_secret', `791ec09adfe0422e96caa974780e84d6`);

  //
  //   return this.http.put('https://accounts.spotify.com/api/token', {
  //     'grant_type': `client_credentials`,
  //     'client_id': `9b88ce9e2f9d4c7f946115e343f4d7a0`,
  //     'client_secret': `791ec09adfe0422e96caa974780e84d6`
  //
  //   }, { headers })
  // }
  //
  // getToken() {
  //   let params = ('grant_type=client_credentials');
  //   let client_id = '9b88ce9e2f9d4c7f946115e343f4d7a0'; // Your client id
  //   let client_secret = '791ec09adfe0422e96caa974780e84d6'; // Your secret
  //   let encoded = btoa(client_id + ':' + client_secret);
  //   let headers = new Headers();
  //   headers.append('Authorization', 'Basic ' + encoded);
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   let proxy = 'https://cors-anywhere.herokuapp.com/';
  //   let uurl = 'https://accounts.spotify.com/api/token';
  //
  //   return this.http.post(proxy + uurl, params, { headers: headers })
  //     .map(res => {
  //       let data = res.json()
  //       return data;
  //     });
  // }
}
